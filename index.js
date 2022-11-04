//want to delete the targeted row need delete button and the rows
let deletebtns = document.querySelectorAll(".btn-danger");

const deleteItem = (event) => {
  let td = event.target.parentNode;
  let tr = td.parentNode;
  tr.parentNode.removeChild(tr);
  console.log("pushed");
};

for (let i = 0; i < deletebtns.length; i++) {
  deletebtns[i].addEventListener("click", deleteItem);
}
