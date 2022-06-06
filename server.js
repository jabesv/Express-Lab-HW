// load the package express
const express = require("express")
// create an instance of express
const app = express()
const PORT = 4000

//Setup view engine
app.set('view engine', "ejs")
app.set('views', './Views')

// create our routes and handle our routes
app.get('/' , (req, res) => {
    //console.log(req)
    res.send("Hi there!")
})

app.get('/home', (req, res) => {
res.render('Index', {
    pageTitle: "Home",
    pageHeader: "Welcome",
    pageFact:"Please, use the links to navigate the pages..."
})
})
app.get('/country', (req, res) => {
    //res.send('Country')
    res.render("Index", {
        pageTitle: 'USA',
        pageHeader: 'The Unated Stated of America',
        pageFact: "This is my new home!"
    })
})

app.get("/population", (req, res) => {
    //res.send('The population of the city ...')
    res.render('Index', {
        pageTitle: "",
        pageHeader: 'The United Atates of America has a huge population',
        pageFact: '331,893,745 people'
    })
})

app.get('/capital', (req, res) => {
    //res.send('Capital')
    res.render('Index', {
        pageTitle: "capital",
        pageHeader: 'Washington DC', 
        pageFact: "United States Capitol and Capitol Hill."

    })
})

app.get('/language', (req, res) => {
   // res.send('Language')
   res.render('Index', {
       pageTitle: "Language",
       pageHeader:"The language:",
       pageFact: "English (specifically, American English) is the de facto national language of the United States. "
   })
})

app.get('/pets', (req, res) => {
    res.render('Details', {
        pageTitle: "pets",
        pageHeader:"The favorite pets are: ",
        opt1: "Dogs",
        opt2: "Cats",
        opt3: "Fish"
     })
})

app.get('/family', (req, res) => {
    res.render('Details', {
        pageTitle: 'Families',
        pageHeader: "Families are basically conformed by:",
        opt1: 'Father',
        opt2: "Mother",
        opt3: 'Child / Children'
    })
})

app.get('/cars', (req, res) => {
    res.render('Details', {
        pageTitle: "Cars", 
        pageHeader: "Common cars in the US are:" ,
        opt1: "Honda",
        opt2: "Toyota",
        opt3: "Nisssan"
    })
})

app.get('/oceans', (req, res) => {
    res.render('Index', {
        pageTitle: "Oceans",
        pageHeader: "The two oceans at the coasts of the US are:",
        pageFact: "The Pacific and the Atlantic oceans."
    })
})

app.get('/food', (req, res) => {
    res.render('Details', {
        pageTitle: "Food",
        pageHeader: "My favorite food in the US:",
        opt1: "Lasagna",
        opt2: "Cuban Sandwich",
        opt3: "Apple pie"
    })
})

app.get('/color', (req, res) => {
    res.render('Details', {
        pageTitle: "Colors",
        pageHeader: "My kids favorite colors are: ",
        opt1: "Pink",
        opt2: "Green", 
        opt3: 'Yellow'
    })
})

//Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})