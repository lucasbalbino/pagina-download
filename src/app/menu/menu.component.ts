import { Component, OnInit } from '@angular/core';

import { MenuService } from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    abstract;

    listMenus: any = [];

    constructor(
        private menuService: MenuService
    ) {
    }

    ngOnInit() {
        this.menuService.getListMenu().subscribe(listMenus => {
            this.listMenus = listMenus;
        });
    }

}
