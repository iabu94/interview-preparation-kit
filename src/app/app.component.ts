import { Component } from '@angular/core';
import { Menu } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open = true;
  submenuExpand = false;
  menu: Menu[] = [
    {
      title: 'Personal',
      url: 'personal',
      icon: 'user'
    },
    {
      title: 'C#',
      url: 'csharp',
      icon: 'csharp',
      spacing: true
    },
    {
      title: '.Net Core',
      url: 'netcore',
      icon: 'netcore'
    },
    {
      title: 'Angular',
      url: 'angular',
      icon: 'angular'
    },
    {
      title: '.Net MVC',
      url: 'netmvc',
      icon: 'netmvc'
    },
    {
      title: 'SQL',
      url: 'sql',
      icon: 'sql'
    },
    {
      title: 'EF',
      url: 'ef'
    },
    {
      title: 'Project',
      url: 'project',
      spacing: true
    },
    {
      title: 'Agile',
      url: 'agile'
    },
    {
      title: 'HR',
      url: 'hr'
    },
  ];
}
