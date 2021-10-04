const express = require('express');

const app = express();

const port = 9000;

app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});

app.get('/api/Facts-About-Me', (req, res) => {
    const factsAboutMe = ["My favourite season is the Fall", "My favourite holiday is Halloween", "My favourite movie genre is horror", "My favourite hobby is making rugs", "I have two cats; Tinkerbell and Thomas", "My favourite food is sushi", "I want to travel to Tokyo someday", "My favourite colour is pink", "My last played song on spotify is Seasons by Mozzy", "My favourite TV show is Black Mirror"];
    res.send(JSON.stringify(factsAboutMe));
});

app.listen(port, () => {
    console.log("Listening on port", port);
});