import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FirebaseService } from './shared/firebase.service';

import { AuthService } from './shared/auth.service';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'ames-app',
  templateUrl: 'ames.component.html',
  styleUrls: ['ames.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  providers: [AuthService, FirebaseService],
})
export class AmesAppComponent {
  title = 'Ames';
}
