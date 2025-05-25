namespace Subjects {
  // Extension de l'interface Teacher avec declaration merging
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Classe React qui hérite de Subject
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}