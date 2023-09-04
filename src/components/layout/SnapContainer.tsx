import styled from 'styled-components'

const SnapContainer = styled.div`
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
  scrollbar-width: none; /* Firefox 対応 */
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100svh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
`
export default SnapContainer
