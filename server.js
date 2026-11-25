// var fs=require('fs')
// var os=require('os')
const notes=require('./notes.js')

var _= require('lodash')

// function add(a,b){
//     return a+b
// }

// const add = (a,b) => {return a+b }

// console.log(add(10,430))
// console.log("Hello MERN Stack!");

// const add = (a,b,callback) => {
//     const result=a+b
//     console.log("result:",result)
//     callback()
// }

// add(12,13,() => console.log("add completed") )

// const user=os.userInfo()
// console.log(user)
// console.log(user.username)

// const user=os.userInfo()
// fs.appendFile('greeting.txt','Hi' + user.userInfo,() => {console.log("callback")})

const age=notes.age
notes.add(12,notes.age)

const data=["person","person",1,2,2,1,"2","1","1"]
const filter=_.uniq(data)
console.log(filter)