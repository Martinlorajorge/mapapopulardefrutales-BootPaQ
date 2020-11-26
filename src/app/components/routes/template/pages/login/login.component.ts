import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../../services/core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { UserI } from 'src/app/interfaces/user-i';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private authService:AuthService, private loginService: LoginService) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev, value: UserI) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            this.loginService.login();
            //this.authService.loginByEmail(value);
        }
    }

    ngOnInit() {

    }
    // public login(){
    //     this.loginService.login();
    // }
    public logout(){
        this.loginService.logout();
    }

}
