import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";


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
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionsProviderProps{
  children: React.ReactNode;
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransaction = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}