import { writeFile } from "node:fs/promises"
import path from "node:path"

const token = process.env.INSTAGRAM_ACCESS_TOKEN

if (!token) {
  console.error(
    "INSTAGRAM_ACCESS_TOKEN não definido. Crie um arquivo .env na raiz do projeto (veja .env.example) antes de rodar este script."
  )
  process.exit(1)
}

const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
const endpoint = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=50`

async function main() {
  const response = await fetch(endpoint)

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Instagram API respondeu ${response.status}: ${body}`)
  }

  const json = await response.json()

  const posts = (json.data ?? []).map((item) => ({
    id: item.id,
    caption: item.caption ?? null,
    mediaType: item.media_type,
    mediaUrl: item.media_url,
    thumbnailUrl: item.thumbnail_url ?? null,
    permalink: item.permalink,
    timestamp: item.timestamp,
  }))

  const outPath = path.resolve(process.cwd(), "src/data/instagram.generated.json")
  await writeFile(outPath, JSON.stringify(posts, null, 2) + "\n")
  console.log(`Salvei ${posts.length} posts em ${path.relative(process.cwd(), outPath)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
