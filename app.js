const express=require('express');
const ejs=require("ejs");
const app=express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
})

app.get("/Technical",function(req,res){
    res.render("Technical");

});

app.get("/Literary",function(req,res){
    res.render("Literary");

});

app.get("/Fun",function(req,res){
    res.render("Fun");

});


app.listen(process.env.PORT || 3000,function(){
    console.log("started server");
});