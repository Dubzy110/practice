const arr = []

arr.push(1, 2, 3)

console.log(arr)

arr.push(4, 5, 6)

const arr2 = arr.slice(1, 100)

console.log(arr2)

arr.splice(1, 2, 9, 8, 'text', 'word')

console.log(arr)

const l = console.log

const i = arr.indexOf(':)') 
if(i > 2) {
l('too big')
} else if(i === -1) {
    l('notFound')
}   else(l(i))

const isFound = arr.includes(9)

if(isFound) {
    l('found it!')
} else(l('couldn\'t find it ;('))

l(isFound)

const mapped = arr.filter((val) => {
    if(typeof val === "string") {
        return false
    }
return true
}).map((val) => ({
    temperature: val, isTrue: true
}))

l(mapped)

l(typeof "")

const times = (val) => val * 2

l(times(times(arr.length)))

const quad = (num) => times(times(num))

l(quad(2))