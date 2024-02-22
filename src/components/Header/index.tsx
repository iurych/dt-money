import * as Dialog from '@radix-ui/react-dialog';
import Logo from "../../assets/Logo.svg";
import { NewModalTransaction } from '../NewModalTransaction';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './style';

export const Header = () => {
 

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Logo" />
        <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>
            New transaction
          </NewTransactionButton>
        </Dialog.Trigger>
        <NewModalTransaction />
       
      </Dialog.Root>

      </HeaderContent>
      
    </HeaderContainer>
  )
}