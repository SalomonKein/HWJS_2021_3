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

body.onclick = function(event) {
  if (event.target==body){
    let selTd = document.querySelectorAll("td")
    selTd.forEach(item=>{item.classList.toggle('onClick')})
    // let selTable = document.querySelector("table")    
    // selTable.classList.toggle('onClick')

  }else{
  event.target.classList.toggle('onClick')}}

let myTable = new Table(30, 30);
