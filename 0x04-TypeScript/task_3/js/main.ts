/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from "./js/interface";
import * as CRUD from "./js/crud";

// Create an object called row with the specified fields
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row into the database and store the returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with an additional age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);
