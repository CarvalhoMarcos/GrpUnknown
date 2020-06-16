import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AutenticacaoService } from './autenticacao.service';
import { User, RetornoLogin, UsuarioPLogar } from './user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
//import { Http } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dados : UsuarioPLogar ={
    cpf : "",
    password : ""
  }
   token : string  = "";

  usuarioSistema : UsuarioSistema = new UsuarioSistema(null, "");

  loginForm: FormGroup;

  constructor(
    private route : Router,
    private formBuilder: FormBuilder,
    private loginService: AutenticacaoService
    //public http: Http
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }
  fazerLogin() {

    console.log(this.dados);
    var resp = this.loginService.autenticaUser(this.dados)
    .then(usuarioLogado => {
      console.log(usuarioLogado);
      this.usuarioSistema.usuario = usuarioLogado['usuario'];
      this.token = usuarioLogado['token'];
      localStorage.setItem('token', this.token);
      // falta mudar a rota
      console.log(this.token);
      console.log(this.usuarioSistema.usuario);
      var tipoUser = this.usuarioSistema.usuario.tipo_usuario
      console.log(tipoUser);
      
      if(tipoUser === "M" ){
        this.route.navigate(['adm']);
      }else if(tipoUser === "R"){
        this.route.navigate(["aluno"]);
      }else if(tipoUser === "P"){
        this.route.navigate(["/"]);
      }
    })
    
    resp.catch(erro => {
      //localStorage.removeItem('usuarioLogado');
      console.log(erro);
      let msgErro = 'Ocorreu um erro na realização da Operação!';
      console.log(msgErro);
    });

  }
  // onSubmit(){
  // this.http.post('#',JSON.stringify(this.loginForm.value))
  //               .map(res=>res)
  //               .subscribe(dados =>{
  //                 console.log(dados)
  //                 this.loginForm.reset();
  //               },
  //               (error:any) => alert('erro'));
  //}

}

class UsuarioSistema implements RetornoLogin{
  constructor(public user : User, public token : string){
    this.usuario = user,
    this.token = token
  }
  usuario: User;
}
