import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../../services/core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { RegisterService } from 'src/app/services/register/register.service';
import { registerCalendarSystem } from '@fullcalendar/core/datelib/calendar-system';
import { Familia } from 'src/app/interfaces/familia';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { TipoOrganizacionService } from 'src/app/services/tipo-organizacion/tipo-organizacion.service';
import { TipoOrganizacion } from 'src/app/interfaces/tipo-organizacion';
import { UserI } from 'src/app/interfaces/user-i';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Representante } from 'src/app/interfaces/representante';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public tiposOrganizacion:Array<TipoOrganizacion>;
    public tipoInicial: string;

    valForm: FormGroup;
    passwordForm: FormGroup;

    valFormFamilia:FormGroup;
    valFormOrganizacion:FormGroup;

    // familiaForm:FormGroup;
    // organizacionForm:FormGroup;
    isFamilia: boolean;

    constructor(public settings: SettingsService, fb: FormBuilder, private registerService: RegisterService, private tipoOrgService:TipoOrganizacionService, private router:Router) {

        let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        // this.valForm = fb.group({
        //     'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
        //     'accountagreed': [null, Validators.required],
        //     'passwordGroup': this.passwordForm
        // });
        this.valFormFamilia = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'accountagreed': [null, Validators.required],
            'passwordGroup': this.passwordForm,
            'apellidoFamilia': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),//only caracteres
            'telefonoFamilia': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')]))//only numbers
        });
        this.valFormOrganizacion = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'accountagreed': [null, Validators.required],
            'passwordGroup': this.passwordForm,
            'nombreOrganizacion': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
            'nombreRepresentante': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
            'dni': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
            'telefonoOrganizacion': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
            'tipoOrganizacion': new FormControl('',Validators.required)
        });

    }
    public onItemChange(value){
        if(value=='isFamilia'){
            this.isFamilia=true;
            this.valForm=this.valFormFamilia;
        }
        else if(value=='isOrganizacion'){
            this.isFamilia=false;
            this.valForm=this.valFormOrganizacion;

        }
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
            console.log('Valido!');
            if(this.isFamilia){
                let nuevaFamilia:Familia = {
                    mail:value.email,
                    nombre:value.apellidoFamilia,
                    nro_contacto:value.telefonoFamilia

                };
                let nuevoUsuario:UserI={
                    usuario:value.email,
                    clave:value.passwordGroup.password,
                    tipo:3
                };
                let respuesta= this.registerService.registrarFamilia(nuevaFamilia,nuevoUsuario);
                console.log(respuesta);
                this.router.navigate(['/mis-arboles']);

            }
            else if(!this.isFamilia){
                let nuevaOrganizacion:Organizacion = {
                    mail:value.email,
                    nombre:value.nombreOrganizacion,
                    nro_contacto:value.telefonoOrganizacion,
                    tipo:value.tipoOrganizacion
                };
                let nuevoRepresentante:Representante={
                    nomyape:value.nombreRepresentante,
                    dni: value.dni,
                    direccion: value.email,
                    nro_contacto: value.telefonoOrganizacion,
                };
                let nuevoUsuario:UserI={
                    usuario:value.email,
                    clave:value.passwordGroup.password,
                    tipo:2
                };
                let respuesta= this.registerService.registrarOrganizacion(nuevaOrganizacion,nuevoUsuario,nuevoRepresentante);
                console.log(respuesta);
                this.router.navigate(['/homeorganizacion']);

                //this.registerService.registrarOrganizacion(value);
            }
            //falta validar si el mail existe el mail en la base de datos
            // if(isFamilia)
            // RegisterService.familia
            // else register organizacion
            this.valForm.reset();
        }
    }

    ngOnInit() {
        this.isFamilia=true;
        this.valForm=this.valFormFamilia;

        this.tipoOrgService.findAllTipoOrganizacion()
        .subscribe((response: Array<TipoOrganizacion>) => {
        this.tiposOrganizacion = response;
        this.tipoInicial= this.tiposOrganizacion[0].nom;
        });
    }

}
