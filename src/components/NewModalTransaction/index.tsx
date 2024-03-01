import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleUp, X } from "phosphor-react"
import { useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"

export const NewModalTransaction = () => {
  const newTransactionFormSchema = z.object({
    description: z.string().min(1, "this field is required"),
    price: z.number().min(1, "this field is required"),
    category: z.string().min(1, "this field is required"),
    type: z.enum(['income', 'outcome', '']),
  }).required();
  type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

  const { createTransaction } = useContext(TransactionsContext)

  const { 
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }  
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: ''
    }
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    
    const { description, category, price, type } = data;

    await createTransaction({
      description,
      category,
      price,
      type,
   })

   reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Create a new transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição" 
            {...register('description')}
          />
          {<span>{errors.description?.message}</span>}
          <input 
            type="number" 
            placeholder="Preço"
            {...register('price', {valueAsNumber: true})}
            
          />
          {<span>{errors.price?.message}</span>}

          <input 
            type="text" 
            placeholder="Categoria"
            {...register('category')}
          />
          {<span>{errors.category?.message}</span>}
          <Controller 
            name='type'
            control={control}
            render={({field})=> {
              return (
                <TransactionType
                 onValueChange={field.onChange} 
                 value={field.value} 
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome" >
                    <ArrowCircleUp size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type='submit' disabled={isSubmitting} >
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}