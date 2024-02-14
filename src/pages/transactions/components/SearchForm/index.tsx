import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for a transaction..." />
      <button type="submit"> <MagnifyingGlass /> Search </button>
    </SearchFormContainer>
  );
}
