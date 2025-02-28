const express=require("express")
const bodyParser=require("body-parser")
const date=require(__dirname + "/date.js")
const app=express();


 var items=["Buy chocolates","cook food","bring snacks"];

 app.set('view engine','ejs');

 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));



app.get("/",function(req,res){
    
  let day =date();
    res.render("list",{kindOfDay:day,newListItems:items});
});
app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("server running")
})