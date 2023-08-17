var someForm = document.forms.someForm;
var message = document.getElementById("message");
// call on console
// someForm.name.value;
// someForm.color.value;
// someForm.color.value = "purple";

someForm.name.onfocus = function () {
  someForm.name.style.border = "4px solid pink";
};

someForm.name.onblur = function () {
  someForm.name.style.border = "none";
};

someForm.onsubmit = function () {
  if (someForm.name.value === "") {
    message.innerHTML = "Please enter a name";
    return false;
  } else {
    message.innerHTML = "";
    return true;
  }
};
