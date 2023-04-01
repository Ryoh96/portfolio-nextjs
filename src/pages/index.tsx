import type { NextPage } from 'next'

import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import { topSectionTexts } from '@/constants/top-sections'

const Index: NextPage = () => {
  return (
    <SnapContainer>
      {topSectionTexts.map((section, index) => (
        <SnapItem key={index} id={`${index}`}>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
          <button>Show more</button>
        </SnapItem>
      ))}
    </SnapContainer>
  )
}

export default Index
