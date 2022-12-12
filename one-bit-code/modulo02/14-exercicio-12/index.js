function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const expLabel = createLabel("Experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";

  const expRadio1 = createInput(
    "expRadio-" + rowIndex + ".1", // id
    "0-2 anos", // value
    "techExp-" + rowIndex, // name
    "radio" // type
  );
  const expLabel1 = createLabel("0-2 anos", "expRadio-" + rowIndex + ".1");

  newRow.append(techNameLabel, techNameInput);

  stackInputs.appendChild(newRow);
});
