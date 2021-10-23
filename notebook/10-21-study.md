# 10-21

## let 块级作用域
    1.let只在块级作用域里面有效，var指的是全局作用域
    2.let的this总是指向window 当需要调用块里面的this指向时 可以保存this的值 例如let _this = this
## const
    1.const 常量无法修改
    2.对常量数组里面元素的修改不算对常量的修改，不会报错
    3.一般用大写命名
    4.有块级作用域性质

## 参数默认值
    1.ES6允许给参数赋值默认值 默认值放在尾巴

## 结构赋值
    1.数组结构
        const RNG = ['UZI',"MLXG",'LETME','XIAOHU','MING']
        数组结构赋值
        let [adc,jug,top1,mid,fuzhu] = RNG

    2.对象结构
        const BAI = {
            name:'baiyulong',
            age:19,
            say:function(){
                console.log('hello world');
            }
        }
        对象解构赋值
        let {name,age,say}=BAI
        console.log(name);
        console.log(age);
        say()
## 模板字符串
    `my name is ${name}`

## 简化对象
    let my = () => {}
    say(){
            console.log('i am saying');
        }

## 箭头函数

## 参数默认值
    1.ES允许给参数添加默认值，但必须在尾部，而且如果赋值则会把默认值覆盖。
    2.可以与解构赋值相结合

## rest参数
    1.ES6引入rest参数，用于获取函数的实参，用来代替arguments
    2.rest就是剩下的参数，函数没定义但是传进来了的参数
    3.打印rest参数 得到的是一个数组 里面是剩下来的没有接应的参数

## ...扩展运算符
    1.数组的合并 拆分 克隆
    2.能把伪数组转化为真的数组

## symbol
    特点
        1.symbol值唯一，用来解决命名冲突的问题
        2.symbol不能和其他类型的数据进行运算
        3.symbol定义的对象属性不能用for in 循环遍历 可以使用Reflect.ownKeys来返回对象的所有键名
        最大的用法就是用来定义对象的唯一属性名
## 迭代器
    工作原理
        1.创建一个指针对象
        2.第一次调用对象的next方法，指针自动指向数据结构的第一个成员
        3.接下来不断调用，指针一直向后移动,并且保留当前位置，类似链表
        4.每次调用next返回一个包含value和done属性的对象

        注意：需要自定义遍历数据的时候，要想到迭代器,能够遍历没有迭代器的数据类型

## 生成器
    特点
        本身是一个函数，是ES6提供的一个异步编程解决方案，语法行为和传统函数完全不同
        异步编程，纯回调函数，node fs ajax mongodb
    语法
        function * gen(){
                console.log('this is iterator');
            }
        let iterator = gen();
        iterator.next()

    ps：yield 函数代码的分隔符 线程暂时挂起
    每次调用生成器的实例的next方法都会进行下一个代码片段的执行，函数会返回一个value，就是yield后面的东西

## promise 
    Promise对象 两个函数参数 resolve reject 分别是接收和拒绝 只能执行一个函数
    实例化的对象调用then方法 then里面两个函数  一个是接受成功的回调函数 一个是接受失败的回调函数
    满足条件调用resolve 不满足条件调用reject
    then方法的返回结果是Promise对象，对象状态由返回结果决定
    then 返回的结果 未定义，返回Promise里面的正确结果，返回一个Promise对象则属性里是成功，抛出错误 直接失败
    作用：
        为了让异步操作有次序地执行,结构清晰，不会产生回调地狱
        回调地狱嵌套严重可读性差 容易重名
        Promise缩进有限
    catch方法
    主要是用来抓错误，then方法可以完成它的任务
    p.catch(function(reason){
        console.warn(reason)
    })
    例子：封装一个ajax函数，

## Set
    特点：
        不会重复，可以拿来数组去重,交集，并集，差集

    集合 要new Set([]) 来创建
    有增删查清空
    s.add()
    s.delete()
    s.has()
    s.clear()
    s.size()
    可以用for of 遍历
## Map
    let m = new Map()
    m.set("name",'byl')
    m.size()
    m.delete()
    m.get() 找到对应元素的值
    m.clear()
    可以用for of 遍历

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
        
    2.get
# ps
    1.str.toString() 把16进制的字符串转化为中文
    2.filter(遍历 返回满足条件的值)
    3. .call 使得这个方法可以使用另外一个对象的属性