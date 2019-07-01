/* ==========数字类型========== */
let decLiteral:number = 6
let hexLiteral:number = 0xf00d
// ES6 中的二进制表示法
let binargLiteral:number = 0b1010
// ES6 中的八进制表示法
let octalLiteral:number = 0o744
let notANumber:number = NaN
let infinityNumber:number = Infinity

/* ==========字符串========== */
let myName:string = 'Tom'
let myAge:number = 25

//模板字符串
let sentence:string = `Hello, my name is ${name}.
I'll be ${myAge + 1} years old next month.`

/* ==========空值========== */
function alertName():void{
  alert('My name is Tom')
}

/* ==========null 和 undefined========= */
let u:undefined = undefined
let n:null = null