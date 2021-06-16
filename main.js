// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

// ### `createUser`

function createUser(fName, lName) {
    user = {
        firstName: fName,
        lastName: lName
    }
    return user;

    // * Accepts two parameters, a user's first name and last name
    // * Returns a user objects

    // ```
    // Example:

    // createUser('Mesuara', 'Kaleziq') => 
    // {
    //   firstName: 'Mesuara',
    //   lastName: 'Kaleziq'
    // }
    // ```

}

// ### `setAge`
function setAge(user, age) {

    user.age = age;
    return user;

    // * Accepts two parameters, a user object and an age
    // * Adds a new `age` field to the user
    // * Returns the user object

    // ```
    // Example:

    // const user = { 
    //     firstName: 'Tim',
    //     lastName: 'Horton'
    // };
    // setAge(user, 50) => 
    // {
    //     firstName: 'Tim',
    //     lastName: 'Horton',
    //     age: 50
    // }
    // ```
}




// ### `incrementAge`
function incrementAge(user) {
    user.age++
        return user;


    // * Accepts a user object
    // * Increments the age field by one
    // * Returns the user object

    // ```
    // Example:

    // const user = { 
    //     firstName: 'Angela',
    //     lastName: 'Merkel',
    //     age: 66
    // };

    // incrementAge(user) =>
    // { 
    //     firstName: 'Angela',
    //     lastName: 'Merkel',
    //     age: 67
    // }
    // ```
}

// ### `fixCar`
function fixCar(car) {
    car.needsMaitenance = false;
    return car;


    // * Accepts a car object
    // * Sets the `needsMaitenance` field to `false`
    // * Returns the car object

    // ```
    // Example

    // const car = {
    //     make: 'Ford',
    //     model: 'Mustang',
    //     year: 1969,
    //     needsMaitenance: true
    // };


    // fixCar(car) =>
    // {
    //     make: 'Ford',
    //     model: 'Mustang',
    //     year: 1969,
    //     needsMaitenance: false
    // }
    // ```
}


// ### `addGrades`
function addGrades(student, grades) {
    for (let i of grades) {
        student.grades.push(i);
    }
    return student;


    // * Accepts two parameters, a student object and an array of grades
    // * Adds each new grade to the student's `grades` array
    // * Returns the student object

    // ```
    // Example

    // const student = {
    //     name: 'Anthony DeRosa',
    //     email: 'anthony.derosa@codeimmersives.com',
    //     grades: [80, 100, 95]
    // };

    // const newGrades = [88, 70, 90];

    // addGrades(student, newGrades) =>
    // {
    //     name: 'Anthony DeRosa',
    //     email: 'anthony.derosa@codeimmersives.com',
    //     grades: [80, 100, 95, 88, 70, 90]
    // }
    // ```

}

// ### `getDataType`
function getDataType(object, key) {

    return typeof(object[key]);
    // * Accepts two parameters, an object and a key in that object
    // * Returns the data type of the value at that key in the object

    // ```
    // Examples

    // const car = {
    //     make: 'Ford',
    //     model: 'Mustang',
    //     year: 1969,
    //     needsMaitenance: false
    // };

    // getDataType(car, 'make') => 'string'

    // getDataType(car, 'model') => 'string'

    // getDataType(car, 'year') => 'number'

    // getDataType(car, 'needsMaitenance') => 'boolean'

    // ```
}


// ### `addTodo`
function addTodo(toDo, newToDo) {
    toDo.push(newToDo);

    return toDo

    // * Accepts two parameters, an array of to-do items and a new to-do item
    // * Adds the new-todo item to the array
    // * Returns the array of to-do items

    // ```
    // Example

    // const todos = [
    //     { 
    //         title: 'Get gas', 
    //         isComplete: false },
    //     { 
    //         title: 'Buy bread', 
    //         isComplete: true  
    //     }
    // ];

    // const newTodo = {
    //     title: 'Call mom', 
    //     isComplete: false
    // };

    // addTodo(todos, newTodo) =>
    // [
    //     { 
    //         title: 'Get gas', 
    //         isComplete: false 
    //     },
    //     { 
    //         title: 'Buy bread', 
    //         isComplete: true  
    //     },
    //     {
    //         title: 'Call mom', 
    //         isComplete: false
    //     }
    // ];
    // ```
}

// ### `addSong`
function addSong(playlist, song) {
    playlist.songs.push(song);
    playlist.duration += song.duration;
    return playlist;

    // * Accepts two parameters, a playlist object and a song object
    // * Updates the duration of the playlist
    // * Adds the song to the playlist's `songs`
    // * Returns the playlist object

    // ```
    // Example

    // const playlist = {
    //     title: 'My jams',
    //     duration: 7,
    //     songs: [
    //         {
    //             title: 'Texas Sun',
    //             artist: 'Khruangbin',
    //             duration: 4
    //         },
    //         {
    //             title: 'Malamente',
    //             artist: 'Rosalia',
    //             duration: 3
    //         }
    //     ]
    // };

    // const newSong = {
    //     title: 'Old Friends',
    //     artist: 'Pinegrove',
    //     duration: 3
    // };

    // addSong(playlist, song) =>
    // {
    //     title: 'My jams',
    //     duration: 10,
    //     songs: [
    //         {
    //             title: 'Texas Sun',
    //             artist: 'Khruangbin',
    //             duration: 4
    //         },
    //         {
    //             title: 'Malamente',
    //             artist: 'Rosalia',
    //             duration: 3
    //         },
    //         {
    //             title: 'Old Friends',
    //             artist: 'Pinegrove',
    //             duration: 3
    //         }
    //     ]
    // }
    // ```}
}

// ### `updateReportCard`
function updateRepartCard(reportCard, newGrade) {
    reportCard.grades.push(newGrade);
    reportCard.lowestGrade = Math.min(reportCard.grades);
    reportCard.highestGrade = Math.max(reportCard.grades);
    reportCard.averageGrade = reportCard.grades.reduce() / reportCard.grades.length();

    return reportCard;

}
// * Accepts two parameters, a report card and a new grade (a number between 0 and 100)
// * Updates the report card's lowest grade, highest grade, and average grade
// * Adds the new grade to the report card's grades

// ```
// Examples

// const reportCard = {
//     lowestGrade: 70,
//     highestGrade: 96,
//     averageGrade: 82,
//     grades: [70, 95, 80]
// };

// updateReportCard(reportCard, 62) =>
// {
//     lowestGrade: 62,
//     highestGrade: 96,
//     averageGrade: 77,
//     grades: [70, 95, 80, 62]
// }

// updateReportCard(reportCard, 100) =>
// {
//     lowestGrade: 70,
//     highestGrade: 100,
//     averageGrade: 86.5,
//     grades: [70, 95, 80, 100]
// }
// ```



// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘