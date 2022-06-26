import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CockpitComponent,
    ServerElementComponent,
    ServerComponent,
    routingComponents,
    PageNotFoundComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    ChildCompComponent,
    ParentCompComponent,
    PipesComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
