import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private databaseObj!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  // Create the database
  async createDatabase(){
    try {
      const db: SQLiteObject = await this.sqlite.create({
        name: 'Collegue.db',
        location: 'default',
      });
      this.databaseObj = db;
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
    await this.createTable();
  }

  // Create tables student, teacher, course with relationship teacher course and student course with notes course
  async createTable(): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY, name varchar(255), email varchar(255), phone varchar(255), career varchar(255), semester varchar(255))`,
        []
      );
      alert('Table student created!');

      await this.databaseObj.executeSql(
        `CREATE TABLE IF NOT EXISTS teacher (id INTEGER PRIMARY KEY, name varchar(255), email varchar(255), phone varchar(255), career varchar(255))`,
        []
      );
      alert('Table teacher created!');

      await this.databaseObj.executeSql(
        `CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(255), description varchar(255), teacher_id INTEGER, FOREIGN KEY(teacher_id) REFERENCES teacher(id))`,
        []
      );
      alert('Table course created!');

      await this.databaseObj.executeSql(
        `CREATE TABLE IF NOT EXISTS student_course_note (id INTEGER PRIMARY KEY AUTOINCREMENT, student_id INTEGER, course_id INTEGER, note INTEGER, FOREIGN KEY(student_id) REFERENCES student(id), FOREIGN KEY(course_id) REFERENCES course(id))`,
        []
      );
      alert('Table student_course created!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }

  // Create
  async addStudent(
    id: string,
    name: string,
    email: string,
    phone: string,
    career: string,
    semester: string
  ): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `INSERT INTO student (id,name, email, phone, career, semester) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, name, email, phone, career, semester]
      );
      return alert('Student added!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }

  // Get all students
  async getStudents() {
    try {
      const res = await this.databaseObj.executeSql(`SELECT * FROM student`, []);
      const students: any[] = [];
      for (let index = 0; index < res.rows.length; index++) {
        students.push(res.rows.item(index));
      }
      return students;
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
      return [];
    }
  }
  

  // Update
  async updateStudent(id: number, name: string, email: string, phone: string, career: string, semester: string): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `UPDATE student SET name = ?, email = ?, phone = ?, career = ?, semester = ? WHERE id = ?`,
        [name, email, phone, career, semester, id]
      );
      alert('Student updated!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Delete
  async deleteStudent(id: number): Promise<void> {
    try {
      await this.databaseObj.executeSql(`DELETE FROM student WHERE id = ?`, [id]);
      alert('Student deleted!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  //search for id
  async getStudent(id: number): Promise<any> {
    try {
      const res = await this.databaseObj.executeSql(`SELECT * FROM student WHERE id = ?`, [id]);
      if (res.rows.length > 0) {
        return res.rows.item(0);
      } else {
        return null;
      }
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
      return null;
    }
  }
  

  // Create teacher
  async addTeacher(id: string , name: string, email: string, phone: string, career: string): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `INSERT INTO teacher (id,name, email, phone, career) VALUES (?, ?, ?, ?, ?)`,
        [name, email, phone, career]
      );
      alert('Teacher added!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Get all teachers
  async getTeachers(): Promise<any[]> {
    try {
      const res = await this.databaseObj.executeSql(`SELECT * FROM teacher`, []);
      let teachers: any[] = [];
      for (let index = 0; index < res.rows.length; index++) {
        teachers.push(res.rows.item(index));
      }
      return teachers;
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
      return [];
    }
  }
  

  // Update teacher
  async updateTeacher(id: number, name: string, email: string, phone: string, career: string): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `UPDATE teacher SET name = ?, email = ?, phone = ?, career = ? WHERE id = ?`,
        [name, email, phone, career, id]
      );
      alert('Teacher updated!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Delete teacher
  async deleteTeacher(id: number): Promise<void> {
    try {
      await this.databaseObj.executeSql(`DELETE FROM teacher WHERE id = ?`, [id]);
      alert('Teacher deleted!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  //search for name
  async getTeacherforName(name: string): Promise<any> {
    try {
      const res = await this.databaseObj.executeSql(`SELECT * FROM teacher WHERE name = ?`, [name]);
      return res.rows.item(0);
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
      return null;
    }
  }
  

  // Create course
  async addCourse(name: string, description: string, teacher_id: number): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `INSERT INTO course (name, description, teacher_id) VALUES (?, ?, ?)`,
        [name, description, teacher_id]
      );
      alert('Course added!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Get all courses
  async getCourses(): Promise<any[]> {
    try {
      const res = await this.databaseObj.executeSql(`SELECT * FROM course`, []);
      const courses: any[] = [];
      for (let index = 0; index < res.rows.length; index++) {
        courses.push(res.rows.item(index));
      }
      return courses;
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
      return [];
    }
  }
  

  // Update course
  async updateCourse(id: number, name: string, description: string, teacher_id: number): Promise<void> {
    try {
      await this.databaseObj.executeSql(
        `UPDATE course SET name = ?, description = ?, teacher_id = ? WHERE id = ?`,
        [name, description, teacher_id, id]
      );
      alert('Course updated!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Delete course
  async deleteCourse(id: number): Promise<void> {
    try {
      await this.databaseObj.executeSql(`DELETE FROM course WHERE id = ?`, [id]);
      alert('Course deleted!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  //search for name
  async getCourse(name: string): Promise<any> {
    try {
      const res = await this.databaseObj.executeSql(`SELECT * FROM course WHERE name = ?`, [name]);
      return res.rows.item(0);
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // get course for name teacher
  async getCourseTeacher(name: string): Promise<any> {
    try {
      const teacher = await this.getTeacherforName(name);
      const res = await this.databaseObj.executeSql(`SELECT * FROM course WHERE teacher_id = ?`, [teacher.id]);
      return res.rows.item(0);
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Create student course
  async addStudentCourse(student_id: number, course_id: number, note: number) {
    try {
      await this.databaseObj.executeSql(
        `INSERT INTO student_course (student_id, course_id, note) VALUES (?, ?, ?)`,
        [student_id, course_id, note]
      );
      alert('Student course added!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Get all course for student
  async getCourseStudent (id: number): Promise<any>  {
    try {
      const res = await this.databaseObj.executeSql(
        `SELECT * FROM student_course WHERE student_id = ?`,
        [id]
      );
  
      let courses: any[] = [];
      for (let index = 0; index < res.rows.length; index++) {
        courses.push(res.rows.item(index));
      }
  
      return courses;
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
  }
  

  // Update student course
  async updateStudentCourse(
    id: number,
    student_id: number,
    course_id: number,
    note: number
  ) {
    try {
      await this.databaseObj.executeSql(
        `UPDATE student_course SET student_id = ?, course_id = ?, note = ? WHERE id = ?`,
        [student_id, course_id, note, id]
      );
      alert('Student course updated!');
    } catch (e) {
      alert('Error updating student course: ' + JSON.stringify(e));
    }
  }
  

  // Delete student course
  async deleteStudentCourse(id: number) {
    try {
      await this.databaseObj.executeSql(
        `DELETE FROM student_course WHERE id = ?`,
        [id]
      );
      alert('Student course deleted!');
    } catch (e) {
      alert('Error deleting student course: ' + JSON.stringify(e));
    }
  }
  
}
