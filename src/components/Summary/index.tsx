import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { useSummary } from "../../hooks/useSummary"
import { formatCurrency } from "../../utils/formatter"
import { SummaryCard, SummaryContainer } from "./style"

export const Summary = () => {

  const summarized = useSummary()
  
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>
          {formatCurrency.format(summarized.income)}
        </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{formatCurrency.format(summarized.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green" >
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffffd3" />
        </header>

        <strong>{formatCurrency.format(summarized.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}