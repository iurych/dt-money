import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style"

import Logo from "../../assets/Logo.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Logo" />

      <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}