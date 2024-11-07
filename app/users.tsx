'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchUsers } from './api-client'

export default function Users() {
  const { data: users } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Users</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}