let body = document.querySelector("body");


class Table {
  constructor(row, column) {
    this.column = column;
    this.row = row;

    try {
      if (isFinite(this.row || isFinite(this.column))) {
        let table = document.createElement("table");
        body.append(table);
        for (let j = 0; j < this.row; j++) {
          let tableRow = document.createElement("tr");
          table.append(tableRow);
          for (let i = 0; i < this.column; i++) {
            let tableColumn = document.createElement("td");
            tableRow.append(tableColumn);
          }
        }
      } else {
        throw new Error(`incorrect data column or row`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
let myTable = new Table(30, 30);

body.onclick = function (event) {
  let selTable = document.querySelector("table")
  let td = event.target.closest('td');
  if (event.target == body) {
   selTable.classList.toggle('onClick')
} else if(event.target == td) {
  if(event.target.className == 'white') {
    event.target.className = 'black';
} else {
  event.target.className = 'white';}

//   event.target.classList.toggle("white");
//   event.target.classList.toggle("black");
    
  }
};



// body.onclick = function (event) {
//   let selTable = document.querySelector("table")
//   // let selTd = document.querySelectorAll("td");
//   if (event.target == body) {
//     // selTd.forEach((item) => {
//     //   item.classList.toggle("onClick");
//     // });    
//     selTable.classList.toggle('onClick')
//   // } else if(selTable.classList.contains('onClick')) {
//   //   event.target.classList.toggle("onClick");
//   //   selTable.classList.toggle('onClick')
//   // 
// // } else {
// //   event.target.classList.toggle("white");
// //   event.target.classList.toggle("black");
    
//   }
// };

// let selTable = document.querySelector("table");

// body.addEventListener('click', colorTable);
// function colorTable(){
// selTable.classList.toggle('onClick')	
// colorTd(event.target)
// };
// // selTable.addEventListener('click', colorTd);
// function colorTd(){
//   let td = event.target.closest('td');
// 	if (td) { 
// 		td.classList.toggle("onClick");
//     td.stopPropagation();
// 	}
  
// }



