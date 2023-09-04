import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { useIsMenuOpenContext } from '@/contexts/IsMenuOpenContext'

type ScrollDownProps = {
  isLast: boolean
}

const Text = styled.span`
  font-size: 20px;
  position: relative;

  ${({ theme }) => theme.media.u_xl`
    font-size: 16px;
  `}
  ${({ theme }) => theme.media.u_xxl`
    font-size: 14px;
  `}
`

const ScrollDownWrapper = styled.div`
  color: #fff;
  /* mix-blend-mode: difference; */
  width: 100%;
  position: relative;
  text-align: center;
  justify-items: center;
  font-size: 16px;
  display: grid;
  gap: 30px;
`

const IconWrapper = styled.div`
  animation: scrollDown 1.8s linear infinite;
  width: 30px;
  font-size: 50px;
  ${({ theme }) => theme.media.u_sp`
    display: none;
  `}

  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`

const ScrollDown = ({ isLast }: ScrollDownProps) => {
  const { isMenuOpen } = useIsMenuOpenContext()
  return (
    <>
      {!isMenuOpen && (
        <ScrollDownWrapper>
          {!isLast ? (
            <>
              <Text>Scroll Down</Text>
              <IconWrapper>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </IconWrapper>
            </>
          ) : (
            <Text>© RYOH KUROKI. All Rights Reserved.</Text>
          )}
        </ScrollDownWrapper>
      )}
    </>
  )
}

export default ScrollDown
