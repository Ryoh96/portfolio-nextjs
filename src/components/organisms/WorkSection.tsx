import Image from 'next/image'
import { Fragment } from 'react'
import { useInView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'

import type { WorkType } from '@/constants/works'
import { prata } from '@/font/prata'

const Section = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`

const Title = styled.h2.attrs({
  className: prata.className,
})`
  text-align: center;
  font-size: clamp(50px, 5vw, 80px);
  min-height: 0vw;
  padding-top: 1.5em;
  padding-bottom: 1.4em;

  ${({ theme }) => theme.media.u_xxl`
    padding-top: 1.3em;
    padding-bottom: 1.1em;
  `}
  ${({ theme }) => theme.media.u_xl`
    padding-top: 1.3em;
    padding-bottom: 0.8em;
  `}
  ${({ theme }) => theme.media.u_sp`
    margin-bottom: 0.6em;
    padding-top: 60px;
  `}
  ${({ theme }) => theme.media.u_sm`
    font-size: 36px;
  `}
  ${({ theme }) => theme.media.u_xs`
    font-size: 28px;
  `}
  ${({ theme }) => theme.media.u_xxs`
    padding-top: 1.7em;
  `}
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.u_sp`
    flex-direction: column-reverse;
  `}
`

const DList = styled.dl<{
  isShow: boolean
}>`
  display: flex;
  flex-direction: column;
  flex: 0 0 48%;
  font-size: clamp(16px, 1.63vw, 26px);
  text-align: left;
  line-height: 1.6;
  margin-bottom: 0.6em;

  transform: translate(-40px, 100px);
  opacity: 0;
  transition: transform 1s, opacity 1s ease-in;

  ${({ isShow }) =>
    isShow &&
    css`
      transform: translate(0, 0);
      opacity: 1;
    `}

  ${({ theme }) => theme.media.u_xs`
      font-size: 14px;
      display: flex;
      line-height: 1.5;
      > *:first-child {
        margin-right: 0.6em;
        word-break: keep-all;
      }
  `}
`

const DTerm = styled.dt`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: block;
    width: 0.5em;
    height: 0.5em;
    background-color: #fff;
    transform: rotate(45deg);
    margin-right: 0.8em;
  }

  ${({ theme }) => theme.media.u_sp`
    font-size: 14px;
  `}
`

const DDesc = styled.dd`
  margin-left: 1.3em;
  margin-bottom: 1em;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 0.95em;
  opacity: 0.85;

  ${({ theme }) => theme.media.u_sp`
    margin-left: 0em;
    font-size: 14px;
  `}

  &::before {
    content: '';
    display: block;
    width: 0.5em;
    height: 2px;
    background-color: #fff;
    margin-right: 0.8em;
  }
`
const ImageWrapper = styled.figure<{
  isShow: boolean
}>`
  flex: 1 1 50%;
  max-height: 60svh;
  overflow-y: hidden;
  position: relative;
  border: 3px solid #fff;
  height: content-fit;

  transform: translate(40px, 100px);
  opacity: 0;
  transition: transform 1s, opacity 1s ease-in;

  ${({ isShow }) =>
    isShow &&
    css`
      transform: translate(0, 0);
      opacity: 1;
    `}

  ${({ theme }) => theme.media.u_sp`
    margin-bottom: 40px;
    max-width: 100%;
    width: 100%;
  `}
  ${({ theme }) => theme.media.u_sm`
    margin-bottom: 30px;
  `}
  ${({ theme }) => theme.media.u_xs`
    max-margin-bottom: 20px;
  `}

  img {
    width: 100%;
    height: auto;
    position: static !important;
    object-fit: cover;
    object-position: 50% 50% !important;

    ${({ theme }) => theme.media.u_sp`
    height: 46svh;
    max-height: 46svh;
  `}
    ${({ theme }) => theme.media.u_sm`
    max-height: 40svh;
  `}
  ${({ theme }) => theme.media.u_xs`
    max-height: 38svh;
  `}
  }
`

type WorkSectionProps = {
  work: WorkType
}

const WorkSection = ({ work }: WorkSectionProps) => {
  const options = {
    threshold: 0.4,
  }

  const { ref, inView } = useInView(options)
  return (
    <Section ref={ref}>
      <Title>{work.title}</Title>
      <FlexContainer>
        <DList isShow={inView}>
          {work.list.map((item, index) => (
            <Fragment key={index}>
              <DTerm>{item.term}</DTerm>
              <DDesc>{item.desc}</DDesc>
            </Fragment>
          ))}
        </DList>
        <ImageWrapper isShow={inView}>
          <Image alt={work.title} src={work.url} fill />
        </ImageWrapper>
      </FlexContainer>
    </Section>
  )
}

export default WorkSection
