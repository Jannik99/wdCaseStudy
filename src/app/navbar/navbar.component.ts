import {Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav flex-column">
      <a class="btn btn-primary" routerLink="/chart" routerLinkActive="active">Chart</a>
      <a class="btn btn-primary" routerLink="/blockcompare" routerLinkActive="active">Blockvergleich</a>
    </nav>

  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
