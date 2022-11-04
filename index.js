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
//Modal stuff
let modal = document.getElementById("modalBox");
let addbtn = document.getElementById("addtrack");

const getModal = () => {
  modal.classList.add("displayModal");
};

addbtn.addEventListener("click", getModal);
//modal buttons
let modalYes = document.getElementById("yes");
let modalNo = document.getElementById("nope");
let xBtn = document.getElementById("close");

const exitModal = () => {
  modal.classList.remove("displayModal");
};

xBtn.addEventListener("click", exitModal);
modalNo.addEventListener("click", exitModal);

const addTrack = () => {
  console.log("pushed");
};

modalYes.addEventListener("click", addTrack);
