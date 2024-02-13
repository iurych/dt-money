import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -6rem;
`

interface summaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<summaryCardProps>`
  background-color: ${({theme}) => theme['gray-600']};
  padding: 2rem;
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({theme}) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    height: 3rem;
  }

  ${ props => props.variant === 'green' && css`
    background-color: ${({theme}) => theme['green-700']};
  `}
`