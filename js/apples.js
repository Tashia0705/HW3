/* Name: Tashia Boddu
Project Created: October 25th 2022
Purpose of Project: Understand and create a dynamic table that
interacts with the user. Learn JS as well */

/* function that creates an array based in user input */
function array(min, max) {
  let array = [];
  if (min != 0) {
    array.push(0);
  }
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

/* display error message in consol */
function errorMsg(minRow, maxRow, minCol, maxCol) {
  if (!parseInt(minCol) || !parseInt(maxCol) ||
      !parseInt(minRow) || !parseInt(maxRow)) {
      throw new Error("Input Is Not A Number");
  }
  else if ((minRow < -50 || minRow > 50) ||
      (maxRow < -50 || maxRow > 50) ||
      (minCol < -50 || minCol > 50) ||
      (maxCol < -50 || maxCol > 50)) {
      throw new Error("Input Must Be -50 to 50");
  }
}

/* create the table by storing user input into vars. Use vars to
compute the values for the table using nested for loops.Use arrays
to iterate thought each index to genereate desired result */
function createTable () {
  if (document.querySelector("table")) {
    document.querySelector("table").remove();
  }
  const table = document.createElement('table');

  var minCol = document.getElementById("mincol").value;
  var maxCol = document.getElementById("maxcol").value;
  var minRow = document.getElementById("minrow").value;
  var maxRow = document.getElementById("maxrow").value;

  const column = array(minCol, maxCol);
  const row = array(minRow, maxRow);

  /* display error message if inputs are invalid */
  errorMsg(minRow, maxRow, minCol, maxCol);

  for (var r = 0; r < parseInt(row.length); r++) {
    var x = document.createElement('tr');
    for (var c = 0; c < parseInt(column.length); c++) {
      var y =  document.createElement('td');
      let result = row[r] * column[c];

      if (r === 0 || c === 0) {
        result = row[r] || column[c];
        y.classList.add('header');
      }
      if (r === 0 && c === 0) result = '';
        y.innerHTML = result;
        x.appendChild(y);
    }
    table.appendChild(x);
  }
  const container = document.getElementById("Table");
  container.appendChild(table);
  event.preventDefault();
}
