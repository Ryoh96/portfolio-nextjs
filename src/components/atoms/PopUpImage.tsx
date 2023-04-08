import Image from 'next/image'
import styled, { css } from 'styled-components'

const ImageWrapper = styled.figure<{
  appear: boolean
}>`

  img {
    position: static !important;
  }

  transform: scale(0);
  color: ${({ appear }) => appear && 'red'};

  ${({ appear }) =>
    appear &&
    css`
      animation: popUp 0.6s ease-in-out forwards;
    `};

  @keyframes popUp {
    0% {
      transform:  scale(0);
    }
    90% {
      transform:  scale(140%);
    }
    100% {
      transform:  scale(100%);
    }
  }
`

type PopupImageProps = {
  url: string
  appear: boolean
  className?: string
}

const PopUpImage = ({ url, appear, className }: PopupImageProps) => {
  return (
    <>
      <ImageWrapper appear={appear} className={className}>
        <Image
          src={url}
          alt=""
          fill
          style={{
            objectFit: 'contain',
            width: '100%',
          }}
          priority
        />
      </ImageWrapper>
    </>
  )
}

export default PopUpImage
