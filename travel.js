const submitForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const selectpackage = document.getElementById("identifier-for-select_package").value
    const date = document.getElementById("date").value
    const persons = document.getElementById("identifier-for-persons").value
    const discount = document.getElementById("discount").value

    if (!name || !email || !selectpackage || !date || !persons) {
        alert("porfavor llena todos los campos")
        return;
    }

    const travelinfo = {
        userName: name,
        userEmail: email,
        userSelectPackage: selectpackage,
        userDate: date,
        userPersons: persons,
        userDiscount: discount,
    }
    console.log(travelinfo)


}