// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up the web server to serve files from the public directory
app.use(express.static('public'));

// Set up the web server to parse URL-encoded bodies
app.use(express.urlencoded());

// Set up the web server to parse JSON bodies
app.use(express.json());

// Set up the web server to render views
app.set('view engine', 'ejs');

// Set up a variable to store comments
const comments = [];

// Set up a route to render the comments view
app.get('/comments', (req, res) => {
  res.render('comments', { comments });
});

// Set up a route to create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.redirect('/comments');
});

// Start the web server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});