namespace Subjects {
  // Extension de l'interface Teacher avec declaration merging
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Classe Cpp qui hérite de Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

// Exemple d'utilisation
const teacher: Subjects.Teacher = { firstName: "Nora", lastName: "Doe", experienceTeachingC: 5 };
const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(teacher);

