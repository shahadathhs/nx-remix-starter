export interface INewsLetter {
  email: string
}

export interface INewsLetterResponse extends INewsLetter {
  _id: string
  email: string
  createdAt: Date
  updatedAt: Date
}
