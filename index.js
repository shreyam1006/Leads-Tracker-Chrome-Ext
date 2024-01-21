let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

myLeads = JSON.parse(localStorage.getItem("myLeads"));

inputBtn.addEventListener("click", function () {
  //Read input value
  const lead = inputEl.value;
  myLeads.push(lead);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    //Way 1
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);

    //Way 2
    listItems += `
      <li>
        <a target='_blank' rel='noopener noreferrer' href='${myLeads[i]}'>
          ${myLeads[i]}
        </a>
      </li>`;
  }

  ulEl.innerHTML = listItems;
}
