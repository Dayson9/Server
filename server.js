const express = require('express');
const app = express();
const q_o_a =[{ "q": "Who invented computer?", "a": "Alan Turing", "b": "Elon Musk", "c": "Charles Babbage", "d": "Ada Lovelace", "ans": "c" },

  { "q": "In color combination, Green+Blue equals?", "a": "Red", "b": "Cyan", "c": "Orange", "d": "Lightgreen", "ans": "b" },

  { "q": "What is the full meaning of AI?", "a": "Articulate Intelligence", "b": "Artificial Intellectual", "c": "Articulate Intellect", "d": "Artificial Intelligence", "ans": "d" },

  { "q": "A number added to it's square makes 90, find the number", "a": "9", "b": "-11", "c": "-8", "d": "6", "ans": "a" },

  { "q": "Who is the founder of CCC (Celestial Church of Christ)?", "a": "Rev.E.M.F Oshoffa", "b": "Rev.S.B.J Oshoffa", "c": "Rev.A.A Bada", "d": "Rev.O.O Ogunlesi", "ans": "b" },

  { "q": "Which is the second biggest Movie Industry worldwide?", "a": "Hollywood", "b": "Nollywood", "c": "Bollywood", "d": "Burlywood", "ans": "b" },

  { "q": "You can break me without any touch, what am I?", "a": "Feeling", "b": "Bucket", "c": "Egg", "d": "Heart", "ans": "d" },

  { "q": "Which is the strongest  substance below?", "a": "Graphene", "b": "Graphite", "c": "Diamond", "d": "Tungsten", "ans": "a" },

  { "q": "Sound is measured in...", "a": "Watts", "b": "Ultrasound", "c": "Decibels", "d": "Dioptres", "ans": "c" },

  { "q": "Who is the founder of this Quiz?", "a": "Joel greyhat", "b": "Sodiq Tunde", "c": "Ohwi Daniel", "d": "Lamina Timilehin", "ans": "b" }];
// Middleware
app.post('https://daysonserver.onrender.com', (req, res) => {
    
    // Process the data or perform any backend tasks
    // ...

    // Return a response back to the frontend
    res.json({
        status: 'success',
        message: q_o_a
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

