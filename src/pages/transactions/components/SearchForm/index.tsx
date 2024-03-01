import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { SearchFormContainer } from "./style";

const SearchFormSchema = z.object({
  query: z.string()
})

type SearchFormType = z.infer<typeof SearchFormSchema>

export const SearchForm = () => {
  const { fetchTransaction } = useContext(TransactionsContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormSchema)
  })

  const handleOnSubmit = async (data: SearchFormType) => {
    await fetchTransaction(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleOnSubmit)} >
      <input 
        type="text" 
        placeholder="Search for transactions..."
        {...register("query")}
      />
      <button 
        type="submit"
        disabled={isSubmitting}
      > 
        <MagnifyingGlass /> Search 
      </button>
    </SearchFormContainer>
  );
}
