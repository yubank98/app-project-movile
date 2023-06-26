export interface Students {
  id: number;
  name: string;
  email: string;
  phone: string;
  career: string;
  semester: string;
}

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
