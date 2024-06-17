from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

@app.route('/stock', methods=['GET'])
def get_stock_data():
    ticker_symbol = request.args.get('ticker')
    if not ticker_symbol:
        return jsonify({'error': 'Ticker is required'}), 400

    stock = yf.Ticker(ticker_symbol)
    stock_info = stock.info
    stock_data = stock.history(period='1d', start='2020-01-01', end='2024-12-31')
    
    stock_data = stock_data.reset_index()

    # Sort data by date in descending order
    stock_data = stock_data.sort_values(by='Date', ascending=False)


    if stock_data.empty:
        return jsonify({'error': 'No data found for the ticker'}), 404

    response_data = {
        'name': stock_info.get('longName', 'N/A'),  # Get the stock name, default to 'N/A' if not available
        'data': stock_data.reset_index().to_dict(orient='records'),
        'currentPrice': stock_info.get('currentPrice', 'N/A')
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
