import { Component, OnInit } from '@angular/core';
import { RequestsService } from './services/requests/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'segunda-clase-a';
  name: string = '';
  order: string= '';

constructor(public requestsService: RequestsService){}

ngOnInit(): void {
  this.buscarPokemon();
}

public buscarPokemon(){
  let   boton= document.getElementById('btnBuscar');
  let  pokemon: HTMLInputElement = <HTMLInputElement> document.getElementById('nameLook');
  console.log('Pokemon: ', pokemon.value);
  boton?.addEventListener("click", () => {
    this.requestsService.getMousters(pokemon.value).subscribe({
      next: (resp: any )=>{
        this.name=resp.name;
        this.order= resp.order; 
        console.log(resp);
        console.log('Pokemon: ', pokemon.value);
      },
      error: (error: any)=>{
        this.name='No encontrado';
        this.order= '-----'; 
      }
    });
   })

 }






}
