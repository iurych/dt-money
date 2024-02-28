import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchFormContainer } from "./style";

const SearchFormSchema = z.object({
  query: z.string()
})

type SearchFormType = z.infer<typeof SearchFormSchema>

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormSchema)
  })

  const handleOnSubmit = async (data: SearchFormType) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleOnSubmit)} >
      <input 
        type="text" 
        placeholder="Search for a transaction..."
        {...register("query", { required: true })}
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
