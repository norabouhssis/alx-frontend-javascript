
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
    
}
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
    
}

function createEmployee (salary:number): string {
    if(salary < 500){
        return "Teacher";
    }else {
        return "Director";
    }
}
function isDirector(employee: any): employee is Director {
  return 'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

