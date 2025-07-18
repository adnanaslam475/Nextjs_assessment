'use client'

import { useQuery } from '@tanstack/react-query'
import {
  Container,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import { getTopCoins } from './lib/api'
import { useDebounce } from './hooks/useDebounce'


export default function HomePage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['topCoins'],
  //   queryFn: getTopCoins,
  // })
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['topCoins', page],
    queryFn: () => getTopCoins(page),
  })
  
  const debouncedSearch = useDebounce(search, 500);

  // Assuming 'data' is fetched from React Query
  const filteredCoins = (data ?? [])?.filter((coin) =>
    coin.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );



  if (isLoading) return <CircularProgress className='top-[50%] absolute left-[50%]' />
  if (isError) return <Typography>Error fetching data</Typography>

  return (
    <Container>
      <TextField
        label="Search Cryptocurrencies"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Typography variant="h4" gutterBottom>
        Top 10 Cryptocurrencies
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>24h %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCoins.map((coin) => (
              <TableRow
                key={coin.id}
                hover
                component={Link}
                href={`/details/${coin.id}`}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <TableCell>{coin.name}</TableCell>
                <TableCell>${coin.current_price}</TableCell>
                <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                <TableCell sx={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
