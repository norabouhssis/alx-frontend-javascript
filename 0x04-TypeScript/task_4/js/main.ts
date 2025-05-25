import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// Création et exportation des constantes pour chaque matière
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Création et exportation d'un objet Teacher avec expérience en C
export const cTeacher: Teacher = {
  firstName: "Nora",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Configuration et affichage des résultats pour chaque matière
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
