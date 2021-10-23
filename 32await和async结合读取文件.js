const fs = require('fs')

// 返回一个 Promise 对象
readTxt1 = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./file/11.txt',(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}

readTxt2 = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./file/2.txt',(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}

readTxt3 = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./file/3.txt',(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}

async function main(){
    // await 返回的结果是 Promise成功的结果 即resolve的结果
    let txt1 = await readTxt1()
    let txt2 = await readTxt2()
    let txt3 = await readTxt3()
    console.log(txt1.toString(),txt2.toString(),txt3.toString());
}
main()