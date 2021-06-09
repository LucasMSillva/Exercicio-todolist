import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamplate-form',
  templateUrl: './tamplate-form.component.html',
  styleUrls: ['./tamplate-form.component.css']
})
export class TamplateFormComponent implements OnInit {

  usuario: any={
    nome: 'Lucas1',
    email: 'lucas1@email.com'
  }

  onSubmit(form:any){
    console.log(form);
    console.log(this.usuario);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
