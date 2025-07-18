'use client'

import { useQuery } from '@tanstack/react-query'
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Paper,
} from '@mui/material'
import { useParams } from 'next/navigation'
import ReactApexChart from 'react-apexcharts'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

import { getCoinDetails } from '@/app/lib/api'

export default function CoinDetailPage() {
  const { coinId } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['coinDetails', coinId],
    queryFn: () => getCoinDetails(coinId as string),
  })

  if (isLoading) return <CircularProgress className='top-[50%] absolute left-[50%]'/>
  if (isError || !data) return <Typography>Error loading coin data</Typography>

  const coin = data
  const prices = coin.market_data.sparkline_7d.price
  const sparklineData = prices.map((price: number, index: number) => ({
    x: index,
    y: price,
  }))

  const barData = [
    { name: 'Current', price: coin.market_data.current_price.usd },
    { name: 'ATH', price: coin.market_data.ath.usd },
    { name: 'ATL', price: coin.market_data.atl.usd },
  ]

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {coin.name} ({coin.symbol.toUpperCase()})
      </Typography>

      <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: coin.description.en }} />

      <Grid  spacing={10} container  >
        <Grid sx={{width:'45%'}} >
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">7-Day Price Trend</Typography>
            <ReactApexChart
              type="line"
              height={300}
              series={[{ name: 'Price', data: sparklineData }]}
              options={{
                chart: { id: 'price-trend' },
                xaxis: { labels: { show: false } },
              }}
            />
          </Paper>
        </Grid>

        <Grid sx={{width:'45%',height:'100%'}}>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Price Comparison</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
