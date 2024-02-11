// collapse-navbar.component.ts
// From: https://ng-bootstrap.github.io/#/components/collapse/examples
import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-collapse-navbar',
  standalone: true,
  imports: [NgbCollapseModule, RouterLink, FontAwesomeModule],
  templateUrl: './collapse-navbar.component.html',
})

export class CollapseNavbarComponent {
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  isMenuCollapsed = true;
}
