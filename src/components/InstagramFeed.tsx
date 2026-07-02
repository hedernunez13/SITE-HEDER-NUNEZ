import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { siteConfig } from "@/data/navigation"
import { instagramImageUrl, instagramPosts } from "@/data/instagram"

export function InstagramFeed() {
  if (instagramPosts.length === 0) return null

  const posts = instagramPosts.slice(0, 6)

  return (
    <section className="container-editorial py-24 sm:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Instagram" title="Direto do feed." />
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs tracking-[0.2em] text-editorial uppercase hover:text-ink"
        >
          <ArrowUpRight className="size-4" strokeWidth={1.5} />
          Seguir no Instagram
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {posts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 6) * 0.05 }}
            className="group relative block aspect-square overflow-hidden bg-ink/5"
          >
            <img
              src={instagramImageUrl(post)}
              alt={post.caption ?? "Publicação no Instagram de Heder Nunez"}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
              <ArrowUpRight className="size-6 text-cream" strokeWidth={1.5} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
