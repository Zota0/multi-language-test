import { pop } from "./functions.js"

const delay = ms => new Promise(res => setTimeout(res, ms))

var UserLang = navigator.language || navigator.userLanguage
console.log(UserLang)

if(UserLang === "pl-PL") {
    pop("/pl/home")
}

if (UserLang === "fr-FR") {
    pop("/fr/home")
}

if(
    (UserLang === "en") || (UserLang === "en-AU") || (UserLang === "en-BZ") || (UserLang === "en-CA") || (UserLang === "en-CB") || (UserLang === "en-GB") || (UserLang === "en-IE") || (UserLang === "en-JM") || (UserLang === "en-NZ") || (UserLang === "en-PH") || (UserLang === "en-TT") || (UserLang === "en-US") || (UserLang === "en-ZA") || (UserLang === "en-ZW")
) {
    pop("/en/home")
}

if(UserLang === null) {
    alert("error")
}

