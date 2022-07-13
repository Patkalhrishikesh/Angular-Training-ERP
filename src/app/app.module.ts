import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { TDFComponent } from './tdf/tdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

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
    EmployeeDetailsComponent,
    GameComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    DepartmentDetailComponent,
    TDFComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
