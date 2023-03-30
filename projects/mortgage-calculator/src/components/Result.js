import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function calculateMortgagePayment(loanAmount, loanTermInYears, interestRate) {
  const loanTermInMonths = loanTermInYears * 12;
  const monthlyInterestRate = interestRate / 1200; // 12 months in a year, 100 for percentage, so divide by 1200
  const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermInMonths));
  return Math.round(monthlyPayment * 100) / 100; // return as a string with 2 decimal places
}

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;
  const monthlyPayment = calculateMortgagePayment(loanAmount, loanTerm, interestRate);
  const totalInterestGenerated = monthlyPayment * (loanTerm * 12) - loanAmount

  const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Ratio of Principal and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 99, 132, 0.4)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign='center' variant={'h5'}>Monthly Payment: ${monthlyPayment.toLocaleString()}</Typography>
      <Stack direction='row' justifyContent='center'>
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  )
}

export default Result