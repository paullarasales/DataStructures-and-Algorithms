function isLegal(age) {
  if (age <= 2005){
    console.log("Legal Age");
  } else if (age >= 2006){
    console.log("Minor");
  } else {
    print("------")
  }
}

console.log(isLegal(2002));
console.log(isLegal(2009));
