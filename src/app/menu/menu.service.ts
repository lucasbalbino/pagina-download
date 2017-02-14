import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

    constructor(
        private http: Http
    ) {
    }

    getListMenu() {
        return this.http.get('/api/menus')
            .map(res => res.json());
    }

}
