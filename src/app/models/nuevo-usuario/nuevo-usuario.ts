export class NuevoUsuario {
    //nombre:string;
    //nombreusuario:string;
    email:string;
    password:string;
    authorities: string[];
    constructor(email:string,password:string, authorities:string[]){//nombre:string,nombreusuario:string,
        //this.nombre=nombre;
        //this.nombreusuario=nombreusuario;
        this.email=email;
        this.password=password;
        this.authorities=authorities;
    }
}
