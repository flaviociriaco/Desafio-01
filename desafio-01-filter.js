/*
Pegar apenas números pares e ímpares
*/

const list = [20,3,234,12,17,541,6,87,275,1000]

const newList = list.filter(lists => lists % 2 === 0 && lists % 5 === 0 )

console.log(newList)