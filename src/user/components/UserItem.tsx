import React from 'react'
import styled from '@emotion/styled'

type Props = {
  id: string
  image: string
  name: string
  placeCount: number
}

const Item = styled.li``

const Content = styled.div``

const ImageBox = styled.div``

const Info = styled.div``

const UserItem = ({ image, name, placeCount }: Props) => {
  return (
    <Item>
      <Content>
        <ImageBox>
          <img src={image} alt={name} />
        </ImageBox>
      </Content>
      <Info>
        <h2>{name}</h2>
        <h3>
          {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
        </h3>
      </Info>
    </Item>
  )
}

export default UserItem
