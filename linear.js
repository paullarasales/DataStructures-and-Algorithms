// On linear search 

const students = ["No Pen", "No Pen", "No Pen", "Pen", "No Pen"];

for (let student of students) {
  if (student === "Pen") {
    console.log("Found it");
    break;
  }
}
