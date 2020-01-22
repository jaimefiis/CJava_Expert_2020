import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonUpdateComponent } from './person-update/person-update.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonCreateComponent } from './person-create/person-create.component';


const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'personas', component: PersonListComponent },
  { path: 'add', component: PersonCreateComponent },
  { path: 'update/:id', component:  PersonUpdateComponent},
  { path: 'details/:id', component: PersonDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
