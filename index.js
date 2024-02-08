let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    //Way 1
    // const li = document.createElement("li");
    // li.textContent = leads[i];
    // ulEl.append(li);

    //Way 2
    listItems += `
      <li>
        <a target='_blank' rel='noopener noreferrer' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>`;
  }

  ulEl.innerHTML = listItems;
}

function saveLead(leadValue) {
  myLeads.push(leadValue);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

inputBtn.addEventListener("click", () => saveLead(inputEl.value));

saveBtn.addEventListener("dblclick", function () {
  //Get current tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let url = tabs[0].url;
    saveLead(url);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
