//STEP 1
// let movies = ['Amélie', 'The Intouchables', 'Autumn in New York', 'Up', "One Flew Over the Cuckoo's Nest"]
// console.log(movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// movies = movies.slice(0, 2).concat('Inception', movies.slice(2, 5))
// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = []
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// movies[5] = 'Inception'
// movies[6] = 'A Beautiful Mind'
// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = []
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// movies[5] = 'Inception'
// movies[6] = 'A Beautiful Mind'
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = []
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// movies[5] = 'Inception'
// movies[6] = 'A Beautiful Mind'
// for (let movie of movies.sort()) {
//     console.log(movie)
// }

//STEP 8
// let movies = []
// movies[0] = 'Amélie'
// movies[1] = 'The Intouchables'
// movies[2] = 'Autumn in New York'
// movies[3] = 'Up'
// movies[4] = "One Flew Over the Cuckoo's Nest"
// movies[5] = 'Inception'
// movies[6] = 'A Beautiful Mind'
// leastFavMovies = ['La La Land', 'American Pie', "Bridget Jones's Diary"]
// console.log(`Movies I like:\n\n${movies.join('\n')}\n\nMovies I regret watching:\n\n${leastFavMovies.join('\n')}`)

//STEP 9
// let favMovies = []
// favMovies[0] = 'Amélie'
// favMovies[1] = 'The Intouchables'
// favMovies[2] = 'Autumn in New York'
// favMovies[3] = 'Up'
// favMovies[4] = "One Flew Over the Cuckoo's Nest"
// favMovies[5] = 'Inception'
// favMovies[6] = 'A Beautiful Mind'
// leastFavMovies = ['La La Land', 'American Pie', "Bridget Jones's Diary"]
// let movies = favMovies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 10
// let favMovies = []
// favMovies[0] = 'Amélie'
// favMovies[1] = 'The Intouchables'
// favMovies[2] = 'Autumn in New York'
// favMovies[3] = 'Up'
// favMovies[4] = "One Flew Over the Cuckoo's Nest"
// favMovies[5] = 'Inception'
// favMovies[6] = 'A Beautiful Mind'
// leastFavMovies = ['La La Land', 'American Pie', "Bridget Jones's Diary"]
// let movies = favMovies.concat(leastFavMovies)
// console.log(movies.pop())

//STEP 11
// let favMovies = []
// favMovies[0] = 'Amélie'
// favMovies[1] = 'The Intouchables'
// favMovies[2] = 'Autumn in New York'
// favMovies[3] = 'Up'
// favMovies[4] = "One Flew Over the Cuckoo's Nest"
// favMovies[5] = 'Inception'
// favMovies[6] = 'A Beautiful Mind'
// leastFavMovies = ['La La Land', 'American Pie', "Bridget Jones's Diary"]
// let movies = favMovies.concat(leastFavMovies)
// console.log(movies.shift())

//STEP 12
// let favMovies = []
// favMovies[0] = 'Amélie'
// favMovies[1] = 'The Intouchables'
// favMovies[2] = 'Autumn in New York'
// favMovies[3] = 'Up'
// favMovies[4] = "One Flew Over the Cuckoo's Nest"
// favMovies[5] = 'Inception'
// favMovies[6] = 'A Beautiful Mind'
// leastFavMovies = ['La La Land', 'American Pie', "Bridget Jones's Diary"]
// let movies = favMovies.concat(leastFavMovies)
// let indices = []
// for (let movie of leastFavMovies) {
//     indices.push(movies.indexOf(movie))
// }
// let moreGoodMovies = ['The Martian', 'Bridge to Terabithia', 'Jumanji']
// indices.forEach((index, i) => {
//     movies[index] = moreGoodMovies[i]
// })
// console.log(movies)

//STEP 13
// let movies = [["Amélie", 1], ["he Intouchables", 2], ["Autumn in New York", 3], ["Up", 4], ["One Flew Over the Cuckoo's Nest", 5]]
// for (let movie of movies) {
//     console.log(movie.filter((item) => {
// 	return typeof item === 'string'
//     }))
// }

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']
// let showEmployee = function (args) {
//     let output = 'Employees:\n\n'
//     for (let employee of args) {
//         output += `${employee}\n`
//     }
//     return output
// }
// console.log(showEmployee(employees))

//STEP 15
// function filterValues(args) {
//     let newArray = args.filter((item) => {
//         return item !== '' && item !== false && item !== 0 && item !== null
//     })
//     return newArray
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
// function getRandomItem(inputArray) {
//     return inputArray[Math.floor(Math.random() * inputArray.length)]
// }
// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//STEP 17
// function getMaxNum(inputArray) {
//     let maxNum = inputArray[0]
//     for (let num of inputArray) {
//         if (num > maxNum) {
//             maxNum = num
//         }
//     }
//     return maxNum
// }

// console.log(getMaxNum([1, 2, 30, 4, 35, 6, 17, 8, 9, 10]))