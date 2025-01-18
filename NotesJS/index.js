let myLeads = [];
const inputBtn = document.getElementById("save-btn");
const delBtn = document.getElementById("del-btn");
const inputEl = document.getElementById("input-el");
const unorderList = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//renders the list items from local storage when webpage loads for the first time
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

//strikes off the item from the list upon double click
function strike(item) {
  console.log(item)
  myLeads = JSON.parse(localStorage.getItem("myLeads"));

  for (let i = 0; i < myLeads.length; i++) {
    let itemObject = myLeads[i].itemName;
    if (itemObject === item.innerHTML) {
      myLeads[i].isStrike = !myLeads[i].isStrike;
      console.log("executed true")
    }
  }
  console.log(myLeads)
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  if (item.style.textDecoration === "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}

//retriving items from the list
function render() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li style="text-decoration:${myLeads[i].isStrike?"line-through":"none"};" ondblclick="strike(this)">${myLeads[i].itemName}</li>`;
  }
  unorderList.innerHTML = listItems;
}

//deletes the list 
delBtn.addEventListener("click", () => {

  localStorage.clear();
  myLeads = []; //reassigns the empty array
  render(myLeads); //calling the function with empty array
});

//takes user input and adding new item in the list 
inputBtn.addEventListener("click", () => {
  let newItem = {
    itemName: inputEl.value,
    isStrike: false,
  };
  myLeads.push(newItem); //saved in arr
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  // console.log(typeof myLeads)
  myLeads = JSON.parse(localStorage.getItem("myLeads"));
  // console.log(itemList);
  render();
});
