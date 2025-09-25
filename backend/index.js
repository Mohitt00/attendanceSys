let express = require("express");
let app = express();
let PORT = 5003;
let db = require("./db");
let cors = require("cors");


app.use(cors());
app.use(express.json());

// Farmer signup route

app.post("/farmer-signup",(req,res)=>{
    let {name,email,phone,password} = req.body;
    let sqlQ = "INSERT INTO farmerInfo(name,email,phone,password) VALUES (?,?,?,?)";
    db.query(sqlQ,[name,email,phone,password],(err,result)=>{
        if(err) return res.send(err);
          res.send({
               success:true,
               message:"Registration Done"
            });  
    })
})


// farmer login route

app.post("/farmer-login",(req,res)=>{
    let {email} = req.body;
    
    let sqlQ = "SELECT *FROM farmerInfo WHERE email=?";
    db.query(sqlQ,[email],(err,result)=>{
        if(result.length>0){      
            let farmer_id = result[0].id        
            res.send({
                success:true,
                farmer_id:farmer_id,
                message:"Login successful"
            })
        }
        else{
            res.send({
                success:false,
                message:"not user found"
            });
            
        }
    }) 
})


// add farm route
app.post("/addFarm", (req,res)=>{
    let {ownerId,name,address,lat,log,radius} = req.body;
    let sqlQ = 'INSERT INTO farm(owner_id,name,address,centeroid_lat,centeroid_log,radius_m) VALUES (?,?,?,?,?,?)';
    db.query(sqlQ,[ownerId,name,address,lat,log,radius],(err,result)=>{
        if(err) return res.send(err);
          res.send({
            success:true,
            message:"Farm added successfully"
          })
        })
})


// get farm data from farm table 
app.get("/viewFarm",(req,res)=>{
    let sqlQ = 'SELECT * FROM farm';
    db.query(sqlQ,(err,result)=>{
        if(result.length>0){
            console.log(result);
            res.send({
                success:true,
                newFarmData:result,
                message:"Data Fetched From Farm"
            })
        }
        else{
             res.send({
            success: true,
            newFarmData: [],
            message: "No farms found"
        });
        }
    })
})



// add driver
app.post("/addDriver",(req,res)=>{
    let {name,email,phone,vehical} = req.body;
    let sqlQ = 'INSERT INTO driver(name,email,phone,vehical_no) VALUES (?,?,?,?)';
    db.query(sqlQ,[name,email,phone,vehical],(err,result)=>{
        if(err) return res.send(err);
        res.send({
            success:true,
            message:"Driver Added Successfully!🎉"
        })
    })
})


// show all driver data
app.get("/showDriver",(req,res)=>{
    let sqlQ = "SELECT * FROM driver";
    db.query(sqlQ,(err,result)=>{
        if(result.length>0){
            res.send({
                success:true,
                driverData:result
            })
        }
        else{
            res.send({
                success:false,
                driverData:[]
            })
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})