import { createContext, useEffect, useState } from "react";


interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ITransactionsContext {
  transactions: ITransaction[];
}

interface TransactionsProviderProps{
  children: React.ReactNode;
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const loadData = async () => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}