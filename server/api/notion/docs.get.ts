import { notion } from '~/utils/notion'

export default defineEventHandler(async () => {
  const response = await notion.databases.query({
    database_id: '2a17b24a27154378a6802f9ffc21b66b',
  })
  return response
})
