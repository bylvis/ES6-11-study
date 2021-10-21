const fs = require('fs')
// fs.readFile('./file/1.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

const p = new Promise((resolve,reject)=>{
    fs.readFile('./file/1.txt',(err,data)=>{
        if(err) reject(err);
        resolve (data)
    })
})
p.then(value=>{
    console.log(value);
},reason=>{
    console.log('读取失败');
})