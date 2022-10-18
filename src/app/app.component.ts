import { Component, OnInit } from '@angular/core';
import { Menu } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  open = true;
  submenuExpand = false;
  menu: Menu[] = [
    {
      title: 'Personal',
      url: 'personal',
      icon: 'user',
    },
    {
      title: 'C#',
      url: 'csharp',
      icon: 'csharp',
    },
    {
      title: '.Net Core',
      url: 'netcore',
      icon: 'netcore',
    },
    {
      title: 'Angular',
      url: 'angular',
      icon: 'angular',
    },
    {
      title: '.Net MVC',
      url: 'netmvc',
      icon: 'netmvc',
    },
    {
      title: 'SQL',
      url: 'sql',
      icon: 'sql',
    },
    {
      title: 'EF',
      url: 'ef',
      icon: 'efcore',
    },
    {
      title: 'Project',
      url: 'project',
      icon: 'project',
    },
    {
      title: 'Agile',
      url: 'agile',
      icon: 'agile',
    },
    {
      title: 'HR',
      url: 'hr',
      icon: 'hr',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.open = false;
    }, 10000);
  }
}
