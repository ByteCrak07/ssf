// Campus ambassador form
const ambassadorForm = document.getElementById("ambassador_form");
if (ambassadorForm) {
  ambassadorForm.addEventListener("submit", ambassadorFormSubmit);

  function ambassadorFormSubmit(e) {
    e.preventDefault();
    const submitBtn = ambassadorForm.getElementsByTagName("button")[0];
    submitBtn.disabled = true;

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
        submitBtn.disabled = false;
        document.getElementById("form_error").classList.remove("sr-only");
      });
  }
}

// Adorn form
const adornForm = document.getElementById("adorn_form");
if (adornForm) {
  adornForm.addEventListener("submit", adornFormSubmit);

  function adornFormSubmit(e) {
    e.preventDefault();
    const submitBtn = adornForm.getElementsByTagName("button")[0];
    submitBtn.disabled = true;

    const inputs = adornForm.getElementsByTagName("input");
    const textAreas = adornForm.getElementsByTagName("textarea");

    var data = {};

    for (var i = 0; i < inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value;
    }

    for (var i = 0; i < inputs.length; i++) {
      if (textAreas[i]) data[textAreas[i].name] = textAreas[i].value;
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
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/adorn.json",
      requestOptions
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (result) {
        document.getElementById("form_success").classList.remove("sr-only");
      })
      .catch(function (error) {
        submitBtn.disabled = false;
        document.getElementById("form_error").classList.remove("sr-only");
      });
  }
}
