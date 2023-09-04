import Image from 'next/image'
import styled, { css } from 'styled-components'

const ImageWrapper = styled.figure<{
  appear: boolean
}>`
  img {
    position: static !important;
  }
  position: relative;
  transform: scale(0);
  color: ${({ appear }) => appear && 'red'};

  ${({ appear }) =>
    appear &&
    css`
      animation: popUp 0.6s ease-in-out forwards;
    `};

  @keyframes popUp {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(140%);
    }
    100% {
      transform: scale(100%);
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
          priority={true}
          loading="eager"
          sizes="(max-width: 624px) 100vw, (max-width: 959px) 50vw, (max-width: 1295px) 33vw, 25vw"
        />
      </ImageWrapper>
    </>
  )
}

export default PopUpImage
