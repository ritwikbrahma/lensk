import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;

  constructor() { }

  ngOnInit() {
  }

}
