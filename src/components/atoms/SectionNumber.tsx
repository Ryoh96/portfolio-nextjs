import styled from 'styled-components'

type SectionNumberType = {
  sectionLength: number
  currentSection: number
}

const SectionNumberWrapper = styled.div`
  position: absolute;
  right: 0;
  color: #fff;
  font-size: clamp(35.8px, 4.7vw, 70px);
  min-height: 0vw;
  bottom: 50px;
  line-height: 1;
  transition: 0.5s;
`

const SectionNumberInner = styled.div`
  display: flex;
  height: 1em;
  overflow-y: hidden;
`

const Tens = styled.div`
  margin-right: 0.1em;
`

const Ones = styled.div<{
  currentSection: number
}>`
  display: grid;
  transition: transform 0.5s;

  transform: ${({ currentSection }) => `translateY(-${currentSection}em)`};

  ${({ theme }) => theme.media.u_sp`
    display: none;
  `}
`

const SectionNumber = ({
  sectionLength,
  currentSection,
}: SectionNumberType) => {
  return (
    <SectionNumberWrapper>
      <SectionNumberInner>
        <Tens>0</Tens>
        <Ones currentSection={currentSection}>
          {[...Array(sectionLength)].map((_, i) => (
            <span key={i}>{i+1}</span>
          ))}
        </Ones>
      </SectionNumberInner>
    </SectionNumberWrapper>
  )
}

export default SectionNumber
