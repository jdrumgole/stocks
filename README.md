# stocks
This project is a web application that allows users to view detailed stock data and a dynamic TradingView chart for a given stock ticker. It is built using a Flask backend and a React frontend. The application fetches stock data from Yahoo Finance and displays it in a user-friendly format.

# Components

# Flask Backend:

Purpose: Serve stock data from Yahoo Finance to the frontend.
Endpoint: /stock (GET request)
Libraries Used: Flask, Flask-CORS, yfinance
Functionality:
-Accepts a stock ticker symbol as a query parameter.
-Fetches historical stock data and current stock price using yfinance.
-Returns the stock name, current price, and historical data in JSON format.