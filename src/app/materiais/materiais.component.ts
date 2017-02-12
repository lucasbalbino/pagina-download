import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx.d';

import { MateriaisService } from './materiais.service'

@Component({
    selector: 'app-materiais',
    templateUrl: './materiais.component.html',
    styleUrls: ['./materiais.component.css']
})
export class MateriaisComponent implements OnInit {
    abstract;

    inscricao: Subscription;
    materiais: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private materiaisService: MateriaisService
    ) {
    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe(params => {
            let url = params['url'];

            console.log(url);

            this.materiais = this.materiaisService.getMateriais(url);

            if (this.materiais == null) {
                this.router.navigate(['/naoEncontrado']);
            }
        });
    }

    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }

}
