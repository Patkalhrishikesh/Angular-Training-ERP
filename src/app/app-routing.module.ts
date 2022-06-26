import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServerComponent } from './server/server.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
{path: 'departments', component: DepartmentListComponent },
{path: 'employees-list', component: EmployeeListComponent },
{path: 'employees-details', component: EmployeeDetailsComponent },
{path: 'servers', component: ServerComponent },
{path: 'data-binding', component: DataBindingComponent },
{path: 'structural-directives', component: StructuralDirectivesComponent },
{path: 'component-interation', component: ParentCompComponent },
{path: 'pipes', component: PipesComponent },
{path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  EmployeeDetailsComponent,
  ServerComponent,
  DataBindingComponent,
  StructuralDirectivesComponent,
  ParentCompComponent,
  PipesComponent,
  PageNotFoundComponent
];
