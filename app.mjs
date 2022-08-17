import COUNTRIES from "./country-list.mjs";
function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const mtnPrefixArray = [
    702, 703, 704, 706, 803, 806, 810, 813, 814, 816, 903, 906, 913, 916,
  ];
  const gloPrefixArray = [705, 805, 807, 811, 815, 905, 915];
  const airtelPrefixArray = [701, 708, 802, 808, 812, 901, 902, 904, 907, 912];
  const etisalatPrefixArray = [809, 817, 818, 908, 909];

  const allPrefixes = mtnPrefixArray.concat(
    gloPrefixArray,
    airtelPrefixArray,
    etisalatPrefixArray
  );

  let mtnRegex =
    /^(70[2|3|4|6])\d{7}$|^([8|9]0[3|6])\d{7}$|^(81[0|3|4|6])\d{7}$|^(91[3|6])\d{7}$/;
  let gloRegex =
    /^(705)\d{7}$|^(80[5|7])\d{7}$|(81[1|5])\d{7}$|^(9[0|1]5)\d{7}$/;
  let airtelRegex =
    /^(70[18])[0-9]{7}$|^(80[28])[0-9]{7}$|^([89]12)[0-9]{7}$|^(90[1247])[0-9]{7}$/;
  let etisalatRegex = /^(809)\d{7}$|^(81[7|8])\d{7}$|^(90[8|9])\d{7}$/;

  let mtnPattern =
    "[7][0][2|3|4|6][0-9]{7}|[8|9][0][3|6][0-9]{7}|[8][1][0|3|4|6][0-9]{7}|[9][1][3|6][0-9]{7}";
  let gloPattern =
    "[7][0][5][0-9]{7}|[8][0][5|7][0-9]{7}|[8][1][1|5][0-9]{7}|[9][0|1][5][0-9]{7}";
  let airtelPattern =
    "[7][0][1|8][0-9]{7}|[8][0][2|8][0-9]{7}|[8|9][1][2][0-9]{7}|[9][0][1|2|4|7][0-9]{7}";
  let etisalatPattern =
    "[8][0][9][0-9]{7}|[8][1][7|8][0-9]{7}|[9][0][8|9][0-9]{7}";

  const countryNames = document.querySelector("#country-names");
  const networkNames = document.querySelector("#network-name");
  const countryCode = document.querySelector("#country-code");
  const infoNotYet = document.querySelector(".info.not-yet");
  const telcomLines = document.getElementById("telcom-lines");
  const phoneNumberWrapper = document.querySelector(".phone_number_wrapper");
  const error = document.getElementById("error");
  const logo = document.getElementById("telcom_logo");


  //This variable ensures that when you come back to choose Nigeria as your country,
  //you must re-choose a network again before the logo can be displayed
  let networkNameCheck = document.getElementById("network-name").name;
  const phoneNumberField = document.getElementById("phone_number");
  const submit = document.querySelector("#submit");

  createCountryOptions();

  countryNames.addEventListener("change", (event) => {
    countryNames.style.boxShadow = "none";
    let code = event.target.value;
    countryCode.innerText = code;
    countryCode.style.display = "block";
    removeErrorMessage();
    logo.style.opacity = "0";
    if (code === "+234") {
      
      networkNames.value = "pending"; //this automatically focuses on the first option "Select a network";
      networkNames.addEventListener("change", nigerianNetwork);

      if (networkNameCheck) {
        logo.classList.add("active");
      }
      infoNotYet.classList.add("active");
      networkNames.style.display = "block";
      networkNames.required = true;
      if (networkNames.classList.contains("notify")) {
        networkNames.classList.remove("notify");
      }

    } else {
      infoNotYet.classList.remove("active");
      networkNames.style.display = "none";
      networkNames.required = false;
      if (logo.classList.contains("active")) {
        logo.classList.remove("active");
      }
      //the name of the network field is reset so that users choose a network before the
      //logo displays
      networkNameCheck = undefined;
      networkNames.removeEventListener("change", nigerianNetwork);
      phoneNumberField.removeEventListener("invalid", addErrorMessage);
      phoneNumberField.removeAttribute("pattern");
      removeSuggestionList();
      removeErrorMessage();
    }
  });

  function nigerianNetwork(event) {
    removeLogo();
    networkNames.required = false;
    if (networkNames.classList.contains("notify")) {
      networkNames.classList.remove("notify");
    }

    let line = event.target.value;
    switch (line) {
      case "Mtn":
        phoneNumberField.pattern = mtnPattern;
        createSuggestionLIst(mtnPrefixArray);
        //At this first instance of calling the function, it does not display any logo cos the phoneNumberField is
        //empty
        //this function is called here so that when the user changes the network name, the form is smart enough
        //recognize this and checks the network name i.e.line that it was changed to against the number in the input field from the
        //getNetworkName function
        getNetworkName(line);
        break;

      case "Airtel":
        phoneNumberField.pattern = airtelPattern;
        createSuggestionLIst(airtelPrefixArray);
        getNetworkName(line);
        break;

      case "Glo":
        phoneNumberField.pattern = gloPattern;
        createSuggestionLIst(gloPrefixArray);
        getNetworkName(line);
        break;

      case "9mobile":
        phoneNumberField.pattern = etisalatPattern;
        createSuggestionLIst(etisalatPrefixArray);
        getNetworkName(line);
        break;

      case "Any":
        createSuggestionLIst(allPrefixes);
        getNetworkName(line);
        //It checks the number in the input field and matches them to all the avalable regex
        //However, this doesn't matches anything the first time around, but matches something
        //ones the input field has been propagated;
        break;
    }

    // === END OF getNetworkName function === //

    phoneNumberField.addEventListener("keyup", () => {
      //this ensures that a network is always picked before this event is
      //activated even after re-choosing Nigeria as your country
      if (networkNameCheck) {
        getNetworkName(line);
      }
    });
    phoneNumberField.addEventListener("invalid", addErrorMessage);
  }

  // === END OF nigerianNetwork function === //

  phoneNumberField.addEventListener("input", removeErrorMessage);
  submit.addEventListener("click", validateNetworkName);
  submit.addEventListener("click", validateCountryName);
  const form = document.querySelector("#form");
  //this allows the phone number field wrapper to be focusable
  for (let child of form) {
    child.onfocus = () => {
      if (child === phoneNumberField) {
        phoneNumberWrapper.style.boxShadow = "0px 0px 4px 1px blue";
        phoneNumberWrapper.style.transition = "1s";
      }
      else {
        phoneNumberWrapper.style.boxShadow = "";
        phoneNumberWrapper.style.transition = "";
      }
    }
  }

  function isMtn(number) {
    let match = mtnRegex.test(number);
    if (match) {
      return true;
    } else {
      return false;
    }
  }

  function isGlo(number) {
    let match = gloRegex.test(number);
    if (match) {
      return true;
    } else {
      return false;
    }
  }

  function isAirtel(number) {
    let match = airtelRegex.test(number);
    if (match) {
      return true;
    } else {
      return false;
    }
  }

  function isEtisalat(number) {
    let match = etisalatRegex.test(number);
    if (match) {
      return true;
    } else {
      return false;
    }
  }

  //functions to help validate the form
  function addErrorMessage(event) {
    let networkLine = event.target.name;
    event.preventDefault();
    if (!event.target.validity.valid) {
      error.innerText = `Enter a valid ${networkLine} line!`;
      error.style.display = "block";
      phoneNumberWrapper.classList.add("notify");
      if (!logo.classList.contains("active")) {
        logo.style.opacity = "1";
        logo.src = "./sample-photos/invalid-logo.jpg";
        logo.alt = "logo indicating INVALID NUMBER";
        
      }
    } else {
      error.style.display = "none";
    }
  }

  function validateNetworkName() {
    if (networkNames.style.display === "block" && networkNames.required === true) {
        networkNames.setCustomValidity("Please select a network");
        networkNames.classList.add("notify");
    } else {
        if (networkNames.classList.contains("notify")) {
          networkNames.classList.remove("notify");
        }
        networkNames.setCustomValidity("");
    }
  }

  function validateCountryName() {
    if (countryNames.value === "") {
      countryNames.setCustomValidity("Please select your country");
      countryNames.style.boxShadow = "0px 0px 4px 1px red";
    } else {
      countryNames.setCustomValidity("");
    }
  }

  function removeErrorMessage() {
    if (phoneNumberWrapper.classList.contains("notify")) {
      phoneNumberWrapper.classList.remove("notify");
    }
    if (error.style.display === "block") {
      error.style.display = "none";
    }
  }

  //functions to help dynamically create the different lists in the form
  function createCountryOptions() {
    for (let i = 0; i < COUNTRIES.length; i++) {
      const option1 = document.createElement("option");
      option1.value = COUNTRIES[i].mobileCode;
      option1.innerText = COUNTRIES[i].name;
      countryNames.appendChild(option1);
    }
  }

  function createSuggestionLIst(networkPrefix) {
    if (telcomLines.hasChildNodes()) {
      telcomLines.innerHTML = "";
    }
    for (let i = 0; i < networkPrefix.length; i++) {
      const optionTag = document.createElement("option");
      optionTag.value = networkPrefix[i];
      telcomLines.appendChild(optionTag);
    }
  }

  function removeSuggestionList() {
    if (telcomLines.hasChildNodes()) {
      telcomLines.innerHTML = "";
    }
  }
  function removeLogo() {
    logo.src = "";
    logo.style.opacity = "0";
    logo.alt = "";
  }

  function getNetworkName(lineParameter) {
    let number = phoneNumberField.value;

    if (logo.classList.contains("active")) {
      logo.style.opacity = "0";
      logo.src = "";
      logo.classList.remove("active");
    }

    switch (lineParameter) {
      case "Mtn":
        //to pass to the invalid event
        phoneNumberField.name = "Mtn";

        //we use this in assigning the expected network name (check back on networkNameCheck variable definition)
        networkNameCheck = "Mtn";
        if (isMtn(number)) {
          logo.src = "./sample-photos/mtn-logo-2.jpg";
          logo.alt = "MTN logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        }
        break;

      case "Airtel":
        phoneNumberField.name = "Airtel";
        networkNameCheck = "Airtel";
        if (isAirtel(number)) {
          logo.src = "./sample-photos/airtel-logo-2.png";
          logo.alt = "AIRTEL logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        }
        break;

      case "Glo":
        phoneNumberField.name = "Glo";
        networkNameCheck = "Glo";
        if (isGlo(number)) {
          logo.src = "./sample-photos/glo-logo.png";
          logo.alt = "GLO logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        }
        break;

      case "9mobile":
        phoneNumberField.name = "9mobile";
        networkNameCheck = "9mobile";
        if (isEtisalat(number)) {
          logo.src = "./sample-photos/etisalat-logo.jpg";
          logo.alt = "ETISALAT logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        }
        break;

      case "Any":
        phoneNumberField.name = "";
        networkNameCheck = "Any";

        //This makes sure the phoneNumberField matches the expeceted line
        //The input value is made to match an empty field until a valid number
        //is inputted. However, if the field matches the pattern, which is an empty field,
        //the required attribute signals that the field must not be left empty.

        phoneNumberField.pattern = "";
        if (isMtn(number)) {
          phoneNumberField.pattern = mtnPattern;
          logo.src = "./sample-photos/mtn-logo-2.jpg";
          logo.alt = "MTN logo";
          logo.classList.add("active");
          //Aoart from typing into the input field,
          //this helps to remove error message even even when we pick a
          //network that matches the number the respective number.
          removeErrorMessage();
          return;
        } else if (isAirtel(number)) {
          phoneNumberField.pattern = airtelPattern;
          logo.src = "./sample-photos/airtel-logo-2.png";
          logo.alt = "AIRTEL logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        } else if (isGlo(number)) {
          phoneNumberField.pattern = gloPattern;
          logo.src = "./sample-photos/glo-logo.png";
          logo.alt = "GLO logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        } else if (isEtisalat(number)) {
          phoneNumberField.pattern = etisalatPattern;
          logo.src = "./sample-photos/etisalat-logo.jpg";
          logo.alt = "ETISALAT logo";
          logo.classList.add("active");
          removeErrorMessage();
          return;
        }
        break;

      default:
        console.log("not a network");
    }
  }
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
