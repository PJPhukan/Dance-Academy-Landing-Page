const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const app = express();

const port = 5000;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

    //DEFINE MONGOOSE SCHEMA
    const ContactSchema = new mongoose.Schema({
        name: String,
        email: String,
        phone: Number,
        age: Number,
        address: String
    });


    //MODEL
     const ContactD = mongoose.model('ContactD', ContactSchema);


    app.post('/contect', async (req, res) => {
        let myData = new ContactD(req.body)
        await  myData.save().then(() => {
            res.send("Successfully submited!")
        }).catch(() => {
            res.status(400).send("Error occured in your data")
        })
       
    })
}





//EXPRESS SECTION
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//PUG SECTION
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


//ENDPOINTS SECTION

app.get('/', (req, res) => {
    res.status(200).render('home.pug')

})
app.get('/contect', (req, res) => {
    res.status(200).render('contect.pug')

})


//RUNNING PORT

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})