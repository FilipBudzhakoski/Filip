function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype.getFullName = function() {
return `${this.firstName} ${this.lastName}`;
};
function Student(firstName, lastName, age, academyName, studentId) {
Person.call(this, firstName, lastName, age);
this.academyName = academyName;
this.studentId = studentId;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
    console.log(`The student ${this.firstName} is studying in the ${this.academyName}`);
};
const student1 = new Student('Filip', 'Budzhakoski', 35, 'Some Academy', 'SQW123');
const student2 = new Student('Ime', 'Prezime', 24, 'Medical Academy', 'SQW456');

console.log(student1.getFullName()); 
student1.study(); 

console.log(student2.getFullName()); 
student2.study(); 
