import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent {
  titulo = new FormControl('', [Validators.minLength(3)])
  nome_autor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])

  getMessage(){
    if(this.titulo.invalid){
      return 'O campo título deve conter entre 3 e 100 caracteres!'
    }
    if(this.nome_autor.invalid){
      return 'O campo nome deve conter entre 3 e 100 caracteres!'
    }
    if(this.texto.invalid){
      return 'O campo texto deve conter entre 10 e 2.000.000 caracteres!'
    }
    return false;
  }
}
