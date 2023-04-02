import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

import _Description from '@/components/atoms/Description'
import PopUpImage from '@/components/atoms/PopUpImage'
import _Title from '@/components/atoms/Title'
import Container from '@/components/layout/Container'

const PageTitle = styled(_Title)`
  margin-top: 1em;
  margin-bottom: 0.5em;
`

const PageDescription = styled(_Description)`
  margin-bottom: 2.5em;
`

const Skills: NextPage = () => {
  const [appear, setAppear] = useState(false)
  return (
    <>
      <button onClick={() => setAppear(!appear)}>Appear</button>

      <PopUpImage url="/html.png" appear={appear} />
    </>
  )
}

export default Skills
