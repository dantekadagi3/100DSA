/**
 * a map is a data structure that can be used to store values mapped to a key
 * just like in  objects data in a map is stored in key-value pairs
 * the difference between an object and a map is that the key in a map can be of any datatype
 */
//creating a map
let question=new Map()
//set() to add elements in a map
//you pass a key and a value in a set
question.set('question','in which year was ES6 released')
question.set('1','2000')
//you can also chain the set method
question.set(1,2002)
.set(3,5000)
.set(4,6000)

console.log(question)