import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

type LogoProps = {
  type: 'normal' | 'back'
}

const ImageWrapper = styled.figure`
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.2) rotate(360deg);
  }

  ${({ theme }) => theme.media.u_xl`
    width: 70px;
    height: 70px;
  `}
  ${({ theme }) => theme.media.u_lg`
    width: 66px;
    height: 66px;
  `}
  ${({ theme }) => theme.media.u_sp`
    width: 58px;
    height: 58px;
  `}
    ${({ theme }) => theme.media.u_sm`
    width: 50px;
    height: 50px;
  `}

  img {
    position: static !important;
  }
`

const Logo = ({ type }: LogoProps) => {
  return (
    <Link href="/">
      <ImageWrapper>
        {type === 'normal' ? (
          <Image
            src="/gear-logo.svg"
            alt="Logo"
            fill
            style={{ objectFit: 'contain', aspectRatio: '1 / 1' }}
          />
        ) : (
          <Image
            src="/gear-back.svg"
            alt="Logo"
            fill
            style={{ objectFit: 'contain', aspectRatio: '1 / 1' }}
          />
        )}
      </ImageWrapper>
    </Link>
  )
}

export default Logo
