import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleSavingsComponent } from './components/schedule-savings/schedule-savings.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      { path: 'savings', component: ScheduleSavingsComponent }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
