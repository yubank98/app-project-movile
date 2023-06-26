export interface Students {
    cedula: string,
    nombre: string,
    apellido: string,
    correo: string,
    cursos: Assignment[]
}

export interface Course {
  id: number;
  name: string;
  description: string;
  teacher_id: number;
export interface Course {
  id: number;
  name: string;
  description: string;
  teacher_id: number;
}

export interface Teachers {
  id: number;
  name: string;
  email: string;
  phone: string;
  career: string;
}

export interface StudentCourse {
  id: number;
  student_id: number;
  course_id: number;
  note: number;
}

export interface StudentCourse {
  id: number;
  student_id: number;
  course_id: number;
  note: number;
}