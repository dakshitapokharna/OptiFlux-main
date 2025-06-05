import React, { useState, useRef } from "react";
import "./ContactForm.css";


const countryCodes = [
{
"name": "Afghanistan",
"code": "+93",
"n": "AF"
},
{
"name": "Aland Islands",
"code": "+358",
"n": "AX"
},
{
"name": "Albania",
"code": "+355",
"n": "AL"
},
{
"name": "Algeria",
"code": "+213",
"n": "DZ"
},
{
"name": "AmericanSamoa",
"code": "+1684",
"n": "AS"
},
{
"name": "Andorra",
"code": "+376",
"n": "AD"
},
{
"name": "Angola",
"code": "+244",
"n": "AO"
},
{
"name": "Anguilla",
"code": "+1264",
"n": "AI"
},
{
"name": "Antarctica",
"code": "+672",
"n": "AQ"
},
{
"name": "Antigua and Barbuda",
"code": "+1268",
"n": "AG"
},
{
"name": "Argentina",
"code": "+54",
"n": "AR"
},
{
"name": "Armenia",
"code": "+374",
"n": "AM"
},
{
"name": "Aruba",
"code": "+297",
"n": "AW"
},
{
"name": "Australia",
"code": "+61",
"n": "AU"
},
{
"name": "Austria",
"code": "+43",
"n": "AT"
},
{
"name": "Azerbaijan",
"code": "+994",
"n": "AZ"
},
{
"name": "Bahamas",
"code": "+1242",
"n": "BS"
},
{
"name": "Bahrain",
"code": "+973",
"n": "BH"
},
{
"name": "Bangladesh",
"code": "+880",
"n": "BD"
},
{
"name": "Barbados",
"code": "+1246",
"n": "BB"
},
{
"name": "Belarus",
"code": "+375",
"n": "BY"
},
{
"name": "Belgium",
"code": "+32",
"n": "BE"
},
{
"name": "Belize",
"code": "+501",
"n": "BZ"
},
{
"name": "Benin",
"code": "+229",
"n": "BJ"
},
{
"name": "Bermuda",
"code": "+1441",
"n": "BM"
},
{
"name": "Bhutan",
"code": "+975",
"n": "BT"
},
{
"name": "Bolivia, Plurinational State of",
"code": "+591",
"n": "BO"
},
{
"name": "Bosnia and Herzegovina",
"code": "+387",
"n": "BA"
},
{
"name": "Botswana",
"code": "+267",
"n": "BW"
},
{
"name": "Brazil",
"code": "+55",
"n": "BR"
},
{
"name": "British Indian Ocean Territory",
"code": "+246",
"n": "IO"
},
{
"name": "Brunei Darussalam",
"code": "+673",
"n": "BN"
},
{
"name": "Bulgaria",
"code": "+359",
"n": "BG"
},
{
"name": "Burkina Faso",
"code": "+226",
"n": "BF"
},
{
"name": "Burundi",
"code": "+257",
"n": "BI"
},
{
"name": "Cambodia",
"code": "+855",
"n": "KH"
},
{
"name": "Cameroon",
"code": "+237",
"n": "CM"
},
{
"name": "Canada",
"code": "+1",
"n": "CA"
},
{
"name": "Cape Verde",
"code": "+238",
"n": "CV"
},
{
"name": "Cayman Islands",
"code": "+ 345",
"n": "KY"
},
{
"name": "Central African Republic",
"code": "+236",
"n": "CF"
},
{
"name": "Chad",
"code": "+235",
"n": "TD"
},
{
"name": "Chile",
"code": "+56",
"n": "CL"
},
{
"name": "China",
"code": "+86",
"n": "CN"
},
{
"name": "Christmas Island",
"code": "+61",
"n": "CX"
},
{
"name": "Cocos (Keeling) Islands",
"code": "+61",
"n": "CC"
},
{
"name": "Colombia",
"code": "+57",
"n": "CO"
},
{
"name": "Comoros",
"code": "+269",
"n": "KM"
},
{
"name": "Congo",
"code": "+242",
"n": "CG"
},
{
"name": "Congo, The Democratic Republic of the Congo",
"code": "+243",
"n": "CD"
},
{
"name": "Cook Islands",
"code": "+682",
"n": "CK"
},
{
"name": "Costa Rica",
"code": "+506",
"n": "CR"
},
{
"name": "Cote d'Ivoire",
"code": "+225",
"n": "CI"
},
{
"name": "Croatia",
"code": "+385",
"n": "HR"
},
{
"name": "Cuba",
"code": "+53",
"n": "CU"
},
{
"name": "Cyprus",
"code": "+357",
"n": "CY"
},
{
"name": "Czech Republic",
"code": "+420",
"n": "CZ"
},
{
"name": "Denmark",
"code": "+45",
"n": "DK"
},
{
"name": "Djibouti",
"code": "+253",
"n": "DJ"
},
{
"name": "Dominica",
"code": "+1767",
"n": "DM"
},
{
"name": "Dominican Republic",
"code": "+1849",
"n": "DO"
},
{
"name": "Ecuador",
"code": "+593",
"n": "EC"
},
{
"name": "Egypt",
"code": "+20",
"n": "EG"
},
{
"name": "El Salvador",
"code": "+503",
"n": "SV"
},
{
"name": "Equatorial Guinea",
"code": "+240",
"n": "GQ"
},
{
"name": "Eritrea",
"code": "+291",
"n": "ER"
},
{
"name": "Estonia",
"code": "+372",
"n": "EE"
},
{
"name": "Ethiopia",
"code": "+251",
"n": "ET"
},
{
"name": "Falkland Islands (Malvinas)",
"code": "+500",
"n": "FK"
},
{
"name": "Faroe Islands",
"code": "+298",
"n": "FO"
},
{
"name": "Fiji",
"code": "+679",
"n": "FJ"
},
{
"name": "Finland",
"code": "+358",
"n": "FI"
},
{
"name": "France",
"code": "+33",
"n": "FR"
},
{
"name": "French Guiana",
"code": "+594",
"n": "GF"
},
{
"name": "French Polynesia",
"code": "+689",
"n": "PF"
},
{
"name": "Gabon",
"code": "+241",
"n": "GA"
},
{
"name": "Gambia",
"code": "+220",
"n": "GM"
},
{
"name": "Georgia",
"code": "+995",
"n": "GE"
},
{
"name": "Germany",
"code": "+49",
"n": "DE"
},
{
"name": "Ghana",
"code": "+233",
"n": "GH"
},
{
"name": "Gibraltar",
"code": "+350",
"n": "GI"
},
{
"name": "Greece",
"code": "+30",
"n": "GR"
},
{
"name": "Greenland",
"code": "+299",
"n": "GL"
},
{
"name": "Grenada",
"code": "+1473",
"n": "GD"
},
{
"name": "Guadeloupe",
"code": "+590",
"n": "GP"
},
{
"name": "Guam",
"code": "+1671",
"n": "GU"
},
{
"name": "Guatemala",
"code": "+502",
"n": "GT"
},
{
"name": "Guernsey",
"code": "+44",
"n": "GG"
},
{
"name": "Guinea",
"code": "+224",
"n": "GN"
},
{
"name": "Guinea-Bissau",
"code": "+245",
"n": "GW"
},
{
"name": "Guyana",
"code": "+595",
"n": "GY"
},
{
"name": "Haiti",
"code": "+509",
"n": "HT"
},
{
"name": "Holy See (Vatican City State)",
"code": "+379",
"n": "VA"
},
{
"name": "Honduras",
"code": "+504",
"n": "HN"
},
{
"name": "Hong Kong",
"code": "+852",
"n": "HK"
},
{
"name": "Hungary",
"code": "+36",
"n": "HU"
},
{
"name": "Iceland",
"code": "+354",
"n": "IS"
},
{
"name": "India",
"code": "+91",
"n": "IN"
},
{
"name": "Indonesia",
"code": "+62",
"n": "ID"
},
{
"name": "Iran, Islamic Republic of Persian Gulf",
"code": "+98",
"n": "IR"
},
{
"name": "Iraq",
"code": "+964",
"n": "IQ"
},
{
"name": "Ireland",
"code": "+353",
"n": "IE"
},
{
"name": "Isle of Man",
"code": "+44",
"n": "IM"
},
{
"name": "Israel",
"code": "+972",
"n": "IL"
},
{
"name": "Italy",
"code": "+39",
"n": "IT"
},
{
"name": "Jamaica",
"code": "+1876",
"n": "JM"
},
{
"name": "Japan",
"code": "+81",
"n": "JP"
},
{
"name": "Jersey",
"code": "+44",
"n": "JE"
},
{
"name": "Jordan",
"code": "+962",
"n": "JO"
},
{
"name": "Kazakhstan",
"code": "+77",
"n": "KZ"
},
{
"name": "Kenya",
"code": "+254",
"n": "KE"
},
{
"name": "Kiribati",
"code": "+686",
"n": "KI"
},
{
"name": "Korea, Democratic People's Republic of Korea",
"code": "+850",
"n": "KP"
},
{
"name": "Korea, Republic of South Korea",
"code": "+82",
"n": "KR"
},
{
"name": "Kuwait",
"code": "+965",
"n": "KW"
},
{
"name": "Kyrgyzstan",
"code": "+996",
"n": "KG"
},
{
"name": "Laos",
"code": "+856",
"n": "LA"
},
{
"name": "Latvia",
"code": "+371",
"n": "LV"
},
{
"name": "Lebanon",
"code": "+961",
"n": "LB"
},
{
"name": "Lesotho",
"code": "+266",
"n": "LS"
},
{
"name": "Liberia",
"code": "+231",
"n": "LR"
},
{
"name": "Libyan Arab Jamahiriya",
"code": "+218",
"n": "LY"
},
{
"name": "Liechtenstein",
"code": "+423",
"n": "LI"
},
{
"name": "Lithuania",
"code": "+370",
"n": "LT"
},
{
"name": "Luxembourg",
"code": "+352",
"n": "LU"
},
{
"name": "Macao",
"code": "+853",
"n": "MO"
},
{
"name": "Macedonia",
"code": "+389",
"n": "MK"
},
{
"name": "Madagascar",
"code": "+261",
"n": "MG"
},
{
"name": "Malawi",
"code": "+265",
"n": "MW"
},
{
"name": "Malaysia",
"code": "+60",
"n": "MY"
},
{
"name": "Maldives",
"code": "+960",
"n": "MV"
},
{
"name": "Mali",
"code": "+223",
"n": "ML"
},
{
"name": "Malta",
"code": "+356",
"n": "MT"
},
{
"name": "Marshall Islands",
"code": "+692",
"n": "MH"
},
{
"name": "Martinique",
"code": "+596",
"n": "MQ"
},
{
"name": "Mauritania",
"code": "+222",
"n": "MR"
},
{
"name": "Mauritius",
"code": "+230",
"n": "MU"
},
{
"name": "Mayotte",
"code": "+262",
"n": "YT"
},
{
"name": "Mexico",
"code": "+52",
"n": "MX"
},
{
"name": "Micronesia, Federated States of Micronesia",
"code": "+691",
"n": "FM"
},
{
"name": "Moldova",
"code": "+373",
"n": "MD"
},
{
"name": "Monaco",
"code": "+377",
"n": "MC"
},
{
"name": "Mongolia",
"code": "+976",
"n": "MN"
},
{
"name": "Montenegro",
"code": "+382",
"n": "ME"
},
{
"name": "Montserrat",
"code": "+1664",
"n": "MS"
},
{
"name": "Morocco",
"code": "+212",
"n": "MA"
},
{
"name": "Mozambique",
"code": "+258",
"n": "MZ"
},
{
"name": "Myanmar",
"code": "+95",
"n": "MM"
},
{
"name": "Namibia",
"code": "+264",
"n": "NA"
},
{
"name": "Nauru",
"code": "+674",
"n": "NR"
},
{
"name": "Nepal",
"code": "+977",
"n": "NP"
},
{
"name": "Netherlands",
"code": "+31",
"n": "NL"
},
{
"name": "Netherlands Antilles",
"code": "+599",
"n": "AN"
},
{
"name": "New Caledonia",
"code": "+687",
"n": "NC"
},
{
"name": "New Zealand",
"code": "+64",
"n": "NZ"
},
{
"name": "Nicaragua",
"code": "+505",
"n": "NI"
},
{
"name": "Niger",
"code": "+227",
"n": "NE"
},
{
"name": "Nigeria",
"code": "+234",
"n": "NG"
},
{
"name": "Niue",
"code": "+683",
"n": "NU"
},
{
"name": "Norfolk Island",
"code": "+672",
"n": "NF"
},
{
"name": "Northern Mariana Islands",
"code": "+1670",
"n": "MP"
},
{
"name": "Norway",
"code": "+47",
"n": "NO"
},
{
"name": "Oman",
"code": "+968",
"n": "OM"
},
{
"name": "Pakistan",
"code": "+92",
"n": "PK"
},
{
"name": "Palau",
"code": "+680",
"n": "PW"
},
{
"name": "Palestinian Territory, Occupied",
"code": "+970",
"n": "PS"
},
{
"name": "Panama",
"code": "+507",
"n": "PA"
},
{
"name": "Papua New Guinea",
"code": "+675",
"n": "PG"
},
{
"name": "Paraguay",
"code": "+595",
"n": "PY"
},
{
"name": "Peru",
"code": "+51",
"n": "PE"
},
{
"name": "Philippines",
"code": "+63",
"n": "PH"
},
{
"name": "Pitcairn",
"code": "+872",
"n": "PN"
},
{
"name": "Poland",
"code": "+48",
"n": "PL"
},
{
"name": "Portugal",
"code": "+351",
"n": "PT"
},
{
"name": "Puerto Rico",
"code": "+1939",
"n": "PR"
},
{
"name": "Qatar",
"code": "+974",
"n": "QA"
},
{
"name": "Romania",
"code": "+40",
"n": "RO"
},
{
"name": "Russia",
"code": "+7",
"n": "RU"
},
{
"name": "Rwanda",
"code": "+250",
"n": "RW"
},
{
"name": "Reunion",
"code": "+262",
"n": "RE"
},
{
"name": "Saint Barthelemy",
"code": "+590",
"n": "BL"
},
{
"name": "Saint Helena, Ascension and Tristan Da Cunha",
"code": "+290",
"n": "SH"
},
{
"name": "Saint Kitts and Nevis",
"code": "+1869",
"n": "KN"
},
{
"name": "Saint Lucia",
"code": "+1758",
"n": "LC"
},
{
"name": "Saint Martin",
"code": "+590",
"n": "MF"
},
{
"name": "Saint Pierre and Miquelon",
"code": "+508",
"n": "PM"
},
{
"name": "Saint Vincent and the Grenadines",
"code": "+1784",
"n": "VC"
},
{
"name": "Samoa",
"code": "+685",
"n": "WS"
},
{
"name": "San Marino",
"code": "+378",
"n": "SM"
},
{
"name": "Sao Tome and Principe",
"code": "+239",
"n": "ST"
},
{
"name": "Saudi Arabia",
"code": "+966",
"n": "SA"
},
{
"name": "Senegal",
"code": "+221",
"n": "SN"
},
{
"name": "Serbia",
"code": "+381",
"n": "RS"
},
{
"name": "Seychelles",
"code": "+248",
"n": "SC"
},
{
"name": "Sierra Leone",
"code": "+232",
"n": "SL"
},
{
"name": "Singapore",
"code": "+65",
"n": "SG"
},
{
"name": "Slovakia",
"code": "+421",
"n": "SK"
},
{
"name": "Slovenia",
"code": "+386",
"n": "SI"
},
{
"name": "Solomon Islands",
"code": "+677",
"n": "SB"
},
{
"name": "Somalia",
"code": "+252",
"n": "SO"
},
{
"name": "South Africa",
"code": "+27",
"n": "ZA"
},
{
"name": "South Sudan",
"code": "+211",
"n": "SS"
},
{
"name": "South Georgia and the South Sandwich Islands",
"code": "+500",
"n": "GS"
},
{
"name": "Spain",
"code": "+34",
"n": "ES"
},
{
"name": "Sri Lanka",
"code": "+94",
"n": "LK"
},
{
"name": "Sudan",
"code": "+249",
"n": "SD"
},
{
"name": "Suriname",
"code": "+597",
"n": "SR"
},
{
"name": "Svalbard and Jan Mayen",
"code": "+47",
"n": "SJ"
},
{
"name": "Swaziland",
"code": "+268",
"n": "SZ"
},
{
"name": "Sweden",
"code": "+46",
"n": "SE"
},
{
"name": "Switzerland",
"code": "+41",
"n": "CH"
},
{
"name": "Syrian Arab Republic",
"code": "+963",
"n": "SY"
},
{
"name": "Taiwan",
"code": "+886",
"n": "TW"
},
{
"name": "Tajikistan",
"code": "+992",
"n": "TJ"
},
{
"name": "Tanzania, United Republic of Tanzania",
"code": "+255",
"n": "TZ"
},
{
"name": "Thailand",
"code": "+66",
"n": "TH"
},
{
"name": "Timor-Leste",
"code": "+670",
"n": "TL"
},
{
"name": "Togo",
"code": "+228",
"n": "TG"
},
{
"name": "Tokelau",
"code": "+690",
"n": "TK"
},
{
"name": "Tonga",
"code": "+676",
"n": "TO"
},
{
"name": "Trinidad and Tobago",
"code": "+1868",
"n": "TT"
},
{
"name": "Tunisia",
"code": "+216",
"n": "TN"
},
{
"name": "Turkey",
"code": "+90",
"n": "TR"
},
{
"name": "Turkmenistan",
"code": "+993",
"n": "TM"
},
{
"name": "Turks and Caicos Islands",
"code": "+1649",
"n": "TC"
},
{
"name": "Tuvalu",
"code": "+688",
"n": "TV"
},
{
"name": "Uganda",
"code": "+256",
"n": "UG"
},
{
"name": "Ukraine",
"code": "+380",
"n": "UA"
},
{
"name": "United Arab Emirates",
"code": "+971",
"n": "AE"
},
{
"name": "United Kingdom",
"code": "+44",
"n": "GB"
},
{
"name": "United States",
"code": "+1",
"n": "US"
},
{
"name": "Uruguay",
"code": "+598",
"n": "UY"
},
{
"name": "Uzbekistan",
"code": "+998",
"n": "UZ"
},
{
"name": "Vanuatu",
"code": "+678",
"n": "VU"
},
{
"name": "Venezuela, Bolivarian Republic of Venezuela",
"code": "+58",
"n": "VE"
},
{
"name": "Vietnam",
"code": "+84",
"n": "VN"
},
{
"name": "Virgin Islands, British",
"code": "+1284",
"n": "VG"
},
{
"name": "Virgin Islands, U.S.",
"code": "+1340",
"n": "VI"
},
{
"name": "Wallis and Futuna",
"code": "+681",
"n": "WF"
},
{
"name": "Yemen",
"code": "+967",
"n": "YE"
},
{
"name": "Zambia",
"code": "+260",
"n": "ZM"
},
{
"name": "Zimbabwe",
"code": "+263",
"n": "ZW"
}
];

const ContactForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "contact") {
      validateContact(e.target.value);
    }
    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
  };

  const handleCountryChange = (e) => {
    setForm({ ...form, countryCode: e.target.value });
  };

  const validateContact = (value) => {
    const regex = /^\d{10}$/;
    if (!regex.test(value)) {
      setContactError("Enter a valid 10-digit number.");
    } else {
      setContactError("");
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactError || emailError) {
      setStatus("Please fix errors before submitting.");
      return;
    }
    setStatus("Sending...");
    try {
      const payload = {
        ...form,
        contact: `${form.countryCode}${form.contact}`,
      };
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({
          name: "",
          email: "",
          countryCode: "+91",
          contact: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
  };


const autoGrow = (e) => {
  const textarea = e.target;
  textarea.style.height = "auto";
  const maxHeight = parseInt(window.getComputedStyle(textarea).maxHeight, 10) || 220;
  textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
};
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, []);

  return (
    <div className="contact-modal">
      <div className="contact-modal-content">
        <button className="contact-modal-close" onClick={onClose}>×</button>
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {emailError && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>{emailError}</span>
          )}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleCountryChange}
              required
              className="country-code-select"
            >
              {countryCodes.map((c) => (
                <option key={c.code + c.n} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </select>
            <input
            name="contact"
            placeholder="10-digit Contact Number"
            value={form.contact}
            onChange={handleChange}
            maxLength={10}
            required
            type="tel"
            pattern="\d{10}"
            style={{ width: "100%" }}
            />
          </div>
          {contactError && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>{contactError}</span>
          )}
            <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => {
                handleChange(e);
                autoGrow(e);
            }}
            required
            ref={textareaRef}
            style={{
                resize: "none",
                width: "100%",
                minHeight: "100px",
                overflowY: "auto"
            }}
            />
          <button type="submit" disabled={!!contactError || !!emailError}>Send</button>
        </form>
        <div className="contact-status">{status}</div>
      </div>
    </div>
  );
};

export default ContactForm;