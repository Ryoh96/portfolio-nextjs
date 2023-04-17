import type { NextPage } from 'next'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'

import _Description from '@/components/atoms/Description'
import _Title from '@/components/atoms/Title'
import Container from '@/components/layout/Container'
import Header from '@/components/organisms/Header'
import Particle from '@/components/organisms/Particle'
import Meta from '@/components/utils/Meta'
import { getRandomColor } from '@/utils/randomColor'

const PageTitle = styled(_Title)`
  padding-top: 1em;
  margin-bottom: 0.5em;
`

const PageDescription = styled(_Description)`
  margin-bottom: 2.5em;
`

const Section = styled.section<{
  inView?: boolean
  childrenLength?: number
}>`
  margin-bottom: 88px;

  ${({ theme }) => theme.media.u_sp`
    margin-bottom: 60px;
  `}

  > * {
    transition: all 2s;
    opacity: 0;
  }
  ${({ childrenLength }) =>
    [...Array(childrenLength)].map(
      (_, index) => css`
        > *:nth-child(${index + 1}) {
          color: ${getRandomColor()};
        }
      `
    )}

  ${({ inView, childrenLength }) =>
    inView &&
    [...Array(childrenLength)].map(
      (_, index) => css`
        > *:nth-child(${index + 1}) {
          transition-delay: ${index * 0.2}s;
          color: #fff;
          opacity: 1;
        }
      `
    )}
`

const Title = styled.h2`
  font-size: clamp(24.6px, 3.2vw, 48px);
  min-height: 0vw;
  margin-bottom: 0.8em;
  border-left: 0.17em solid #fff;
  font-weight: bold;
  padding-left: 0.4em;

  ${({ theme }) => theme.media.u_xs`
      font-size: 22px;
  `}
`

const Paragraph = styled.p`
  font-size: clamp(16px, 1.46vw, 22px);
  min-height: 0vw;
  line-height: 1.8;
  margin-bottom: 1.8em;

  ${({ theme }) => theme.media.u_xs`
      font-size: 15px;
  `}
`

const List = styled.ul`
  display: grid;
  gap: 1em;
  margin-bottom: 1.8em;
`

const ListItem = styled.li`
  font-size: clamp(16px, 1.46vw, 22px);
  min-height: 0vw;
  opacity: 0.9;
  display: flex;
  gap: 0.8em;
  line-height: 1.8;
  align-items: center;
  ${({ theme }) => theme.media.u_xs`
      font-size: 15px;
  `}

  &::before {
    content: '';
    display: blok;
    width: 0.5em;
    height: 0.5em;
    background-color: #fff;
    transform: rotate(45deg);
  }
`

const AboutInner = styled.div`
  width: min(960px, 80%);
  position: relative;
  z-index: 2;
  margin-inline: auto;
`

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const About: NextPage = () => {
  const options = {
    threshold: 0.6,
    triggerOnce: true,
  }

  const { ref: ref1, inView: inView1 } = useInView(options)
  const { ref: ref2, inView: inView2 } = useInView({ ...options, delay: 2000 })
  const { ref: ref3, inView: inView3 } = useInView(options)
  const { ref: ref4, inView: inView4 } = useInView(options)
  return (
    <>
      <Head>
        <Meta
          title="About"
          desc="Aboutページ。経歴や可能な仕事、資格や受賞歴について記載。"
          url="/about"
        />
      </Head>
      <Header type="back" key="about" />
      <AboutWrapper>
        <Container>
          <AboutInner>
            <PageTitle>About</PageTitle>
            <PageDescription>自己紹介・保有資格・受賞歴</PageDescription>
            <div ref={ref1}>
              <Section inView={inView1} childrenLength={4}>
                <Title>経歴</Title>
                <Paragraph>
                  筑波大学大学院コンピュータサイエンス専攻修了。
                  <br />
                  学生時代は画像認識の研究に従事。
                </Paragraph>
                <Paragraph>
                  その後SEとして働き、フロントエンドからバックエンドまで一通りの経験を積む。
                </Paragraph>
                <Paragraph>現在は退職してフリーで活動中。</Paragraph>
              </Section>
            </div>
            <div ref={ref2}>
              <Section inView={inView2} childrenLength={4}>
                <Title>現在引き受けている仕事</Title>
                <Paragraph>
                  WebアプリやWebサイトのフロントエンド開発全般を行います。
                </Paragraph>
                <List>
                  <ListItem>
                    Next.js(React)やTypeScriptを用いたフロントエンド開発
                  </ListItem>
                  <ListItem>JamstackなWebサイトの構築</ListItem>
                  <ListItem>WebサイトのCMS化・レスポンシブ対応</ListItem>
                  <ListItem>
                    HTML / Sass(CSS)によるモダンなコーディング等
                  </ListItem>
                </List>
                <Paragraph>
                  場合によって、デザインからPHPやPythonによるバックグラウンド構築も可能です。
                </Paragraph>
              </Section>
            </div>
            <div ref={ref3}>
              <Section inView={inView3} childrenLength={3}>
                <Title>保有資格</Title>
                <List>
                  <ListItem>HTMLプロフェッショナル認定試験 (レベル2)</ListItem>
                  <ListItem>色彩検定 (2級・優秀賞)</ListItem>
                  <ListItem>
                    Webクリエイター能力認定試験 (エキスパート)
                  </ListItem>
                  <ListItem>JavaSE (Sliver)</ListItem>
                  <ListItem>Oracle (Bronze)</ListItem>
                </List>
              </Section>
            </div>
            <div ref={ref4}>
              <Section inView={inView4} childrenLength={2}>
                <Title>受賞歴</Title>
                <Paragraph>色彩検定協会優秀賞 (2019年度)</Paragraph>
              </Section>
            </div>
          </AboutInner>
        </Container>
      </AboutWrapper>
      <Particle />
    </>
  )
}

export default About
