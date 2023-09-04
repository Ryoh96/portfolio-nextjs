import Image from 'next/image'

import Button from '@/components/atoms/Button'
import Description from '@/components/templates/index/Description'
import ImageWrapper from '@/components/templates/index/ImageWrapper'
import MailTo from '@/components/templates/index/MailTo'
import ShowMoreButton from '@/components/templates/index/ShowMoreButton'
import Title from '@/components/templates/index/Title'
import type { SectionText } from '@/constants/topSectionTexts'

type Props = {
  section: SectionText
  index: number
  current: number
  sectionLength: number
}

const GridItem = ({ section, index, current, sectionLength }: Props) => {
  return (
    <>
      <Title as={index === 0 ? 'h1' : 'h2'}>{section.title}</Title>
      {current !== sectionLength - 1 ? (
        <Description>{section.description}</Description>
      ) : (
        <MailTo href="mailto:hello@kurokiryoh.com">
          {section.description}
        </MailTo>
      )}
      {section.link && (
        <ShowMoreButton href={section.link}>
          <Button>Show more...</Button>
        </ShowMoreButton>
      )}
      {section.pic && (
        <ImageWrapper isCurrent={current === index}>
          <Image alt="" src={section.pic} fill style={{ objectFit: 'cover' }} />
          <Image alt="" src={section.pic} fill style={{ objectFit: 'cover' }} />
        </ImageWrapper>
      )}
    </>
  )
}

export default GridItem
