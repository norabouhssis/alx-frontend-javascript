interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Nora',
    lastName: 'Bouhssis',
    age: 29,
    location: 'Rabat'
};

const student2: Student = {
    firstName: 'Hamza',
    lastName: 'Elhadrachi',
    age: 30,
    location: 'Casablanca'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.margin = '20px';
table.style.width = '50%';

const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
nameHeader.style.border = '1px solid black';
nameHeader.style.padding = '8px';

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '8px';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student): void => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    nameCell.style.border = '1px solid black';
    nameCell.style.padding = '8px';

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);
