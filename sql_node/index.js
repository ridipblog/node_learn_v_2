const express=require('express');
const sql=require('mysql');
var con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'nodesql'
});

con.connect(function(err) {
  if (err) throw err;
//   con.query("create database nodesql",function(err,mysql){
//     if(err) throw err;
//     console.log('database Created');
//   })
});
const app=express();
app.get('/create_table',(req,res)=>{
    con.query("create table users (name varchar(300),roll varchar(100))",function(err,result){
        console.log("Table Created ");
    });
    res.send("table Created !");
})
app.get('/insert_data',(req,res)=>{
    // var sql = "INSERT INTO users (name, roll) VALUES ('Company Inc', 'Highway 37')";
    var sql = "INSERT INTO employe (name, emp_code) VALUES ?";
    var values = [
        ['John', 123],
        ['Peter', 1234],
        ['Amy', 12345],
        ['Hannah', 123456],
        ['Michael', 123467],
        ['Sandy', 12345678],
    ];
    con.query(sql,[values],function(err,result){
        console.log("Data Insetred !");
        res.send('data Inserted ');
    });
})
app.get('/get_data',async (req,res)=>{

    var sql="select * from users";
    // con.query(sql,function(err,result,fields){
    //     console.log(result);
    //     return result;
    // })
    
    // var sql="select * from employe where id=?";
    var sql="select * from employe where name like 'J%'"
    function getLastRecord(name)
    {
        return new Promise(function(resolve, reject) {
            con.query(sql ,function (err, rows, fields) {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
    var data= await getLastRecord('name_record').then(function(rows) {
        return rows;
    }).catch((err) => setImmediate(() => { throw err; })); 
    console.log(data);
    res.send("data Fetched ");
});
app.get('/delete',async (req,res)=>{
    var sql="delete from employe where id=?";
    function deleteEmploye(id){
        return new Promise(function(resolve,reject){
            con.query(sql,[id],function(err,result){
                if(err){
                    return reject(err);
                }
                resolve(result.affectedRows);
            });
        });
    }
    var affectedRow=await deleteEmploye(2).then(function(row_id){
        return row_id;
    });
    console.log(affectedRow);
    res.send('Deleted');
});
app.get('/update',async(req,res)=>{
    var sql = "UPDATE employe SET name = ? WHERE id = ?";
    function updateEmploye(name,id){
        return new Promise(function(resolve,reject){
            con.query(sql,[name,id],function(err,result){
                if(err){
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
    var updated =await updateEmploye('coder 1',3);
    res.send("upadted ");
});
app.get('/join',async (req,res)=>{
    var sql="select employe.name as name , users.roll as roll from employe join users on users.name=employe.name";
    function joinData(){
        return new Promise(function(resolve,reject){
            con.query(sql,function(err,result){
                if(err){
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
    var data=await joinData().then(function(rows){
        return rows;
    })
    console.log(data);
    res.send('ok');
})
app.listen(3000);