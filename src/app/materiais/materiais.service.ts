import { Injectable } from '@angular/core';

@Injectable()
export class MateriaisService {

    constructor() {
    }

    getMateriais(url: string) {
        if(url != undefined) {
            return url;
        }
        return 'Tudo';
    }

}
