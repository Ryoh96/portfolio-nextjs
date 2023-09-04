import styled, { css } from 'styled-components'

const ImageWrapper = styled.figure<{ isCurrent: boolean }>`
  width: 40svw;
  height: 45svw;
  max-width: 800px;
  max-height: 900px;
  position: relative;
  transform: translateX(10%);
  transition: transform 0.5s ease-in-out;
  overflow: hidden;

  grid-area: pic;

  ${({ theme }) => theme.media.u_sp`
    width: 70svw;
    height: 100%;
  `}

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      transform: translateX(0px);
    `}

  > img {
    &:first-child {
      position: absolute !important;
      filter: grayscale(100%);
    }

    &:last-child {
      opacity: 0.4;
      mask-image: url('/gear-menu.svg');
      mask-size: 0;
      mask-position: center;
      mask-repeat: no-repeat;
      -webkit-mask-image: url('/gear-menu.svg');
      -webkit-mask-size: 0 0;
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      transition: all 0.5s ease-out;

      &:hover {
        mask-size: 500% 500%;
        -webkit-mask-size: 500% 500%;
      }
    }
  }
`

export default ImageWrapper
