const submitForm = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const selectpackage = document.getElementById(
    "identifier-for-select_package"
  ).value;
  const date = document.getElementById("date").value;
  const persons = document.getElementById("identifier-for-persons").value;
  const discount = document.getElementById("discount").value;

  if (!name || !email || !selectpackage || !date || !persons) {
    alert("porfavor llena todos los campos");
    return;
  }

  // userName - Camel case
  // user_name - Snake case

  const travelInfo = {
    user_name: name,
    user_email: email,
    user_selected_package: selectpackage.value,
    user_date: date,
    user_persons: persons,
    user_discount: discount,
  };

  console.log(travelInfo);
};
