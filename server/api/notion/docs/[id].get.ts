import { NotionToMarkdown } from 'notion-to-md'
import { notion } from '~/utils/notion'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    createError({
      statusCode: 400,
      message: 'id is required',
    })
  }

  const n2m = new NotionToMarkdown({
    notionClient: notion,
  })

  return await n2m.pageToMarkdown(id as string)
})
