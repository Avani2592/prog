/*
Map is an unordered collection of key-value pairs.Both keys and values can be of any data type
To retrieve a value, you can use the corresponding key
Maps are iterables. They can be used with a for of loop

*/

const map=new Map([['a',1],['b',2]])
map.set('c',3)   //set is method of map to add value
console.log(map.has('a'))
map.delete('c')
console.log(map.size)
map.clear()
for(const [key,value] of map)
{
    console.log(`${key}:${value}`)
}