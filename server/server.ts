const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const CLIENT_BUILD_PATH = path.join(__dirname, '..', "build");
// Serve static files from the React frontend build
app.use(express.static(path.join(CLIENT_BUILD_PATH)));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    const index = path.join(CLIENT_BUILD_PATH, "index.html");
    res.sendFile(index);
});
app.listen(port, () => {
    console.warn('>>> WARNING: `npm start` IS FOR SERVING WHAT IS IN BUILD FOLDER');
    console.log('Server is up!');
    console.log('Check http://localhost:3001/ in browser if run locally.');
    console.log('========================================================');
    console.log('Run: `npm run dev` to develop locally');
});