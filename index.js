const express = require("express");
const app = express();
const users = [{
    name:"Bhoomi",
    kidney:[{
        healthy:false
    }]

}];

app.use(express.json());

app.get("/",function(req,res){
    const Bhoomikidney = users[0].kidney;
    const numberofKidneys = Bhoomikidney.length;
    let numberofhealthykidney = 0;
    for(let i=0;i<Bhoomikidney.length;i++){
        if(Bhoomikidney[i].healthy){
            numberofhealthykidney = numberofhealthykidney+1;
        }
    }
    const numberofUnhealthykidney = numberofKidneys-numberofhealthykidney;
    res.json({
        numberofKidneys,
        numberofhealthykidney,
        numberofUnhealthykidney,
    })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.listen(4000);