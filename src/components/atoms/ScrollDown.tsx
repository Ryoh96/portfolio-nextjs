import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ScrollDownProps = {
  isLast: boolean
}

const Text = styled.span`
  font-size: 20px;
`

const ScrollDownWrapper = styled.div`
  color: #fff;
  mix-blend-mode: difference;
  width: 100%;
  text-align: center;
  justify-items: center;
  z-index: 10;
  font-size: 16px;
  display: grid;
  gap: 30px;
`

const IconWrapper = styled.div`
  animation: scrollDown 1.8s linear infinite;
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

const CopyRight = styled.span`
  
`

const ScrollDown = ({ isLast }: ScrollDownProps) => {
  return (
    <ScrollDownWrapper>
      {!isLast ? (
        <>
          <Text>Scroll Down</Text>
          <IconWrapper>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </IconWrapper>
        </>
      ) : (
        <CopyRight>© RYOH KUROKI. All Rights Reserved.</CopyRight>
      )}
    </ScrollDownWrapper>
  )
}

export default ScrollDown