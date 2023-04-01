import type { NextPage } from 'next'
import styled from 'styled-components'

import _Description from '@/components/atoms/Description'
import _Title from '@/components/atoms/Title'
import Container from '@/components/layout/Container'

const PageTitle = styled(_Title)`
  margin-top: 1em;
  margin-bottom: 0.5em;
`

const PageDescription = styled(_Description)`
  margin-bottom: 2.5em;
`

const Section = styled.section`
  margin-bottom: 88px;

  ${({ theme }) => theme.media.u_sp`
    margin-bottom: 60px;
  `}
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
  opacity: 0.9;

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
  align-items: center;
  ${({ theme }) => theme.media.u_xs`
      font-size: 15px;
  `}

  &::before {
    content: '';
    display: block;
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

const About: NextPage = () => {
  return (
    <Container>
      <AboutInner>
        <PageTitle>About</PageTitle>
        <PageDescription>自己紹介・保有資格・受賞歴</PageDescription>
        <Section>
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
        <Section>
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
            <ListItem>HTML / Sass(CSS)によるモダンなコーディング等</ListItem>
          </List>
          <Paragraph>
            場合によって、デザインからPHPやPythonによるバックグラウンド構築も可能です。
          </Paragraph>
        </Section>
        <Section>
          <Title>保有資格</Title>
          <List>
            <ListItem>HTMLプロフェッショナル認定試験 (レベル2)</ListItem>
            <ListItem>色彩検定 (2級・優秀賞)</ListItem>
            <ListItem>Webクリエイター能力認定試験 (エキスパート)</ListItem>
            <ListItem>JavaSE (Sliver)</ListItem>
            <ListItem>Oracle (Bronze)</ListItem>
          </List>
        </Section>
        <Section>受賞歴</Section>
        <Paragraph>色彩検定協会優秀賞 (2019年度)</Paragraph>
      </AboutInner>
    </Container>
  )
}

export default About
