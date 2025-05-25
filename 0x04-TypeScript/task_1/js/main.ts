interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number; // Optionnel
    [key: string]: any; // Permet d'ajouter des attributs dynamiques
}
interface Directors extends Teacher{
    numberOfReports:number;
}
function printTeacher (firstName: string, lastName: string): string {

    return `${firstName.charAt(0)}. ${lastName}`;
}
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
