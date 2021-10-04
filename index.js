const express = require('express');

const app = express();

const port = 9000;

app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});

//Created two Api routes, (1) returns 10 facts about me and (2) returns 10 facts about Tokyo

app.get('/api/Facts-About-Me', (req, res) => {
    const factsAboutMe = ["My favourite season is the Fall", "My favourite holiday is Halloween", "My favourite movie genre is horror", "My favourite hobby is making rugs", "I have two cats; Tinkerbell and Thomas", "My favourite food is sushi", "I want to travel to Tokyo someday", "My favourite colour is pink", "My last played song on spotify is Seasons by Mozzy", "My favourite TV show is Black Mirror"];
    res.send(JSON.stringify(factsAboutMe));
});

app.get('/api/Facts-About-Tokyo', (req, res) => {
    const factsAboutTokyo = ["Tokyo is the largest city in the world", "There is one vending machine per 23 citizens", "Tokyo is one of the safest cities worldwide", "Tokyo was originally named Edo", "Tokyo Skytree is one of the world’s tallest buildings", "Shibuya Crossing is the world’s busiest intersection", "You can see Mount Fuji from Tokyo on a clear day", "You can go real-life Mario karting in Tokyo", "The Park Hyatt Tokyo is widely recognized for its role in the Academy Award-winning drama Lost in Translation", "Tokyo has the highest number of neon signs in the world"];
    res.send(JSON.stringify(factsAboutTokyo));
});

app.listen(port, () => {
    console.log("Listening on port", port);
});