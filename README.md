# 🪙 Crypto Dashboard

A modern and responsive cryptocurrency dashboard built using **Next.js App Router**, **Material UI**, **TanStack Query (React Query)**, **ApexCharts**, and **Recharts**. It fetches real-time data from the [CoinGecko API](https://www.coingecko.com/en/api) and presents it in an interactive and visually appealing format.

---

## 🚀 Features

### ✅ Core Functionality
- **Home Page (`/`)**
  - Top 10 cryptocurrencies listed in a responsive MUI table/grid.
  - Display includes:
    - Coin Name and Symbol
    - Current Price
    - Market Cap
    - 24H Price Change %

- **Details Page (`/details/[coinId]`)**
  - Shows selected coin's:
    - Description
    - Current Price
    - Market Cap
    - All-Time High / Low
  - **ApexChart:** Line chart of 7-day price trend.
  - **Recharts:** Bar and pie charts for visual comparison.

### 💡 Bonus Features
- **🔍 Search (with debounce):** Filter coins in real-time.
- **🌙 Dark Mode:** Toggle using MUI ThemeProvider.
- **📄 Pagination:** Basic page navigation for long result sets (if extended).
- **📉 Graceful Error States and Loaders:** MUI spinners, skeletons, and error UI.

---

## 🛠️ Tech Stack

| Layer        | Tool                    |
|--------------|-------------------------|
| Framework    | Next.js (App Router)    |
| UI           | Material UI             |
| Charts       | ApexCharts, Recharts    |
| Data Fetching| TanStack Query (v5)     |
| Utils        | Custom `useDebounce` hook |
| API          | CoinGecko Public API    |

---

## 📂 Project Structure

