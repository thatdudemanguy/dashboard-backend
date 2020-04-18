require('dotenv').config();

module.exports = Object.freeze({
  'nasa': `https://api.nasa.gov/insight_weather/?feedtype=json&ver=1.0&api_key=${process.env.NASA_KEY}`,
  'joke': 'https://geek-jokes.sameerkumar.website/api',
  'fact': 'http://numbersapi.com/random/math',
  'weather': `http://api.openweathermap.org/data/2.5/weather?q=Leuven,be&appid=${process.env.OPEN_WEATHER_KEY}`,
  'news': `https://newsapi.org/v2/everything?&apikey=${process.env.NEWS_KEY}`,
});