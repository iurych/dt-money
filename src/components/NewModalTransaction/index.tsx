import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleUp, X } from "phosphor-react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"

export const NewModalTransaction = () => {
  const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
  });
  type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

  const { 
    register,
    control,
    handleSubmit,
    formState: { isSubmitting }  
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    await new Promise (resolve => setTimeout(resolve, 2000))
    
    console.log(data)
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
            required
          />
          <input 
            type="number" 
            placeholder="Preço"
            {...register('price')} 
            required
          />
          <input 
            type="text" 
            placeholder="Categoria"
            {...register('category')}
            required
          />
          <Controller 
            name='type'
            control={control}
            render={({field})=> {
              console.log(field)
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
          
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}