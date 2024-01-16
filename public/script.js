// Simulating fetching high scores from the server based on countries
const fetchHighScores = (country) => {
    // Make a fetch request to your server to get high scores based on the country
    // For simplicity, we'll just use a hardcoded array for each country
    const highScores = getHighScoresByCountry(country);

    // Display high scores on the page with flag emojis
    const flagEmoji = getFlagEmoji(country);
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = highScores.map(score => `<li>${flagEmoji} ${score}</li>`).join('');
};

// Function to get high scores based on the selected country
const getHighScoresByCountry = (country) => {
    switch (country) {
        case "Netherlands":
            return ['John Doe - $20', 'Alice Johnson - $15', 'Bob Smith - $10'];
        case "America":
            return ['Jane Smith - $50', 'David Johnson - $30', 'Emily White - $25'];
        case "UK":
            return ['George Brown - $35', 'Olivia Taylor - $25', 'Daniel Black - $20'];
        case "Germany":
            return ['Sophie Mueller - $40', 'Michael Schmidt - $30', 'Emma Fischer - $25'];
        case "Switzerland":
            return ['Liam Keller - $25', 'Mia Roth - $20', 'Noah Meier - $15'];
        default:
            return [];
    }
};

// Add this function in your script.js file
const changeCountry = () => {
    const selectedCountry = document.getElementById('countries').value;
    fetchHighScores(selectedCountry);
};

// Add this function in your script.js file to get flag emojis
const getFlagEmoji = (country) => {
    switch (country) {
        case "Netherlands":
            return '🇳🇱';
        case "America":
            return '🇺🇸';
        case "UK":
            return '🇬🇧';
        case "Germany":
            return '🇩🇪';
        case "Switzerland":
            return '🇨🇭';
        default:
            return '';
    }
};

// Update the window load event to set the default country and fetch high scores
window.addEventListener('load', () => {
    const selectedCountry = "Netherlands"; // Set the default country here
    fetchHighScores(selectedCountry);
});

