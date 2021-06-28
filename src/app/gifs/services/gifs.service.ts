import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'aU3Db9fAAkrvuQrEan1gU1dskg1ZjP0o';
  private _historial: string[] = [];

  public resultados: Gif[] = [];
  
  public get historial() : string[] {
    
    return [...this._historial];
  }


  constructor( private http: HttpClient ) {
    // this._historial = JSON.parse( localStorage.getItem('historial')!) || [] ;

    if ( localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }

    //resultados
    this.resultados = JSON.parse(  localStorage.getItem('resultados') ! ) || [] ;
    

  }
  
  buscarGifs( query: string = ''){
    
    query = query.trim().toLocaleLowerCase();

    if( ! this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify( this._historial ));      
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=aU3Db9fAAkrvuQrEan1gU1dskg1ZjP0o&q=${ query }&limit=10`)
      .subscribe( ( resp ) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ));
      })


    // fetch('https://api.giphy.com/v1/gifs/search?api_key=aU3Db9fAAkrvuQrEan1gU1dskg1ZjP0o&q=dragon ball z&limit=10').then(
    //   resp => {
    //     resp.json().then(
    //       data => {
    //         console.log(data);
    //       }
    //     )
    //   }
    // )

    
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=aU3Db9fAAkrvuQrEan1gU1dskg1ZjP0o&q=dragon ball z&limit=10');
    // const data = resp.json();
    // console.log(data);


    console.log(this._historial);
  }
}

