let myLeads = []; // `makes a string`
// myLeads =  JSON.stringify(myLeads); //sends data as string
// myLeads =  JSON.parse(myLeads); // sends data as object
// myLeads.push("www.pillai.com")

// console.log(typeof myLeads);
const inputBtn = document.getElementById("save-btn");
const delBtn = document.getElementById("del-btn");
const inputEl = document.getElementById("input-el");
const unorderList = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  //leadFromLocalStorage is not null
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}
function strike(completed) {
  if (completed.style.textDecoration === "line-through") {
    completed.style.textDecoration = "none";
  } else {
    completed.style.textDecoration = "line-through";
  }
//   console.log("clicked");
}
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li ondblclick="strike(this)">
          ${leads[i]}
          </li>`;
  }
  //
  unorderList.innerHTML = listItems;
}

delBtn.addEventListener("dblclick", () => {
//   console.log("double click");
  localStorage.clear();
  myLeads = []; //reassigns the empty array
  render(myLeads); //calling the function with empty array
});

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value); //saved in arr
  inputEl.value = " ";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // console.log(typeof myLeads)

  render(myLeads);
  localStorage.getItem("myLeads");
});
