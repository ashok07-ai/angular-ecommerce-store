import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

const COMPONENTS = [
  Header
]

const MODULES = [
  RouterOutlet,
]
@Component({
  selector: 'app-root',
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-store');
}
