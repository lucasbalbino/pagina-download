import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    constructor() {
    }

    getListMenu() {
        return [
            {id: 1, name: 'Assinatura de Email', url: 'assinatura'},
            {id: 2, name: 'Apresentação', url: 'apresentacao'},
            {id: 3, name: 'Banner', url: 'banner'},
            {id: 4, name: 'Certificado', url: 'certificado'},
            {id: 5, name: 'Logomarca', url: 'logomarca'},
            {id: 6, name: 'Papel de Parede', url: 'papel'},
            {id: 7, name: 'Proposta Comercial', url: 'proposta'},
            {id: 8, name: 'Template', url: 'template'}
        ];
    }

}
