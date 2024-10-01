function studentMsg(totalScores, studentScore) {
    let sum = 0;

    for (const score of totalScores) {
        sum += score;
    }

    let grade;

    if (studentScore === 100) {
        grade = "A++";
    } else if (studentScore >= 90) {
        grade = "A";
    } else if (studentScore >= 80) {
        grade = "B";
    } else if (studentScore >= 70) {
        grade = "C";
    } else if (studentScore >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (grade !== "F"){
        return "Class average: " + sum / totalScores.length + ". Your grade: " + grade + ". You passed the course.";
    } else {
        return "Class average: " + sum / totalScores.length + ". Your grade: " + grade + ". You failed the course.";
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));