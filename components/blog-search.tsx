"use client"

import Image from "next/image"
import { env } from "@/config/env"
import { WordPressPost } from "@/types"
import { Search, Loader2, ChevronRight } from "lucide-react"
import { useState, useCallback, useRef, useEffect } from "react"

interface BlogSearchProps {
  isSearchOpen: boolean
}

const BlogSearch = ({ isSearchOpen }: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<WordPressPost[]>([])
  const [showResults, setShowResults] = useState(false)
  const searchTimer = useRef<NodeJS.Timeout | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const closeResults = useCallback(() => {
    setResults([])
    setError(null)
    setShowResults(false)
  }, [])

  const fetchPosts = useCallback(async (term: string) => {
    if (term.length < 2) {
      closeResults()
      return
    }

    setIsLoading(true)
    setError(null)
    setShowResults(true)
    try {
      const response = await fetch(
        `https://coinfutura.com/wp-json/wp/v2/posts?search=${encodeURIComponent(term)}&per_page=5&_embed=wp:featuredmedia`,
      )
      if (!response.ok) throw new Error("Failed to fetch posts")
      const data: WordPressPost[] = await response.json()
      setResults(data)
      setError(null)
    } catch (err) {
      console.error("[v0] Blog search error:", err)
      setResults([])
      setError("Failed to load results. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [closeResults])

  const handleSearch = useCallback(
    (value: string) => {
      setSearchTerm(value)
      clearTimeout(searchTimer.current)
      searchTimer.current = setTimeout(() => {
        fetchPosts(value)
      }, 300)
    },
    [fetchPosts],
  )

  const getFeaturedImage = (post: WordPressPost): string | null => {
    return post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.thumbnail?.source_url || null
  }

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeResults()
        setSearchTerm("")
      }
    }

    if (showResults) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showResults, closeResults])

  // Close results on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showResults) {
        closeResults()
        setSearchTerm("")
      }
    }

    if (showResults) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [showResults, closeResults])

  // Close results on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showResults) {
        closeResults()
        setSearchTerm("")
      }
    }

    if (showResults) {
      window.addEventListener("scroll", handleScroll, true)
      return () => window.removeEventListener("scroll", handleScroll, true)
    }
  }, [showResults, closeResults])

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  return (
    <div 
      ref={containerRef}
      className={`min-lg:relative min-lg:h-full min-xl:w-80 min-lg:w-64 min-lg:flex min-lg:items-center min-lg:justify-end max-lg:absolute max-lg:right-3 max-lg:top-full max-lg:w-96 max-lg:py-2.5 max-lg:bg-white max-lg:dark:bg-gray-800 max-lg:border max-lg:border-gray-950/5 max-lg:dark:border-white/10 max-lg:rounded-b-lg max-lg:shadow z-50 text-sm ${isSearchOpen ? '' : 'max-lg:hidden'}`}
    >
      <div className="relative w-full max-lg:max-w-[calc(100%-12px)] mx-auto">
        <input 
          ref={inputRef}
          type="text" 
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className="block w-full h-10 rounded-full px-4 py-2 text-gray-600 dark:text-gray-300 placeholder:text-gray-600 dark:placeholder:text-gray-300 bg-white dark:bg-white/5 inset-ring inset-ring-gray-400 dark:inset-ring-white/15 focus-visible:outline-0"
          autoComplete="off"
        />
        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gray-400 pointer-events-none"/>
      </div>

      {/* Result */}
      <div className={`w-full max-h-[430px] overflow-y-auto lg:absolute lg:left-0 lg:top-full lg:bg-white lg:dark:bg-gray-800 lg:border lg:border-gray-950/5 lg:dark:border-white/10 lg:rounded-b-lg lg:shadow lg:z-50 lg:mt-0.5 ${showResults ? "" : "hidden"}`}>
        {isLoading ? (
          <div className="p-4 flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Searching...</span>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="divide-y divide-gray-950/5 dark:divide-white/10">
              {results.map((post) => (
                <a 
                  key={post.id}
                  href={post.link} 
                  className="flex items-center gap-x-2.5 p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 group"
                  onClick={() => closeResults()}
                >
                  <div className="flex-shrink-0">
                    <Image 
                      src={getFeaturedImage(post)! || "/icons/cfu.jpg"}
                      alt={post.title.rendered}
                      width={56}
                      height={48}
                      className="w-14 h-12 object-cover rounded wp-post-image"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium article-title group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                      {post.title.rendered.replace(/<[^>]*>/g, "")}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center p-3">
              <a 
                href={`${env.mainDomain}?s=${encodeURIComponent(searchTerm)}`}
                className="flexCenter gap-x-0.5 btn btn-primary btn-sm"
                onClick={() => closeResults()}
              >
                view more results
                <ChevronRight size={16}/>
              </a>
            </div>
          </>
        ) : searchTerm ? (
          <p className="text-center p-3">No results found</p>
        ) : (
          <p className="text-center p-3">Type to search...</p>
        )}
      </div>
    </div>
  )
}

export default BlogSearch
