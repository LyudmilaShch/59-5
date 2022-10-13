const names = ["Bob", "Alex", "Donald", "ann", 999, "Игорь", "юрий", "$dollar"]

console.log([...names].sort());
console.log(names)

//1. сортирует по unicode строки из коробки
//2. работает мутабельно
//3. возвращает ссылку на исходный массив (массив будет уже отсортирован)
//4. с sort() часто используется revers()

console.log(names.reverse());

const nums = [9, 10, 1, 667, 5]
console.log(nums.sort());

// const compFn = (a, b) => { // по возрастанию
//     if (a<b){
//         return -10
//     } else {
//         return 50
//     }
// }

const compFn = (a, b) => a - b

console.log(nums.sort(compFn))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

const sortByAge = students.sort((a, b) => a.age - b.age)
console.log(sortByAge);

// const sortByNames = students.sort((a, b) => {
// if (a.name.toLocaleLowerCase() <= b.name.toLocaleLowerCase()) {
//     return -1
// } else {
//     return +5
// }}
// )

const sortByNames = students.sort((a, b) => a.name.localeCompare(b.name))
console.log(sortByNames)

const numbers = [78, 12, 55, 34, 23, 67, 99, 10]

for (let j = 0; j < numbers.length; j++) {
    let isSorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isSorted = false;
            // let temp = numbers[i]
            // numbers[i] = numbers[i + 1]
            // numbers[i + 1] = temp
                [numbers[i+1], numbers[i]] = [numbers[i], numbers[i+1]]
        }
    }
    if(isSorted) break
}
console.log(numbers);