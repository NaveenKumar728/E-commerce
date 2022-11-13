import { Component, OnInit } from '@angular/core';

import {faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingCart = faShoppingCart
  constructor() { }

  ngOnInit(): void {
  }

}
