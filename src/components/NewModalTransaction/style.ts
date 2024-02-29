import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  height: 100vh;
  width: 100vw;

  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, .75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;

  margin: 0 auto;             

  background-color: ${({theme}) => theme['gray-800']};
  
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
      border-radius: 6px;
      border: 0;
      background-color: ${({theme}) => theme['gray-900']};
      color: ${({theme}) => theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({theme}) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 50px;
      border: 0;
      background-color: ${({theme}) => theme['green-500']};
      color: ${({theme}) => theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
      transition: .2s;
   
      &:disabled {
        opacity: .6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${({theme}) => theme['green-700']};
        transition: background-color .2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  padding: 1rem;
  border-radius: 6px;
  border: 0;
  
  background-color: ${({theme}) => theme['gray-700']};
  color: ${({theme}) => theme['gray-300']};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  
  cursor: pointer;

  svg {
    color: ${({variant, theme}) => variant === 'income' ? theme['green-500'] : theme['red-500']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color .2s;
    background-color: ${({theme}) => theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({theme}) => theme.white};
    background-color: ${({theme, variant}) => variant === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({theme}) => theme.white};
    }
  }
`