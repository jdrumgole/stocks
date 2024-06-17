# Stock Data Viewer

This project is a web application that allows users to view detailed stock data and a dynamic TradingView chart for a given stock ticker. It is built using a Flask backend and a React frontend. The application fetches stock data from Yahoo Finance and displays it in a user-friendly format.

## Components

### 1. Flask Backend

#### Purpose
- Serve stock data from Yahoo Finance to the frontend.

#### Endpoint
- `/stock` (GET request)

#### Libraries Used
- Flask
- Flask-CORS
- yfinance

#### Functionality
- Accepts a stock ticker symbol as a query parameter.
- Fetches historical stock data and current stock price using yfinance.
- Returns the stock name, current price, and historical data in JSON format.

#### Code
```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf

# Stock Data Viewer - React Frontend

This project is a React-based web application that allows users to view detailed stock data and a dynamic TradingView chart for a given stock ticker. The frontend interacts with a Flask backend that fetches stock data from Yahoo Finance.

## Setup Instructions

1. **Clone the Repository**

2. **Navigate to the Frontend Directory**

3. **Install Dependencies**

4. **Start the React Application**


5. **Access the Application**
- Open your web browser and go to `http://localhost:3000` to view the application.

## Features

- **Input Field**: Allows users to input a stock ticker symbol.
- **Fetch Data Button**: Retrieves stock data from the Flask backend based on the entered ticker symbol.
- **Stock Name and Current Price**: Displays the name and current price of the stock.
- **TradingView Chart**: Integrates a dynamic TradingView chart to visualize stock performance.
- **Historical Data Table**: Displays historical stock data including Date, Open, High, Low, Close, and Volume.

## Code Overview

### Components

- **App.js**: Main component handling state and data fetching.
- **Axios**: Used for making HTTP requests to the Flask backend.
- **CSS Styles**: Basic styling for layout and components.

### Dependencies

- **React**: Frontend library for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the backend.

### Usage

1. Enter a valid stock ticker symbol (e.g., AAPL, GOOGL) into the input field.
2. Click on the "Get Data" button to fetch and display stock information.
3. View the stock name, current price, TradingView chart, and historical data table.

## Enhancements

- **Error Handling**: Improve error messages for better user feedback.
- **Responsive Design**: Optimize layout for different screen sizes and devices.
- **Additional Features**: Add options for selecting different time intervals or technical indicators on the TradingView chart.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.





