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
  createTransaction: (data: CreateTransactionData) => Promise<void>
}

interface TransactionsProviderProps{
  children: React.ReactNode;
}

interface CreateTransactionData {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome' | '';
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const createTransaction = async (data: CreateTransactionData) => {
    const { category, description, price, type } = data
    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date()
    })

    setTransactions(prevState => [response.data, ...prevState])
  }

  const fetchTransaction = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransaction,
      createTransaction 
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}