let gradesOfStudents = [10,6,8,9,6];
function average(grades){
let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  if(sum / grades.length >=8 ) {
    alert("You have passed")
  } else{
    alert("You have failed");
  }
  
  console.log(sum)
}
average(gradesOfStudents)
