myModal.hide();

function addNewName() {
  let inputValue = document.getElementsByClassName('form-control mr-sm-2"');
  let ulElement = document.getElementById("list-group");

  let newItem = document.createElement("li");
  newItem.innerText = inputValue.value;
  ulElement.appendChild(newItem);
  inputValue.value = "";
}
