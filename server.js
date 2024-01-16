const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51OYz2kCZEFBB4JZiCaNlyYpJmetjNHbEDokAdCFPEZAy5U0LeeNmMdwj1GjeFRAtKFjIKgXSNvSbTT5S2Isv1huK00yjO25Xk9');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Fetch Stripe balance function
async function fetchBalance() {
  try {
    const balance = await stripe.balance.retrieve();
    console.log(balance)
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error.message);
    throw error;
  }
}

// Route to render the EJS template
app.get('/', async (req, res) => {
  try {
    const stripeBalance = await fetchBalance();
    res.render('index', { stripeBalance });
  } catch (error) {
    // Handle errors, if needed
    res.status(500).send('Error fetching balance.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
