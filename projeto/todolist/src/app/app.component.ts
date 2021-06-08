import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

tarefa : string ="";
horario: string="";

tarefas: Array<string> =[""]

horarios: Array<string> =[""]

adicionartarefa(){
  this.tarefas.push(this.tarefa,this.horario);
  this.tarefa ="", this.horario="";
}

// adicionarhora(){
//   this.horarios.push(this.horario);
//   this.horario ="";
// }
 }