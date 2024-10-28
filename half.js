function half(rows) {
  for (let i = 1; i < rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      console.log([j]);
      row += '* ';
    }
    console.log(row);
  }
}

half(5);
