export function CalAgeAndExp(options) {
    const { birthDate, yearStartedCode, ageElementId, birthDateElementId, experienceElementId } = options;
    const elmCurrAge = document.querySelector(`span#${ageElementId}`);
    const elmBirthDate = document.querySelector(`span#${birthDateElementId}`);
    const currentDate = new Date();
    const age = new Date(currentDate - birthDate).getFullYear() - 1970;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    elmCurrAge.innerText = `${age} Years Old`;
    elmBirthDate.innerText = `${birthDate.getFullYear()}, ${monthNames[birthDate.getMonth()]}, ${birthDate.getDate()}`;
    const elmTargetExp = document.querySelector(`span#${experienceElementId}`);
    elmTargetExp.innerText = `${Math.abs(yearStartedCode - new Date().getFullYear())} Years`;
}
//# sourceMappingURL=getExpAndDate.js.map