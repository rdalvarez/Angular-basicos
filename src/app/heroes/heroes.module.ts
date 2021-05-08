import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ // Es un arreglo, Basicamente dicen que cosas contiene este componente
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Que cosas quiero que sean visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [ // imports = Van modulos, los modulos se ponenen en los imports
        CommonModule // Contiene el ngFor y el ngIf
    ]
})
export class HeroesModule {

}
