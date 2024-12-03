//On2 check for duplicate

const studentID = ["A1", "A2", "A3", "A1"];

for (let i = 0; i < studentID.length; i++) {
  for (let j = i + 1; j < studentID.length; j++) {
    if (studentID[i] === studentID[j]) {
      console.log('Duplicate has been found', studentID[i], studentID[j]);
    }
  }
}

