import React from 'react'

import { User } from '../type'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS: User[] = [
    {
      id: 'u1',
      image: 'https://source.unsplash.com/random',
      name: 'Tatsuya',
      places: 3,
    },
  ]

  return <UsersList items={USERS} />
}

export default Users
