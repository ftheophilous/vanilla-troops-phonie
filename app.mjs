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
  let anyNetwork = [mtnPattern, gloPattern, airtelPattern, etisalatPattern];

  const countryNames = document.querySelector("#country-names");
  const networkNames = document.querySelector("#network-name");
  const countryCode = document.querySelector("#country-code");
  const infoNotYet = document.querySelector(".info.not-yet");

  const COUNTRIES = [
    {
      name: "Afghanistan",
      mobileCode: "+93",
    },
    {
      name: "Åland Islands",
      mobileCode: "+358",
    },
    {
      name: "Albania",
      mobileCode: "+355",
    },
    {
      name: "Algeria",
      mobileCode: "+213",
    },
    {
      name: "American Samoa",
      mobileCode: "+1",
    },
    {
      name: "Andorra",
      mobileCode: "+376",
    },
    {
      name: "Angola",
      mobileCode: "+244",
    },
    {
      name: "Anguilla",
      mobileCode: "+1",
    },
    {
      name: "Antarctica",
      mobileCode: "+672",
    },
    {
      name: "Antigua and Barbuda",
      mobileCode: "+1",
    },
    {
      name: "Argentina",
      mobileCode: "+54",
    },
    {
      name: "Armenia",
      mobileCode: "+374",
    },
    {
      name: "Aruba",
      mobileCode: "+297",
    },
    {
      name: "Australia",
      mobileCode: "+61",
    },
    {
      name: "Austria",
      mobileCode: "+43",
    },
    {
      name: "Azerbaijan",
      mobileCode: "+994",
    },
    {
      name: "Bahrain",
      mobileCode: "+973",
    },
    {
      name: "Bangladesh",
      mobileCode: "+880",
    },
    {
      name: "Barbados",
      mobileCode: "+1",
    },
    {
      name: "Belarus",
      mobileCode: "+375",
    },
    {
      name: "Belgium",
      mobileCode: "+32",
    },
    {
      name: "Belize",
      mobileCode: "+501",
    },
    {
      name: "Benin",
      mobileCode: "+229",
    },
    {
      name: "Bermuda",
      mobileCode: "+1",
    },
    {
      name: "Bhutan",
      mobileCode: "+975",
    },
    {
      name: "Bolivarian Republic of Venezuela",
      mobileCode: "+58",
    },
    {
      name: "Bolivia",
      mobileCode: "+591",
    },
    {
      name: "Bonaire, Sint Eustatius and Saba",
      mobileCode: "+599",
    },
    {
      name: "Bosnia and Herzegovina",
      mobileCode: "+387",
    },
    {
      name: "Botswana",
      mobileCode: "+267",
    },
    {
      name: "Bouvet Island",
      mobileCode: "+47",
    },
    {
      name: "Brazil",
      mobileCode: "+55",
    },
    {
      name: "British Indian Ocean Territory",
      mobileCode: "+246",
    },
    {
      name: "Brunei",
      mobileCode: "+673",
    },
    {
      name: "Bulgaria",
      mobileCode: "+359",
    },
    {
      name: "Burkina Faso",
      mobileCode: "+226",
    },
    {
      name: "Burundi",
      mobileCode: "+257",
    },
    {
      name: "Cabo Verde",
      mobileCode: "+238",
    },
    {
      name: "Cambodia",
      mobileCode: "+855",
    },
    {
      name: "Cameroon",
      mobileCode: "+237",
    },
    {
      name: "Canada",
      mobileCode: "+1",
    },
    {
      name: "Cayman Islands",
      mobileCode: "+1",
    },
    {
      name: "Central African Republic",
      mobileCode: "+236",
    },
    {
      name: "Chad",
      mobileCode: "+235",
    },
    {
      name: "Chile",
      mobileCode: "+56",
    },
    {
      name: "China",
      mobileCode: "+86",
    },
    {
      name: "Christmas Island",
      mobileCode: "+61",
    },
    {
      name: "Cocos (Keeling) Islands",
      mobileCode: "+61",
    },
    {
      name: "Colombia",
      mobileCode: "+57",
    },
    {
      name: "Comoros",
      mobileCode: "+269",
    },
    {
      name: "Congo",
      mobileCode: "+242",
    },
    {
      name: "Congo (DRC)",
      mobileCode: "+243",
    },
    {
      name: "Cook Islands",
      mobileCode: "+682",
    },
    {
      name: "Costa Rica",
      mobileCode: "+506",
    },
    {
      name: "Côte d'Ivoire",
      mobileCode: "+225",
    },
    {
      name: "Croatia",
      mobileCode: "+385",
    },
    {
      name: "Cuba",
      mobileCode: "+53",
    },
    {
      name: "Curaçao",
      mobileCode: "+599",
    },
    {
      name: "Cyprus",
      mobileCode: "+357",
    },
    {
      name: "Czech Republic",
      mobileCode: "+420",
    },
    {
      name: "Democratic Republic of Timor-Leste",
      mobileCode: "+670",
    },
    {
      name: "Denmark",
      mobileCode: "+45",
    },
    {
      name: "Djibouti",
      mobileCode: "+253",
    },
    {
      name: "Dominica",
      mobileCode: "+1",
    },
    {
      name: "Dominican Republic",
      mobileCode: "+1",
    },
    {
      name: "Ecuador",
      mobileCode: "+593",
    },
    {
      name: "Egypt",
      mobileCode: "+20",
    },
    {
      name: "El Salvador",
      mobileCode: "+503",
    },
    {
      name: "Equatorial Guinea",
      mobileCode: "+240",
    },
    {
      name: "Eritrea",
      mobileCode: "+291",
    },
    {
      name: "Estonia",
      mobileCode: "+372",
    },
    {
      name: "Ethiopia",
      mobileCode: "+251",
    },
    {
      name: "Falkland Islands (Islas Malvinas)",
      mobileCode: "+500",
    },
    {
      name: "Faroe Islands",
      mobileCode: "+298",
    },
    {
      name: "Fiji Islands",
      mobileCode: "+679",
    },
    {
      name: "Finland",
      mobileCode: "+358",
    },
    {
      name: "France",
      mobileCode: "+33",
    },
    {
      name: "French Guiana",
      mobileCode: "+594",
    },
    {
      name: "French Polynesia",
      mobileCode: "+689",
    },
    {
      name: "French Southern and Antarctic Lands",
      mobileCode: "+590",
    },
    {
      name: "Gabon",
      mobileCode: "+241",
    },
    {
      name: "Gambia, The",
      mobileCode: "+220",
    },
    {
      name: "Georgia",
      mobileCode: "+995",
    },
    {
      name: "Germany",
      mobileCode: "+49",
    },
    {
      name: "Ghana",
      mobileCode: "+233",
    },
    {
      name: "Gibraltar",
      mobileCode: "+350",
    },
    {
      name: "Greece",
      mobileCode: "+30",
    },
    {
      name: "Greenland",
      mobileCode: "+299",
    },
    {
      name: "Grenada",
      mobileCode: "+1",
    },
    {
      name: "Guadeloupe",
      mobileCode: "+590",
    },
    {
      name: "Guam",
      mobileCode: "+1",
    },
    {
      name: "Guatemala",
      mobileCode: "+502",
    },
    {
      name: "Guernsey",
      mobileCode: "+44",
    },
    {
      name: "Guinea",
      mobileCode: "+224",
    },
    {
      name: "Guinea-Bissau",
      mobileCode: "+245",
    },
    {
      name: "Guyana",
      mobileCode: "+592",
    },
    {
      name: "Haiti",
      mobileCode: "+509",
    },
    {
      name: "Heard Island and McDonald Islands",
      mobileCode: "+672",
    },
    {
      name: "Honduras",
      mobileCode: "+504",
    },
    {
      name: "Hong Kong SAR",
      mobileCode: "+852",
    },
    {
      name: "Hungary",
      mobileCode: "+36",
    },
    {
      name: "Iceland",
      mobileCode: "+354",
    },
    {
      name: "India",
      mobileCode: "+91",
    },
    {
      name: "Indonesia",
      mobileCode: "+62",
    },
    {
      name: "Iran",
      mobileCode: "+98",
    },
    {
      name: "Iraq",
      mobileCode: "+964",
    },
    {
      name: "Ireland",
      mobileCode: "+353",
    },
    {
      name: "Israel",
      mobileCode: "+972",
    },
    {
      name: "Italy",
      mobileCode: "+39",
    },
    {
      name: "Jamaica",
      mobileCode: "+1",
    },
    {
      name: "Jan Mayen",
      mobileCode: "+47",
    },
    {
      name: "Japan",
      mobileCode: "+81",
    },
    {
      name: "Jersey",
      mobileCode: "+44",
    },
    {
      name: "Jordan",
      mobileCode: "+962",
    },
    {
      name: "Kazakhstan",
      mobileCode: "+7",
    },
    {
      name: "Kenya",
      mobileCode: "+254",
    },
    {
      name: "Kiribati",
      mobileCode: "+686",
    },
    {
      name: "Korea",
      mobileCode: "+82",
    },
    {
      name: "Kosovo",
      mobileCode: "+383",
    },
    {
      name: "Kuwait",
      mobileCode: "+965",
    },
    {
      name: "Kyrgyzstan",
      mobileCode: "+996",
    },
    {
      name: "Laos",
      mobileCode: "+856",
    },
    {
      name: "Latvia",
      mobileCode: "+371",
    },
    {
      name: "Lebanon",
      mobileCode: "+961",
    },
    {
      name: "Lesotho",
      mobileCode: "+266",
    },
    {
      name: "Liberia",
      mobileCode: "+231",
    },
    {
      name: "Libya",
      mobileCode: "+218",
    },
    {
      name: "Liechtenstein",
      mobileCode: "+423",
    },
    {
      name: "Lithuania",
      mobileCode: "+370",
    },
    {
      name: "Luxembourg",
      mobileCode: "+352",
    },
    {
      name: "Macao SAR",
      mobileCode: "+853",
    },
    {
      name: "Macedonia, Former Yugoslav Republic of",
      mobileCode: "+389",
    },
    {
      name: "Madagascar",
      mobileCode: "+261",
    },
    {
      name: "Malawi",
      mobileCode: "+265",
    },
    {
      name: "Malaysia",
      mobileCode: "+60",
    },
    {
      name: "Maldives",
      mobileCode: "+960",
    },
    {
      name: "Mali",
      mobileCode: "+223",
    },
    {
      name: "Malta",
      mobileCode: "+356",
    },
    {
      name: "Man, Isle of",
      mobileCode: "+44",
    },
    {
      name: "Marshall Islands",
      mobileCode: "+692",
    },
    {
      name: "Martinique",
      mobileCode: "+596",
    },
    {
      name: "Mauritania",
      mobileCode: "+222",
    },
    {
      name: "Mauritius",
      mobileCode: "+230",
    },
    {
      name: "Mayotte",
      mobileCode: "+262",
    },
    {
      name: "Mexico",
      mobileCode: "+52",
    },
    {
      name: "Micronesia",
      mobileCode: "+691",
    },
    {
      name: "Moldova",
      mobileCode: "+373",
    },
    {
      name: "Monaco",
      mobileCode: "+377",
    },
    {
      name: "Mongolia",
      mobileCode: "+976",
    },
    {
      name: "Montenegro",
      mobileCode: "+382",
    },
    {
      name: "Montserrat",
      mobileCode: "+1",
    },
    {
      name: "Morocco",
      mobileCode: "+212",
    },
    {
      name: "Mozambique",
      mobileCode: "+258",
    },
    {
      name: "Myanmar",
      mobileCode: "+95",
    },
    {
      name: "Namibia",
      mobileCode: "+264",
    },
    {
      name: "Nauru",
      mobileCode: "+674",
    },
    {
      name: "Nepal",
      mobileCode: "+977",
    },
    {
      name: "Netherlands",
      mobileCode: "+31",
    },
    {
      name: "New Caledonia",
      mobileCode: "+687",
    },
    {
      name: "New Zealand",
      mobileCode: "+64",
    },
    {
      name: "Nicaragua",
      mobileCode: "+505",
    },
    {
      name: "Niger",
      mobileCode: "+227",
    },
    {
      name: "Nigeria",
      mobileCode: "+234",
    },
    {
      name: "Niue",
      mobileCode: "+683",
    },
    {
      name: "Norfolk Island",
      mobileCode: "+672",
    },
    {
      name: "North Korea",
      mobileCode: "+850",
    },
    {
      name: "Northern Mariana Islands",
      mobileCode: "+1",
    },
    {
      name: "Norway",
      mobileCode: "+47",
    },
    {
      name: "Oman",
      mobileCode: "+968",
    },
    {
      name: "Pakistan",
      mobileCode: "+92",
    },
    {
      name: "Palau",
      mobileCode: "+680",
    },
    {
      name: "Palestinian Authority",
      mobileCode: "+970",
    },
    {
      name: "Panama",
      mobileCode: "+507",
    },
    {
      name: "Papua New Guinea",
      mobileCode: "+675",
    },
    {
      name: "Paraguay",
      mobileCode: "+595",
    },
    {
      name: "Peru",
      mobileCode: "+51",
    },
    {
      name: "Philippines",
      mobileCode: "+63",
    },
    {
      name: "Pitcairn Islands",
      mobileCode: "+870",
    },
    {
      name: "Poland",
      mobileCode: "+48",
    },
    {
      name: "Portugal",
      mobileCode: "+351",
    },
    {
      name: "Puerto Rico",
      mobileCode: "+1",
    },
    {
      name: "Qatar",
      mobileCode: "+974",
    },
    {
      name: "Reunion",
      mobileCode: "+262",
    },
    {
      name: "Romania",
      mobileCode: "+40",
    },
    {
      name: "Russia",
      mobileCode: "+7",
    },
    {
      name: "Rwanda",
      mobileCode: "+250",
    },
    {
      name: "Saint Barthélemy",
      mobileCode: "+590",
    },
    {
      name: "Saint Helena, Ascension and Tristan da Cunha",
      mobileCode: "+290",
    },
    {
      name: "Saint Kitts and Nevis",
      mobileCode: "+1",
    },
    {
      name: "Saint Lucia",
      mobileCode: "+1",
    },
    {
      name: "Saint Martin (French part)",
      mobileCode: "+590",
    },
    {
      name: "Saint Pierre and Miquelon",
      mobileCode: "+508",
    },
    {
      name: "Saint Vincent and the Grenadines",
      mobileCode: "+1",
    },
    {
      name: "Samoa",
      mobileCode: "+685",
    },
    {
      name: "San Marino",
      mobileCode: "+378",
    },
    {
      name: "São Tomé and Príncipe",
      mobileCode: "+239",
    },
    {
      name: "Saudi Arabia",
      mobileCode: "+966",
    },
    {
      name: "Senegal",
      mobileCode: "+221",
    },
    {
      name: "Serbia",
      mobileCode: "+381",
    },
    {
      name: "Seychelles",
      mobileCode: "+248",
    },
    {
      name: "Sierra Leone",
      mobileCode: "+232",
    },
    {
      name: "Singapore",
      mobileCode: "+65",
    },
    {
      name: "Sint Maarten (Dutch part)",
      mobileCode: "+599",
    },
    {
      name: "Slovakia",
      mobileCode: "+421",
    },
    {
      name: "Slovenia",
      mobileCode: "+386",
    },
    {
      name: "Solomon Islands",
      mobileCode: "+677",
    },
    {
      name: "Somalia",
      mobileCode: "+252",
    },
    {
      name: "South Africa",
      mobileCode: "+27",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      mobileCode: "+500",
    },
    {
      name: "South Sudan",
      mobileCode: "+211",
    },
    {
      name: "Spain",
      mobileCode: "+34",
    },
    {
      name: "Sri Lanka",
      mobileCode: "+94",
    },
    {
      name: "Sudan",
      mobileCode: "+249",
    },
    {
      name: "Suriname",
      mobileCode: "+597",
    },
    {
      name: "Svalbard",
      mobileCode: "+47",
    },
    {
      name: "Swaziland",
      mobileCode: "+268",
    },
    {
      name: "Sweden",
      mobileCode: "+46",
    },
    {
      name: "Switzerland",
      mobileCode: "+41",
    },
    {
      name: "Syria",
      mobileCode: "+963",
    },
    {
      name: "Taiwan",
      mobileCode: "+886",
    },
    {
      name: "Tajikistan",
      mobileCode: "+992",
    },
    {
      name: "Tanzania",
      mobileCode: "+255",
    },
    {
      name: "Thailand",
      mobileCode: "+66",
    },
    {
      name: "The Bahamas",
      mobileCode: "+1",
    },
    {
      name: "Togo",
      mobileCode: "+228",
    },
    {
      name: "Tokelau",
      mobileCode: "+690",
    },
    {
      name: "Tonga",
      mobileCode: "+676",
    },
    {
      name: "Trinidad and Tobago",
      mobileCode: "+1",
    },
    {
      name: "Tunisia",
      mobileCode: "+216",
    },
    {
      name: "Turkey",
      mobileCode: "+90",
    },
    {
      name: "Turkmenistan",
      mobileCode: "+993",
    },
    {
      name: "Turks and Caicos Islands",
      mobileCode: "+1",
    },
    {
      name: "Tuvalu",
      mobileCode: "+688",
    },
    {
      name: "U.S. Minor Outlying Islands",
      mobileCode: "+0",
    },
    {
      name: "Uganda",
      mobileCode: "+256",
    },
    {
      name: "Ukraine",
      mobileCode: "+380",
    },
    {
      name: "United Arab Emirates",
      mobileCode: "+971",
    },
    {
      name: "United Kingdom",
      mobileCode: "+44",
    },
    {
      name: "United States",
      mobileCode: "+1",
    },
    {
      name: "Uruguay",
      mobileCode: "+598",
    },
    {
      name: "Uzbekistan",
      mobileCode: "+998",
    },
    {
      name: "Vanuatu",
      mobileCode: "+678",
    },
    {
      name: "Vatican City",
      mobileCode: "+379",
    },
    {
      name: "Vietnam",
      mobileCode: "+84",
    },
    {
      name: "Virgin Islands, U.S.",
      mobileCode: "+1",
    },
    {
      name: "Virgin Islands, British",
      mobileCode: "+1",
    },
    {
      name: "Wallis and Futuna",
      mobileCode: "+681",
    },
    {
      name: "Yemen",
      mobileCode: "+967",
    },
    {
      name: "Zambia",
      mobileCode: "+260",
    },
    {
      name: "Zimbabwe",
      mobileCode: "+263",
    },
  ];

  createCountryOptions();

  let logo = document.getElementById("telcom_logo");

  //incase we change the countries, this checks if on returning back to the country name
  //the network name is always picked. If so, the number field is checked and the logo displays.
  let networkNameCheck = document.getElementById("network-name").name;

  let phoneNumberField = document.getElementById("phone_number");

  countryNames.addEventListener("change", (event) => {
    let code = event.target.value;
    countryCode.innerText = code;
    countryCode.style.display = "block";
    countryNames.style.boxShadow = "none";
    removeErrorMessage();

    //this is to check if the network field contains
    //a selected value on checking back from the country code.
    if (code === "+234") {
      //this makes sure the user has to select a network anytime they
      //pick Nigeria as their country
      networkNames.value = "choose";
      networkNames.addEventListener("change", nigerianNetwork);
      if (networkNameCheck) {
        logo.classList.add("active");
      }
      if (infoNotYet.classList.contains("active")) {
        infoNotYet.classList.remove("active");
      } else {
        infoNotYet.classList.add("active");
      }
      const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    if (networkNames.value === "choose") {
      networkNames.setCustomValidity("Select a valid network")
    }
    else {
      networkNames.setCustomValidity("");
    }
  });

    }
    else {
      infoNotYet.classList.remove("active");
      if (logo.classList.contains("active")) {
        logo.classList.remove("active");
      }
      networkNameCheck = undefined;
      networkNames.removeEventListener("change", nigerianNetwork);
    }
  });

  const box = document.getElementById("phone_number");
  const telcomLines = document.getElementById("telcom-lines");

  function nigerianNetwork(event) {
    let line = event.target.value;
    networkNames.style.boxShadow = "none";
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

    function getNetworkName(lineParameter) {
      let number = phoneNumberField.value;

      if (logo.classList.contains("active")) {
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
          }
          else if (isAirtel(number)) {
            phoneNumberField.pattern = airtelPattern;
            logo.src = "./sample-photos/airtel-logo-2.png";
            logo.alt = "AIRTEL logo";
            logo.classList.add("active");
            removeErrorMessage();
            return;
          }
          else if (isGlo(number)) {
            phoneNumberField.pattern = gloPattern;
            logo.src = "./sample-photos/glo-logo.png";
            logo.alt = "GLO logo";
            logo.classList.add("active");
            removeErrorMessage();
            return;
          }
          else if (isEtisalat(number)) {
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

    phoneNumberField.addEventListener("keyup", () => {
      if (networkNameCheck) {
        getNetworkName(line);
      }
      //to show that this event is only assigned and called when the network change event is first assigned
      //and called
    });

    //functions to check all the different telcom lines
    function isMtn(number) {
      let match = mtnRegex.test(number);
      if (match) {
        return true;
      }
      else {
        return false;
      }
    }

    function isGlo(number) {
      let match = gloRegex.test(number);
      if (match) {
        return true;
      }
      else {
        return false;
      }
    }

    function isAirtel(number) {
      let match = airtelRegex.test(number);
      if (match) {
        return true;
      }
      else {
        return false;
      }
    }

    function isEtisalat(number) {
      let match = etisalatRegex.test(number);
      if (match) {
        return true;
      }
      else {
        return false;
      }
    }

    box.addEventListener("invalid", (event) => {
      //We are passing the name of the phoneNumberField, which itself is obtained from
      //the value of the network element to the error message.
      let networkLine = event.target.name;
      event.preventDefault();
      if (!event.target.validity.valid) {
        error.innerText = `Enter a valid ${networkLine} line!`;
        error.style.display = "block";
        phoneNumberWrapper.classList.add("notify");
      }
      else {
        error.style.display = "none";
      }
    });
  }

  let phoneNumberWrapper = document.querySelector(".phone_number_wrapper");
  let error = document.getElementById("error");

  box.addEventListener("input", (event) => {
    removeErrorMessage();
  });

  function removeErrorMessage() {
    if (phoneNumberWrapper.classList.contains("notify")) {
      phoneNumberWrapper.classList.remove("notify");
    }
    if (error.style.display === "block") {
      error.style.display = "none";
    }
  }

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
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    if (countryNames.value === "") {
      countryNames.setCustomValidity("Please select your country");
      countryNames.style.boxShadow = "0px 0px 4px 1px red";
    }
    else {
      countryNames.setCustomValidity("");
    }
  });
}
// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
