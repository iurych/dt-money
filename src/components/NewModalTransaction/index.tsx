import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleUp, X } from "phosphor-react"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"

export const NewModalTransaction = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Create a new transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <input type="text" placeholder="Descrição" required/>
          <input type="number" placeholder="Preço" required/>
          <input type="text" placeholder="Categoria"/>
          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome">
              <ArrowCircleUp size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}