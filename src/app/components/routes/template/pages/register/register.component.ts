import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../../services/core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { RegisterService } from 'src/app/services/register/register.service';
import { registerCalendarSystem } from '@fullcalendar/core/datelib/calendar-system';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;
    isFamilia: boolean;

    constructor(public settings: SettingsService, fb: FormBuilder, private registerService: RegisterService) {

        let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'accountagreed': [null, Validators.required],
            'passwordGroup': this.passwordForm
        });
    }
    public onItemChange(value){
        if(value=='isFamilia')
            this.isFamilia=true;
        else if(value=='isOrganizacion')
            this.isFamilia=false;
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (let c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }

        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            if(this.isFamilia){
                this.registerService.registrarFamilia(value);
            }
            else if(!this.isFamilia){
                this.registerService.registrarOrganizacion(value);
            }
            //falta validar si el mail existe el mail en la base de datos
            // if(isFamilia)
            // RegisterService.familia
            // else register organizacion
        }
    }

    ngOnInit() {
        this.isFamilia=true;
    }

}
