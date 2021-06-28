import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public get historial() : string[] {
    return this.gifs$.historial;
  }
  
  constructor( private gifs$: GifsService) { }

  buscar( termino: string ){
    this.gifs$.buscarGifs (termino);
  }
}
