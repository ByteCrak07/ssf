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

//startup

const startup_form = document.getElementById("startup_form");
if (startup_form) {
  startup_form.addEventListener("submit", ambassadorFormSubmit);

  function ambassadorFormSubmit(e) {
    e.preventDefault();
    const submitBtn = startup_form.getElementsByTagName("button")[0];
    submitBtn.disabled = true;

    const inputs = startup_form.getElementsByTagName("input");

    var data = {};

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type !== "checkbox") data[inputs[i].name] = inputs[i].value;
      else data[inputs[i].name] = inputs[i].checked;
    }

    console.log(data);

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
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/startup_reg.json",
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

//ARCHATHON FORM
const archathonForm = document.getElementById("archathon_form");
if (archathonForm) {
  archathonForm.addEventListener("submit", archathonFormSubmit);

  function archathonFormSubmit(e) {
    e.preventDefault();
    const submitBtn = archathonForm.getElementsByTagName("button")[0];
    submitBtn.disabled = true;

    const inputs = archathonForm.getElementsByTagName("input");

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
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/archathon.json",
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


//PROJECT-EXPO-STARTUP FORM
const projectExpoStartupForm = document.getElementById("projectExpoStartup_form");
if (projectExpoStartupForm) {
  projectExpoStartupForm.addEventListener("submit", projectExpoStartupFormSubmit);

  function projectExpoStartupFormSubmit(e) {
    e.preventDefault();
    const submitBtn = projectExpoStartupForm.getElementsByTagName("button")[0];
    submitBtn.disabled = true;

    const inputs = projectExpoStartupForm.getElementsByTagName("input");

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
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/projectExpoStartup.json",
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

//PROJECT-EXPO-STUDENT FORM
const projectExpoStudentForm = document.getElementById("projectExpoStudent_form");
if (projectExpoStudentForm) {
  projectExpoStudentForm.addEventListener("submit", projectExpoStudentFormSubmit);

  function projectExpoStudentFormSubmit(e) {
    e.preventDefault();
    const submitBtn = projectExpoStudentForm.getElementsByTagName("button")[0];
    submitBtn.disabled = true;

    const inputs = projectExpoStudentForm.getElementsByTagName("input");

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
      "https://summer-startup-festival-default-rtdb.asia-southeast1.firebasedatabase.app/projectExpoStudent.json",
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