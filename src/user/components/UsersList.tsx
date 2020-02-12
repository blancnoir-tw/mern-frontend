import React from 'react'
import styled from '@emotion/styled'

import { User } from '../type'
import UserItem from './UserItem'

type Props = {
  items: User[]
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserList = ({ items }: Props) => {
  if (items.length === 0) {
    return (
      <Wrapper>
        <h2>No users found.</h2>
      </Wrapper>
    )
  }

  return (
    <ul>
      {items.map(user => (
        <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
      ))}
    </ul>
  )
}

export default UserList
