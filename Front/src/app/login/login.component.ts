import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//import { Http } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    //public http: Http
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario:[null,[Validators.required]],
      password:[null,Validators.required]
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
