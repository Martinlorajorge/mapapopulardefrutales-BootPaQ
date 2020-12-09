export interface Organizacion {
    id?:number;
    nombre:string;
    mail: string,
    nro_contacto: number,
    tipo?: string,
    representante?: number,
    foto?: string,
    descripcion?: string,
    logo?: string,
    usuario?: string
}
