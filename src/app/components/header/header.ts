import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const MODULES = [
  FontAwesomeModule
]
@Component({
  selector: 'app-header',
  imports: [...MODULES],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
