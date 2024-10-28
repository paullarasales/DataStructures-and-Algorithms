function isLegal(age) {
  let status;
	if (age <= 2005) {
	  status = "Legal";
	} else if (age >= 2006) {
	  status = "Minor";		
  }

  return "You are " + status;
}

module.exports = {
	isLegal
}


