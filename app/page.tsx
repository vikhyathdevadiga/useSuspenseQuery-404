import { Suspense } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from './getQueryClient'
import { fetchUsers, fetchPosts, fetchComments } from './api-client'
import Users from './users'
import Posts from './posts'
import Comments from './comments'
export const dynamic = 'force-dynamic'

export default async function Home() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  await queryClient.prefetchQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Next.js App with Suspense Query and SSR</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Suspense fallback={<div>Loading users...</div>}>
            <Users />
          </Suspense>
          <Suspense fallback={<div>Loading posts...</div>}>
            <Posts />
          </Suspense>
          <Suspense fallback={<div>Loading comments...</div>}>
            <Comments />
          </Suspense>
        </div>
      </main>
    </HydrationBoundary>
  )
}