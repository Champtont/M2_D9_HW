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

//add to list based on input
const trackNumInput = document.getElementById("trackNum");
const trackNameInput = document.getElementById("trackTitle");
const trackLengthInput = document.getElementById("Duration");

const clearModal = () => {
  trackNameInput.value = null;
  trackNumInput.value = null;
  trackLengthInput.value = null;
};

const addTrack = () => {
  let trackNum = trackNumInput.value;
  let trackName = trackNameInput.value;
  let duration = trackLengthInput.value;

  const tbody = document.getElementById("table1");
  const tRow = document.createElement("tr");
  const thead = document.createElement("th");
  const tdata = document.createElement("td");
  const tdata2 = document.createElement("td");
  const tdata3 = document.createElement("td");
  const dbtn = document.createElement("button");

  tbody.appendChild(tRow);
  thead.setAttribute("scope", "row");
  thead.innerText = trackNum;
  tRow.appendChild(thead);
  tdata.innerText = trackName;
  tRow.appendChild(tdata);
  tdata2.setAttribute("class", "time");
  tdata2.innerText = duration;
  tRow.appendChild(tdata2);
  dbtn.innerText = "Delete";
  dbtn.classList.add("btn", "btn-danger", "hide");
  tdata3.appendChild(dbtn);
  tRow.appendChild(tdata3);

  console.log(trackNum, trackName, duration);
  clearModal();
  exitModal();
};

modalYes.addEventListener("click", addTrack);
