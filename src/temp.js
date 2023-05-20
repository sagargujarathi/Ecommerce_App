
const fs = require('fs')
const url = 'https://aliexpress-true-api.p.rapidapi.com/hot_products/xiaomi?max_price=10000';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '12d672b95fmsh84e351aaacf9970p1d5b42jsnb952c59fd109',
        'X-RapidAPI-Host': 'aliexpress-true-api.p.rapidapi.com'
    }
};


fetch(url, options)
    .then(data => data.text())
    .then(data => {
        console.log(data)
        fs.writeFileSync("data.json", data)
    })