import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import _Button from '@/components//atoms/Button'
import SendEmail from '@/components/organisms/SendEmail'
import Particle from './Particle'

const ErrorText = styled.strong`
  color: red;
  font-size: 0.8em;
  font-weight: bold;
`

type FormData = {
  name: string
  email: string
  message: string
  'form-name': string
}

const Button = styled(_Button)`
  margin-top: 30px;
  width: 200px;
  margin-inline: auto;
`

const Form = styled.form`
  display: grid;
  gap: 1em;

  ${({ theme }) => theme.media.u_sp`
    font-size: 14px;
  `}
`

const FormLabel = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > *:first-child {
    margin-top: 0.4em;
    flex: 0 0 10em;
  }

  > *:last-child {
    flex: 1 1 auto;
  }

  ${({ theme }) => theme.media.u_sp`
    display: grid;
    gap: 0.5em;
    width: 100%;
    justify-content: stretch;
  `}
`

const TextArea = styled.textarea.attrs({
  'data-testid': 'input-message',
})`
  width: 100%;
  height: 7em;
  background-color: #eee;
  border-radius: 5px;
`

const FormParts = styled.div`
  display: grid;
  gap: 0.6em;
`
const Input = styled.input`
  background-color: #eee;
  border-radius: 5px;
`

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: 'onChange',
  })

  const [isSend, setIsSend] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = async ({ name, email, message }: FormData) => {
    try {
      const res = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
      if (res.status === 200) {
        setIsSend(true)
      } else {
        setIsError(true)
      }
    } catch (e) {
      setIsError(true)
    }
  }

  const onSubmit = (data: FormData) => {
    if (Object.keys(errors).length) return
    sendEmail(data)
  }

  return (
    <>
      {isError && <ErrorText>エラーが発生しました</ErrorText>}
      {!isSend ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('form-name')} value="contact" />
          <FormLabel>
            <span>Name:</span>{' '}
            <FormParts>
              <Input
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: '※入力してください',
                  },
                  maxLength: {
                    value: 20,
                    message: '※最大文字数を超えています',
                  },
                })}
                data-testid="input-name"
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </FormParts>
          </FormLabel>
          <FormLabel>
            <span>Email:</span>{' '}
            <FormParts>
              <Input
                type="email "
                {...register('email', {
                  required: {
                    value: true,
                    message: '※入力してください',
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '※メールアドレスの形式が正しくありません',
                  },
                })}
                data-testid="input-email"
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormParts>
          </FormLabel>
          <FormLabel>
            <span>Message:</span>
            <FormParts>
              <TextArea
                {...register('message', {
                  required: {
                    value: true,
                    message: '※入力してください',
                  },
                })}
              ></TextArea>
              {errors.message && (
                <ErrorText>{errors.message.message}</ErrorText>
              )}
            </FormParts>
          </FormLabel>
          <Button
            type="submit"
            disabled={
              !!Object.keys(errors).length ||
              !(dirtyFields.name && dirtyFields.email && dirtyFields.message)
            }
          >
            送信
          </Button>
        </Form>
      ) : (
        <>
          <Particle/>
          <SendEmail/>
        </>
      )}
    </>
  )
}

export default ContactForm
