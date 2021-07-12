const axios = require('axios');
const API = "https://quote-garden.herokuapp.com/api/v3/quotes"

const getRandomQuote = async () => {
  const response = await axios.get(`${API}/random`);
  return response.data.data;
}

const getQuotesOfAuthor = async (author) => {
  const response = await axios.get(`${API}?author=${author}`);
  return response.data.data;
}

export { getRandomQuote, getQuotesOfAuthor }