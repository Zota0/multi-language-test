import * as func from "./functions.js"

var UserLang = navigator.language || navigator.userLanguage
console.log(UserLang)

if(UserLang === "pl-PL") {
    //func.redirect("/pl/")
    func.redirect("/en/")
}

if (UserLang === "fr-FR") {
    //func.redirect("/fr/")
    func.redirect("/en/home")
}

if(
    (UserLang === "en") || (UserLang === "en-AU") || (UserLang === "en-BZ") || (UserLang === "en-CA") || (UserLang === "en-CB") || (UserLang === "en-GB") || (UserLang === "en-IE") || (UserLang === "en-JM") || (UserLang === "en-NZ") || (UserLang === "en-PH") || (UserLang === "en-TT") || (UserLang === "en-US") || (UserLang === "en-ZA") || (UserLang === "en-ZW")
) {
    //func.redirect("/en/")
    func.redirect("/en/")
}

if(UserLang == null) {
    alert("error")
}