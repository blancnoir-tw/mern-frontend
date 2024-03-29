import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

      * {
        box-sizing: border-box;
      }

      html {
        font-family: 'Open Sans', sans-serif;
      }

      body {
        margin: 0;
        background: #4d4d4d;
      }
    `}
  />
)

export default GlobalStyle
