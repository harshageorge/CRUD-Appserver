const express = require('express')
const dataService = require('./services/dataservice');
const cors = require('cors')
const app = express();

app.use(express.json()); 

app.use(cors({
    origin:'http://localhost:4200',
    credentials:true   //to get cookies
}))



app.post('/addalien', (req, res) => {
    dataService.addalien(req.body.name, req.body.tech)
    //res.status(200).send("sucess");
    .then(result => { res.status(result.statusCode).json(result) })

})


app.get('/getalien/:name',(req,res)=>{
    
    dataService.getalien(req.params.name)
    .then(result => { res.status(result.statusCode).json(result) })

})

app.patch('/patchalien', (req, res) => {
    dataService.patchalien(req.body.name, req.body.tech)
    //res.status(200).send("sucess");
    .then(result => { res.status(result.statusCode).json(result) })

})

app.delete('/deletealien/:name', (req, res) => {
    dataService.deletealien(req.params.name)
    //res.status(200).send("sucess");
    .then(result => { res.status(result.statusCode).json(result) })

})



    

    app.listen(9000, () => { console.log("Server started at port 9000") })