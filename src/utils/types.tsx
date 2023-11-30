export interface DataProps {
  time: number
  value: number
}

export interface DataContextProps {
  data: DataProps[]
  loadData: () => void
}

export type ReaderType = ReadableStreamDefaultReader<Uint8Array> | undefined
