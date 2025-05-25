namespace Subjects {
  // Extension de l'interface Teacher avec declaration merging
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Classe Java qui hérite de Subject
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}