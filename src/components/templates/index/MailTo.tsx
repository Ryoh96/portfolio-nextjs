import styled from 'styled-components'

export const MailTo = styled.a`
  min-height: 0vw;
  margin-bottom: 5vh;
  transition: 0.8s;
  /* transform: rotate(-30deg); */
  transform-origin: center center;
  font-size: clamp(18px, 2vw, 40px);
  color: inherit;
  display: block;
  text-decoration: underline;
  cursor: pointer;
  padding-top: 0.3em;
  position: relative;
  height: 1.5em;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    mix-blend-mode: difference;
    width: 0%;
    transition: width 0.5s ease-in-out;
    color: red;
    z-index: 2;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
  ${({ theme }) => theme.media.u_sp`
      margin-bottom: 0;
      align-self: center;
  `}
`