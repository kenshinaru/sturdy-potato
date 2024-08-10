const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Set up routes to serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login-apikey', (req, res) => {
  res.sendFile(path.join(__dirname, 'login-apikey.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile.html'));
});

app.get('/robots', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.html'));
});

app.get('/searching', (req, res) => {
  res.sendFile(path.join(__dirname, 'searching.html'));
});

app.get('/changelog', (req, res) => {
  res.sendFile(path.join(__dirname, 'changelog.html'));
});

app.get('/ppobindonesia', (req, res) => {
  res.sendFile(path.join(__dirname, 'ppobindonesia.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'pricing.html'));
});

app.get('/imagemaker', (req, res) => {
  res.sendFile(path.join(__dirname, 'imagemaker.html'));
});

app.get('/redeemcode', (req, res) => {
  res.sendFile(path.join(__dirname, 'redeemcode.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/converter', (req, res) => {
  res.sendFile(path.join(__dirname, 'converter.html'));
});

app.get('/tos', (req, res) => {
  res.sendFile(path.join(__dirname, 'tos.html'));
});

app.get('/imageeffect', (req, res) => {
  res.sendFile(path.join(__dirname, 'imageeffect.html'));
});

app.get('/entertainment', (req, res) => {
  res.sendFile(path.join(__dirname, 'entertainment.html'));
});

app.get('/tools', (req, res) => {
  res.sendFile(path.join(__dirname, 'tools.html'));
});

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname, 'games.html'));
});

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'settings.html'));
});

app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'report.html'));
});

app.get('/randomtext', (req, res) => {
  res.sendFile(path.join(__dirname, 'randomtext.html'));
});

app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, 'logout.html'));
});

app.get('/canvas', (req, res) => {
  res.sendFile(path.join(__dirname, 'canvas.html'));
});

app.get('/primbon', (req, res) => {
  res.sendFile(path.join(__dirname, 'primbon.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/downloader', (req, res) => {
  res.sendFile(path.join(__dirname, 'downloader.html'));
});

// Additional routes can be added here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
