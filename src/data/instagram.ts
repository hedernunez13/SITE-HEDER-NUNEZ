import generated from "./instagram.generated.json"

export interface InstagramPost {
  id: string
  caption: string | null
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  mediaUrl: string
  thumbnailUrl: string | null
  permalink: string
  timestamp: string
}

export const instagramPosts = generated as InstagramPost[]

export function instagramImageUrl(post: InstagramPost) {
  return post.mediaType === "VIDEO" ? post.thumbnailUrl ?? post.mediaUrl : post.mediaUrl
}
