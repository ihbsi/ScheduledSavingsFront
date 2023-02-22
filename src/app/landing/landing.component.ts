import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  headerTitle = "Dashboard";
  isExpanded: boolean = false;

  sidenavToggle(){
    this.isExpanded = !this.isExpanded;
  }
}
