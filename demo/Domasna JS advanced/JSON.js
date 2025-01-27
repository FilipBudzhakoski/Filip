const fetchStudentData = () => {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
        .then(response => response.json())
        .then(data => {
            const students = data;
            const studentDataDiv = document.getElementById('studentData');
            const highGradeStudents = students.filter(student => student.averageGrade > 3);
            console.log('Students with an average grade higher than 3:', highGradeStudents);
            const femaleStudentsWithGrade5 = students.filter(student => student.gender === 'Female' && student.averageGrade === 5).map(student => student.name);
            console.log('Female students with an average grade of 5:', femaleStudentsWithGrade5);
            const maleStudentsInSkopjeOver18 = students.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18).map(student => `${student.firstName} ${student.lastName}`);
            console.log('Male students in Skopje over 18:', maleStudentsInSkopjeOver18);
            const femaleStudentsOver24 = students.filter(student => student.gender === 'Female' && student.age > 24);
            const averageGradeFemaleOver24 = femaleStudentsOver24.reduce((sum, student) => sum + student.averageGrade, 0) / femaleStudentsOver24.length;
            console.log('Average grade of female students over 24:', averageGradeFemaleOver24);
            const maleStudentsWithB = students.filter(student => student.gender === 'Male' && student.name.startsWith('B') && student.averageGrade > 2);
            console.log('Male students with a name starting with B and average grade over 2:', maleStudentsWithB);
            studentDataDiv.innerHTML = `
                <h2>Results</h2>
                <p>Students with an average grade higher than 3: ${JSON.stringify(highGradeStudents)}</p>
                <p>Female students with an average grade of 5: ${JSON.stringify(femaleStudentsWithGrade5)}</p>
                <p>Male students in Skopje over 18: ${JSON.stringify(maleStudentsInSkopjeOver18)}</p>
                <p>Average grade of female students over 24: ${averageGradeFemaleOver24}</p>
                <p>Male students with a name starting with B and average grade over 2: ${JSON.stringify(maleStudentsWithB)}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('studentData').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
};

fetchStudentData();