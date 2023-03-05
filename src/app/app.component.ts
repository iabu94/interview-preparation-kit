import { Component, OnInit } from '@angular/core';
import { MENU } from './data';
import { Menu } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  open = true;
  submenuExpand = false;
  menu: Menu[] = MENU;

  ngOnInit(): void {
    setTimeout(() => {
      this.open = false;
    }, 10000);
  }
}
