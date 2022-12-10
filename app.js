const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/blog', (req, res) => {
    const blogs = [
        { title: "First Blog", snippet: "lorem ipsum dolor sit amet consectetur" },
        { title: "Second Blog", snippet: "adipisicing elit. Molestiae, non velit tenetur" },
        { title: "Third Blog", snippet: "Incidunt nemo molestiae illum aperiam" }
    ];
    res.render('blog', { blogs })
})

app.get('/blogs/create', (req, res) => {
    res.render('create')
})

app.use((req, res) => {
    res.status(404).render('404')
})

app.get('/post/:id', (req, res) => {
    res.sendFile(__dirname + `/post${req.params.id}.html`)
    console.log (req.params)
})
app.listen(port, (err) => {
    if (err) {
        console.log('There was an error.', err)
    } else {
     console.log(`There's a GET request on port ${port}.`)   
    }
})