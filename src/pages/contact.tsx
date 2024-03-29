import styled from 'styled-components'

import _Description from '@/components/atoms/Description'
import _Title from '@/components/atoms/Title'
import ContactForm from '@/components/organisms/ContactForm'
import Header from '@/components/organisms/Header'
import Meta from '@/components/utils/Meta'

const PageTitle = styled(_Title)`
  padding-top: 1em;
  margin-bottom: 0.5em;
`

const PageDescription = styled(_Description)`
  margin-bottom: 2.5em;
  display: block;
  color: inherit;
  text-decoration: underline;
`

const ContactInner = styled.div`
  width: min(960px, 80%);
  position: relative;
  z-index: 2;
  margin-inline: auto;
`

const Contact = () => {
  return (
    <>
      <Meta title="Contact" desc="お問い合わせのページ。" url="/contact" />
      <Header type="back" key="contact" />
      <ContactInner>
        <PageTitle>Contact</PageTitle>
        <PageDescription as="a" href="mailto:hello@kurokiryoh.com">
          Email: hello@kurokiryoh.com
        </PageDescription>
        <div>
          <ContactForm />
        </div>
      </ContactInner>
    </>
  )
}

export default Contact
