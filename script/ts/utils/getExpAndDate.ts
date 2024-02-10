interface CalAgeAndExpOptions {
    birthDate: Date;
    yearStartedCode: number;
    ageElementId: string;
    birthDateElementId: string;
    experienceElementId: string;
}

export function CalAgeAndExp(options: CalAgeAndExpOptions): void {
    const { birthDate, yearStartedCode, ageElementId, birthDateElementId, experienceElementId } = options;
    
    const elmCurrAge: HTMLElement = document.querySelector(`span#${ageElementId}`);
    const elmBirthDate: HTMLElement = document.querySelector(`span#${birthDateElementId}`);
    const currentDate = new Date();
    const age = new Date(currentDate - birthDate).getFullYear() - 1970;
    const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    elmCurrAge.innerText = `${age} Years Old`;
    elmBirthDate.innerText = `${birthDate.getFullYear()}, ${monthNames[birthDate.getMonth()]}, ${birthDate.getDate()}`;

    const elmTargetExp: HTMLElement = document.querySelector(`span#${experienceElementId}`);
    elmTargetExp.innerText = `${Math.abs(yearStartedCode - new Date().getFullYear())} Years`;
}