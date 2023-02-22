import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-module',
  templateUrl: './sidenav-module.component.html',
  styleUrls: ['./sidenav-module.component.scss']
})
export class SidenavModuleComponent {  
  @Input() isExpanded!: boolean;

  role = {
    iconName: 'manage_accounts',
    name: 'Tools',
    modules:
      [
        {
          iconName: 'savings',
          name: 'Ahorro',
          linkName: 'savings',
        },
        {
          iconName: 'nightlight_round',
          name: 'Ciclo',
          linkName: 'ciclo'
        }
      ]
  }
}
