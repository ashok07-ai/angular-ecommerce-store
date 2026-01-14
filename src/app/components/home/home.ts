import { Component } from '@angular/core';
import { Header } from '../header/header';
import { CategoryNavigation } from '../category-navigation/category-navigation';
import { SideNavigation } from '../side-navigation/side-navigation';

const COMPONENTS = [
  Header,
  CategoryNavigation,
  SideNavigation
]

@Component({
  selector: 'app-home',
  imports: [...COMPONENTS],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
