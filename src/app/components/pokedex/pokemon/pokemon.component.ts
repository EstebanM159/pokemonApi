import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent{
@Input() name: string="";
@Input() img: string="";
}
