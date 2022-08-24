// 1. Copy this array to your code
var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]


// i) Replace the 3rd index with {name: 'Siddiq', age: 23}
index3 = arr[3]
index3.name = "Siddiq"
index3.age = 23
// console.log(arr);


// ii) Push {name: 'Umair', age: '23'} from the end
arr.push({ name: "Umair", age: 23 })
// console.log(arr)


// iii) Remove the first element
arr.shift()
// console.log(arr)


// iv) Add a field createdAt: new Date() with each through loop.
for (var i = 0; i < arr.length; i++) {
    var date = new Date()
    arr[i].createdAt = date
}
// console.log(arr)


/*2. I want an array consisting only those names whose ages are between 18 to 28 and their names
consist of letter 'f'.
Then convert the output array to string. For e.g. ['Asher', 'Zubair'] to 'Asher', 'Zubair'.
*/

newArr = []

if(arr.age > 18 && arr.age < 29 && arr.name == "f"){
    
    newArr.push(arr.name)
}

// console.log(newArr)






// // 3.These are two arrays
var students = [
{
_id: 'std1',
name: 'Bill Gates',
age: 30
},
{
_id: 'std2',
name: 'Steve Jobs',
age: 30
},
{
_id: 'std3',
name: 'Suzanne Collins',
age: 30
}];

var courses = [
{
name: 'Maths',
std_id: ['std3', 'std1']
},
{
name: 'Computer Science',
std_id: ['std3', 'std2']
},
{
name: 'Commerce',
std_id: ['std1']
},
]


var allStudents = []

// for (let i = 0; i < students.length ; i++){
//     allStudents.push({std_name : students[i].name,std_id : students[i]._id,std_courses: []});
// }

// for(let j = 0; j <  courses.length ; j++){
//     for(let i = 0 ;i < allStudents.length; i++){
//         if(courses[j].std_id.includes(allStudents[i].std_id)){
//             allStudents[i].std_courses.push(courses[j].name);
//         }
//     }
// }

for (var i = 0; i < students.length; i++) {
    allStudents.push({std_name : students[i].name, std_id : students[i]._id, std_courses:[]});
}

// console.log(allStudents)

for(var j = 0; j < courses.length; j++){
    for (var i = 0; i< allStudents.length; i++){
        if(courses[j].std_id.includes(allStudents[i].std_id)){
            allStudents[i].std_courses.push(courses[j].name)
        }
    }
}


console.log(allStudents);