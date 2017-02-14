import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MateriaisService {

    constructor(
        private http: Http
    ) {
    }

    getMateriais(url: string) {
        return this.http.get('/api/materiais/' + url)
            .map(res => res.json());
    }

}
