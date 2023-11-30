import { DataContext } from 'contexts/DataContext/DataContext'
import { useContext } from 'react'
import { DataContextProps } from 'utils/types'

const emptyDataContext: DataContextProps = {
  data: [],
  loadData: () => {},
}

export const useDataContext = (): DataContextProps => {
  const context = useContext(DataContext)
  if (!context) {
    return emptyDataContext;
  }
  return context
}
