function inverted(n) {
 for (let i = n; i >= 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}

inverted(5);
