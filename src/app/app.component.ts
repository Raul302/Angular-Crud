import { Component } from '@angular/core';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedEmployee: Employee = new Employee();
  employeeArray: Employee[] =[
    {id:1, name: "Raul", country: "mejico"},
    {id:2, name: "Alberto", country: "Hondureño"},
    {id:3, name: "Luis", country: "Guatemalteco"}
  ];

  addOrEdit()
  {
    if(this.selectedEmployee.id===0)
    {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

   this.selectedEmployee = new Employee();
  }
  openForEdit(employee: Employee)
  {
   this.selectedEmployee = employee;
  }
  delete()
  {
    if(confirm('Estas seguro que deseas eliminarlo?')){
      this.employeeArray=this.employeeArray.filter(x=>x!=this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }

  }
}
