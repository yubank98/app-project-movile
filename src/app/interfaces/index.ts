export interface Students {
    cedula: string,
    nombre: string,
    apellido: string,
    correo: string,
    cursos: Assignment[]
}

export interface Assignment {
    codigo: string,
    nombre: string,
    tipo: string,
    profesor: Teachers
}

export interface Teachers {
    cedula: string,
    nombre: string,
    apellido: string,
    correo: string
}
