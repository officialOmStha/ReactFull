const nums = [1,2,3,4,5]

const square = nums.map(function(num){
    return num *num
})



const names = ["alish", "om", "dharma", "sabina"]
const capi = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

const withTags = names.map((name) => {
    return `<p>${name}</p>`
})

const withTagsAl = capi.map((name) => {
    return `<p>${name}</p>`
})





console.log(square)
console.log(capi)
console.log(withTags)
console.log(withTagsAl)