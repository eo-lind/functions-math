const add = (num1, num2) => {
    const sum = num1 + num2
    return sum
}

const addedTotal = add(4, 14)

const multiplyByTwo = (sumFromAddition) => {
    const multiplied = sumFromAddition * 2
    return multiplied
}

const finalNumber = multiplyByTwo(addedTotal)

console.log(finalNumber)