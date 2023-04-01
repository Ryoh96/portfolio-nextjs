import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const Base = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  body,
  html {
    width: 100%;
    height: 100%;
    background-color: black;
    overflow-x:auto;
    color: #fff;
    font-family: 'Noto Serif JP', "游明朝体", 'Yu Mincho', 'YuMincho', serif;
    &::-webkit-scrollbar {
      /* Chrome, Safari 対応 */
      display: none;
    }
    scrollbar-width: none; /* Firefox 対応 */
  }

}
`

const GlobalStyle = () => {
  return (
    <>
      <Reset />
      <Base />
    </>
  )
}

export default GlobalStyle
