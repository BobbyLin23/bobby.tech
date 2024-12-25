import type { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import process from 'node:process'
import { notion } from '~/utils/notion'

export default defineEventHandler(async () => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.NOTION_REPORT_DATABASE_ID as string,
    filter: {
      property: 'State',
      select: {
        equals: 'Publish',
      },
    },
  })
  const { object, results } = response

  if (object === 'list') {
    return results as PageObjectResponse[]
  }

  return [] as PageObjectResponse[]
})
