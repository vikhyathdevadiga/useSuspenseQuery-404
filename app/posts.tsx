'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPosts } from './api-client'

export default function Posts() {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}