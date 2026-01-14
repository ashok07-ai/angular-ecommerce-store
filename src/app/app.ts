import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const MODULES = [
  RouterOutlet,
]
@Component({
  selector: 'app-root',
  imports: [...MODULES],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-store');
}
