import React, { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./style"

interface ITransaction {
  id: number,
  description: string,
  type: "income" | "outcome",
  category: string,
  price: number,
  createdAt: string
}

export const Transactions = () => {
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
    <React.Fragment>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>

          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id} >
                  <td width='50%' >{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type} >
                      R$ {transaction.price.toFixed(2)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt} </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
     </React.Fragment>
  )
}