import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http: HttpClient) { }

  getMousters(name: string){
    return  this.http.get('https://pokeapi.co/api/v2/pokemon/' + name).pipe(
    map((resp: any)=>{
      console.log(resp);
      return {
        name: resp.name,
        order: resp.order
      }
    })
    )
    
  }



}