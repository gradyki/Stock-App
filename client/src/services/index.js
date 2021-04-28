const key = process.env.REACT_APP_MARKET_API_KEY
export const key2 = process.env.REACT_APP_POLYGON_IO_API_KEY




export const appleEodUrl = `http://api.marketstack.com/v1/eod?access_key=${key}&symbols=AAPL`
export const eodUrl = `http://api.marketstack.com/v1/eod?access_key=${key}&symbols=`
export const latestUrl =`http://api.marketstack.com/v1/intraday/latest?access_key=${key}&symbols=`