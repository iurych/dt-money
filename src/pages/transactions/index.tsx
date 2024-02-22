import React, { useContext } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./style"



export const Transactions = () => {

  const { transactions } = useContext(TransactionsContext)

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
                  <td width={"50%"}  >{transaction.description}</td>
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