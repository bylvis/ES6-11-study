# 10-23-study
## class 
    所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法
    class里面有一个constructer 类似于赋初始值吧
    可以在类里面自定义方法 但是必须是简写模式
    class Computer{
            constructor(brand,price){
                this.brand = brand;
                this.price = price;
            }
            call(){
                console.log('i can use computer');
            }
        }
    static 属性 只属于类 不属于实例对象
    注意：函数对象的属性只属于函数对象 不属于实例对象
    所有的实例对象对象都会从一个 prototype（原型对象）中继承属性和方法

## 构造函数继承
    父类构造函数的继承通过protatype原型来继承
    ES6类继承通过extends来
    super()相当于Phone.call(this,brand,price);
    可以重写父类
    子类不能调用父类的重名方法
    
    1.set
        set就是属性值的修改方法。
        相当于监听属性被修改
    2.get
        get其实就是对象的属性值的返回值的方法
        相当于监听属性被查看 

## 数值扩展
    1.number.EPSILON 表示JS最小精度 验证两个数是否不严格相等
    2.
    二进制  0b
    八进制  0o
    十六进制 0x
    3.Number.isFinite() 检测一个数是否为有限数
    4.Number.isNaN()
    4.Number.parseInt() 字符串转整数 会截断非整数部分
    5.Number.parseFloat() 字符串转浮点
    6.Number.isInteger() 判断是否为整数
    7.Math.trunc() 去除小数点后面的数字
    8.Math.sign() 判断一个数是正数负数还是0
## 对象扩展
    Object.assign() 对象合并
    Object.setPrototypeOf 设置原型对象
    Object.getPrototypeOf 得到原型对象

## ES6模块化
    export 暴露 分开暴露 统一暴露 默认暴露 在对象里面 
    import 引入
    1.解构赋值
        import{school，teach} from './src/1.js
        import{school as sc，teach} from './src/2.js
        可以直接使用school和teach 不可以重名
        引入default 要给一个别名
        import{default as m} from './src3.js
        简便 import m3 from './src/4.js'
        
    2.浏览器使用ES6模块化
        1.标签引入入口文件
            <script src='./app' type="module"></script>
        2.标签里面直接写 type设置成module
    3.
    1.安装npm i babel-cli babel-preset-env browserify -D
    2.使用npx babel src/js -d dist/js --presets=babel-preset-env
    3.打包npx browserify dist/js/app.js -o dist/bundle.js
    就能正确导入了
## async
    async函数返回的是一个promise类型的对象
     // 返回的结果不是一个Promise类型的对象，返回的结果就是一个成功的promise对象
    如果return一个Promise 则async返回的就是一个成功的promise，并且值就是resolve()里面的值，里面成功的值就是外面成功的值

## await
    放在async函数中
    await返回的值就是成功的Promise的值
    如果Promise失败 则awiat会失败 会报错 
    写出看起来像同步代码的异步代码
    在axios里面接结果
    
# PS
    1.捕捉错误
    try{

    }catch{

    }