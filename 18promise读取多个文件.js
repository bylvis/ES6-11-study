const fs = require('fs');
// fs.readFile('./file/11.txt',(err,data1)=>{
//     console.log(data1.toString());
//     fs.readFile('./file/2.txt',(err,data2)=>{
//         console.log(data2.toString());
//         fs.readFile('./file/3.txt',(err,data3)=>{
//             console.log(data3.toString());
//         })
//     })
// })
// 顺序不能确定
// fs.readFile('./file/11.txt',(err,data1)=>{
//     console.log(data1.toString());
// })
// fs.readFile('./file/2.txt',(err,data1)=>{
//     console.log(data1.toString());
// })
// fs.readFile('./file/3.txt',(err,data1)=>{
//     console.log(data1.toString());
// })

// 使用promise实现
const p = new Promise((resolve,reject)=>{
        fs.readFile('./file/11.txt',(err,data)=>{
            if(err) reject('读取错误')
            resolve(data);
        })
    })

p.then(value=>{
    return new Promise((resolve,reject)=>{
            fs.readFile('./file/2.txt',(err,data)=>{
                if(err) reject('读取错误')
                resolve([value,data]);
            })
}).then(value=>{
        return new Promise((resolve,reject)=>{
            fs.readFile('./file/3.txt',(err,data)=>{
                if(err) reject('读取错误')
                value.push(data);
                resolve(value)
            })
        })
    })}).then(value=>{
    console.log(value.toString());
})