import { INewsLetter } from '@saas-projects/types'

import { NewsLetter } from './newsletter.model'

export const storeNewsletterEmail = async (payload: INewsLetter) => {
  // * check if email already exists
  const isEmailExists = await NewsLetter.findOne({
    email: payload.email,
  })
  if (isEmailExists) {
    throw new Error('Email already exists')
  }
  // * create newsletter
  const newsletter = await NewsLetter.create(payload)
  return newsletter
}
