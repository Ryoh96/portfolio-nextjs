import type { NextPage } from 'next'

import { topSectionTexts } from '@/constants/top-sections'

const Index: NextPage = () => {
  return (
    <>
      {topSectionTexts.map((section, index) => (
        <>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
          <button>Show more</button>
        </>
      ))}
    </>
  )
}

export default Index
