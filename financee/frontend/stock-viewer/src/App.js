import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [ticker, setTicker] = useState('');
    const [stockName, setStockName] = useState('');
    const [stockData, setStockData] = useState([]);
    const [error, setError] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');


    const fetchStockData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/stock', {
                params: { ticker }
            });
            setStockName(response.data.name);
            setStockData(response.data.data);
          setCurrentPrice(response.data.currentPrice);
            loadTradingViewWidget(response.data.name, ticker);
            setError('');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('Error fetching data');
            }
            setStockName('');
            setStockData([]);
            setCurrentPrice('');
        }
    };
  
   const loadTradingViewWidget = (name, symbol) => {
        if (document.getElementById('tradingview-widget-script')) {
            document.getElementById('tradingview-widget-script').remove();
        }
     
     const script = document.createElement('script');
        script.id = 'tradingview-widget-script';
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.onload = () => {
            new window.TradingView.widget({
                width: 980,
                height: 610,
                symbol: symbol,
                interval: 'D',
                timezone: 'Etc/UTC',
                theme: 'Dark',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                allow_symbol_change: true,
                container_id: 'tradingview_chart'
            });
        };
        document.body.appendChild(script);
    };

    useEffect(() => {
        if (ticker) {
            loadTradingViewWidget(stockName, ticker);
        }
    }, [ticker]);

    return (
        <div className="App">
        <h1>Stock Data Viewer</h1>
        <h2>Ticker Examples</h2>
        <h3>AAPL: Apple, AMZN: Amazon,  BRK.A: Berkshire Hathaway,   GS: Goldman Sachs Group, TSLA: Tesla, WMT: Walmart</h3>
        
            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter stock ticker"
            />
            <button onClick={fetchStockData}>Get Data</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        {stockName && <h2>{stockName} - ${currentPrice}</h2>}
         <div id="tradingview_chart"></div>
            {stockData.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockData.map((row, index) => (
                            <tr key={index}>
                                <td>{new Date(row.Date).toLocaleDateString()}</td>
                                <td>{row.Open}</td>
                                <td>{row.High}</td>
                                <td>{row.Low}</td>
                                <td>{row.Close}</td>
                                <td>{row.Volume}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;
