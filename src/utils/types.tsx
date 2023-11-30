
export interface DataContextProps {
  data: Number[][]
  loadData: () => void
}

export type ReaderType = ReadableStreamDefaultReader<Uint8Array> | undefined
