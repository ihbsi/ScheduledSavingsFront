import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-module',
  templateUrl: './sidenav-module.component.html',
  styleUrls: ['./sidenav-module.component.scss']
})
export class SidenavModuleComponent {
  sideNaveMessage: string = 'Welcome to the jungle'
  role = {
    name: 'Lunatt',
    modules:
      [
        {
          name: 'Ahorro',
          linkName: 'ahorro',

        },
        {
          name: 'Ciclo',
          linkName: 'ciclo'
        }
      ]
  }
}
