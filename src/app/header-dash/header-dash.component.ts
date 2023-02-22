import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-dash',
  templateUrl: './header-dash.component.html',
  styleUrls: ['./header-dash.component.scss']
})
export class HeaderDashComponent {

  @Input() headerTitle!: string;
  sideNavMessage: string = 'Hola, Lunatt'
}
