import React from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./style"

export const Transactions = () => { 
  return (
    <React.Fragment>
      <Header />
      <Summary />
      <TransactionContainer>
        
        <TransactionTable>
          <tbody>
            <tr>
              <td width='50%' >Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income" >
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width='50%' >Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome" >
                  - R$ 12,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2024</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
     </React.Fragment>
  )
}