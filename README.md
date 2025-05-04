##  Student-ManagemeTask 2: Student Management System 
You are tasked with developing a simplified student management system for 
a classroom using native JavaScript. This system will handle a collection of 
student records and allow you to perform various operations. 
## 1. Data Structure: 
● Each student is represented as an object with the following properties: 
○ studentId: (number, unique identifier) 
○ name: (string) 
○ grade: (number, e.g., 7, 8, 9) 
○ courses: (array of strings, e.g., ["Math", "Science", "History"]) 
○ attendance: (object, where keys are dates and values are 
booleans, e.g., { "2024-01-15": true, "2024-01-16": false }) 
○ hobbies: (object with categories and list of hobbies, e.g., {sports: 
["football", "cricket"], music: ["piano"]}) 
● You will work with an array of these student objects. 
## 2. Functionality: 
● Display Student Details: 
○ Create a function (using an arrow function) that takes a student 
object and logs their details to the console in a user-friendly 
format. Use for...in to iterate over the student's properties (except 
the courses and attendance, which should be iterated with 
for...of). 
# ● Filter Students by Grade: 
○ Write a function that takes a grade and returns a new array 
containing only the students in that grade. Use the filter() 
method. 
# ● Find Student by ID: 
○ Implement a function that takes a student ID and returns the 
corresponding student object. Use the find() method. If no 
student is found, return null. 
# ● Record Attendance: 
○ Create an IIFE that defines a module for attendance 
management. Inside the IIFE: 
■ Declare a function (using const) to record a student's 
attendance on a given date. The function should take the 
student object, the date (string), and a boolean value (true 
for present, false for absent). 
■ The IIFE should return an object with the recordAttendance 
function as a property. 
# ● Add a Course to a Student: 
○ Write a function that takes a student ID and a course name. It 
should add the course to the student's courses array. Use find() 
and splice() (or push()) to add the course. Ensure the course is 
added only if it doesn't already exist. 
# ● Remove a Student: 
○ Create a function that takes a student ID and removes the 
corresponding student from the students array. Use splice() to 
remove the student. 
# ● Get Students with Most Hobbies in a Category: 
○ Create a function to find students with the most hobbies in a 
specified category. 
# ● Demonstrate Data Types and Object/Array Access: 
○ Within the functions, ensure you are correctly using and 
accessing the various JavaScript data types: 
■ Strings for names, course names, and dates. 
■ Numbers for IDs and grades. 
■ Booleans for attendance. 
■ null (if needed for any initializations or error handling). 
■ Arrays for the courses property. 
■ Objects for representing students, attendance records and 
hobbies. 
○ Show how to access properties of student objects (e.g., 
student.name, student.grade, student.attendance["2024-01-15"]) and 
elements of the courses array (e.g., student.courses[0]). 
# ● Console Logging: 
○ Use console.log() to display student details, function results, error 
messages, and intermediate values for debuggnt
