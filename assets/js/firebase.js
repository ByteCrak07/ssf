const form = document.getElementById("event_form");
if (form) {
  form.addEventListener("submit", formSubmit);

  function formSubmit(e) {
    e.preventDefault();

    const inputs = form.getElementsByTagName("input");

    var data = {};

    for (var i = 0; i < inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    //   fetch(
    //     "https://hook.eu1.make.com/bhsxp34m1aeg1iicyyo7lqdkdm393nhn/",
    //     requestOptions
    //   )
    //     .then(function (response) {
    //       response.text();
    //     })
    //     .then(function (result) {
    //       console.log(result);
    //     })
    //     .catch(function (error) {
    //       console.log("error", error);
    //     });

    data["time"] = { ".sv": "timestamp" };

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/chosen_sub.json",
      requestOptions
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (result) {
        document.getElementById("form_success").classList.remove("sr-only");
      })
      .catch(function (error) {
        document.getElementById("form_error").classList.remove("sr-only");
      });
  }
}

// Campus ambassador form
const ambassadorForm = document.getElementById("ambassador_form");
if (ambassadorForm) {
  ambassadorForm.addEventListener("submit", ambassadorFormSubmit);

  function ambassadorFormSubmit(e) {
    e.preventDefault();

    const inputs = ambassadorForm.getElementsByTagName("input");

    var data = {};

    for (var i = 0; i < inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    data["time"] = { ".sv": "timestamp" };

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/campus_ambassador.json",
      requestOptions
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (result) {
        document.getElementById("form_success").classList.remove("sr-only");
      })
      .catch(function (error) {
        document.getElementById("form_error").classList.remove("sr-only");
      });
  }
}
