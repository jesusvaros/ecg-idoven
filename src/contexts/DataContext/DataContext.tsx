import React, { createContext, useState } from 'react'
import { getDataFile, getParsedData, getReader } from 'utils/dataUtils'
import { DataContextProps, ReaderType } from 'utils/types'

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
)

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [reader, setReader] = useState<ReaderType>(undefined)
  const [data, setData] = useState<Number[][]>([])

  const lazySetReader = async () => {
    if (!reader) {
      const textFile = await getDataFile()
      
      const fileReader = await getReader(textFile)
      setReader(fileReader)
      return fileReader
    }
    return reader
  }

  const setNewValues= async () => {
    try {
      const fileReader = await lazySetReader()
      const parsedData = await getParsedData(fileReader)
      setData([...data, ...parsedData])
    } catch (error) {
      console.error('Sorry there was an error while loading the data', error)
    }
  }

  const loadData = setNewValues

  const contextValue: DataContextProps = {
    data,
    loadData
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
