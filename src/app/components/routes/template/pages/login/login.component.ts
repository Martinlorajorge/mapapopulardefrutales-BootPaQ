import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../../services/core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { UserI } from 'src/app/interfaces/user-i';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario/login-usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLogged=false;
    isLoginFail=false;
    loginUsuario: LoginUsuario;
    nombreUsuario:string;
    password:string;
    errorMessage:string;

    roles:string[]=[];

    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private authService:AuthService, private tokenService:TokenService,private router:Router) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev, value) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            this.nombreUsuario=value.email;
            this.password=value.password;
            //this.onLogin();
            //this.loginService.login();
            //this.authService.loginByEmail(value);
        }
    }

    ngOnInit() {
        if(this.tokenService.getToken()){
            this.isLogged=true;
            this.isLoginFail=false;
            this.roles=this.tokenService.getAuthorities();
        }
    }

    onLogin(){
        this.loginUsuario=new LoginUsuario(this.nombreUsuario,this.password);
        this.authService.login(this.loginUsuario).subscribe(
            data=> {
                this.isLogged=true;
                this.isLoginFail=false;

                this.tokenService.setToken(data.token);
                this.tokenService.setUserName(data.nombreUsuario);
                this.tokenService.setAuthorities(data.authorities);
                this.roles=data.authorities;
                this.roles.forEach(rol=>{
                    if(rol ==='ROLE_FAM')
                        this.router.navigate(['/mis-arboles']);
                    else if(rol ==='ROLE_ORG')
                        this.router.navigate(['/homeorganizacion']);
                        else if(rol==='ROLE_ADMIN')
                            this.router.navigate(['/organizaciones']);
                })
            },
            err =>{
                this.isLogged=false;
                this.isLoginFail=true;
                this.errorMessage=err.error.message;
                console.log(this.errorMessage);
            }

        )
    }
    // public login(){
    //     this.loginService.login();
    // }
    // public logout(){
    //     this.loginService.logout();
    // }

}
