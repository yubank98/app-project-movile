"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6222],{3822:(O,l,i)=>{i.r(l),i.d(l,{AddStudentPageModule:()=>r});var n=i(6814),E=i(95),S=i(7852),h=i(5785),u=i(458),o=i(6689);const t=[{path:"",component:u.z}];let e=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[h.Bz.forChild(t),h.Bz]}),a})(),r=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[n.ez,E.u5,S.Pc,e]}),a})()},2399:(O,l,i)=>{i.d(l,{M:()=>h});var n=i(5861),E=i(6689),S=i(8344);let h=(()=>{class u{constructor(t){this.sqlite=t}createDatabase(){var t=this;return(0,n.Z)(function*(){try{const e=yield t.sqlite.create({name:"Collegue.db",location:"default"});t.databaseObj=e}catch(e){alert("Error: "+JSON.stringify(e))}yield t.createTable()})()}createTable(){var t=this;return(0,n.Z)(function*(){try{yield t.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY, name varchar(255), email varchar(255), phone varchar(255), career varchar(255), semester varchar(255))",[]),alert("Table student created!"),yield t.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS teacher (id INTEGER PRIMARY KEY, name varchar(255), email varchar(255), phone varchar(255), career varchar(255))",[]),alert("Table teacher created!"),yield t.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(255), description varchar(255), teacher_id INTEGER, FOREIGN KEY(teacher_id) REFERENCES teacher(id))",[]),alert("Table course created!"),yield t.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS student_course_note (id INTEGER PRIMARY KEY AUTOINCREMENT, student_id INTEGER, course_id INTEGER, note INTEGER, FOREIGN KEY(student_id) REFERENCES student(id), FOREIGN KEY(course_id) REFERENCES course(id))",[]),alert("Table student_course created!")}catch(e){alert("Error: "+JSON.stringify(e))}})()}addStudent(t,e,r,a,s,d){var c=this;return(0,n.Z)(function*(){try{return yield c.databaseObj.executeSql("INSERT INTO student (id,name, email, phone, career, semester) VALUES (?, ?, ?, ?, ?, ?)",[t,e,r,a,s,d]),alert("Student added!")}catch(y){alert("Error: "+JSON.stringify(y))}})()}getStudents(){var t=this;return(0,n.Z)(function*(){try{const e=yield t.databaseObj.executeSql("SELECT * FROM student",[]),r=[];for(let a=0;a<e.rows.length;a++)r.push(e.rows.item(a));return r}catch(e){return alert("Error: "+JSON.stringify(e)),[]}})()}updateStudent(t,e,r,a,s,d){var c=this;return(0,n.Z)(function*(){try{yield c.databaseObj.executeSql("UPDATE student SET name = ?, email = ?, phone = ?, career = ?, semester = ? WHERE id = ?",[e,r,a,s,d,t]),alert("Student updated!")}catch(y){alert("Error: "+JSON.stringify(y))}})()}deleteStudent(t){var e=this;return(0,n.Z)(function*(){try{yield e.databaseObj.executeSql("DELETE FROM student WHERE id = ?",[t]),alert("Student deleted!")}catch(r){alert("Error: "+JSON.stringify(r))}})()}getStudent(t){var e=this;return(0,n.Z)(function*(){try{const r=yield e.databaseObj.executeSql("SELECT * FROM student WHERE id = ?",[t]);return r.rows.length>0?r.rows.item(0):null}catch(r){return alert("Error: "+JSON.stringify(r)),null}})()}addTeacher(t,e,r,a,s){var d=this;return(0,n.Z)(function*(){try{yield d.databaseObj.executeSql("INSERT INTO teacher (id,name, email, phone, career) VALUES (?, ?, ?, ?, ?)",[t,e,r,a,s]),alert("Teacher added!")}catch(c){alert("Error: "+JSON.stringify(c))}})()}getTeachers(){var t=this;return(0,n.Z)(function*(){try{const e=yield t.databaseObj.executeSql("SELECT * FROM teacher",[]);let r=[];for(let a=0;a<e.rows.length;a++)r.push(e.rows.item(a));return r}catch(e){return alert("Error: "+JSON.stringify(e)),[]}})()}updateTeacher(t,e,r,a,s){var d=this;return(0,n.Z)(function*(){try{yield d.databaseObj.executeSql("UPDATE teacher SET name = ?, email = ?, phone = ?, career = ? WHERE id = ?",[e,r,a,s,t]),alert("Teacher updated!")}catch(c){alert("Error: "+JSON.stringify(c))}})()}deleteTeacher(t){var e=this;return(0,n.Z)(function*(){try{yield e.databaseObj.executeSql("DELETE FROM teacher WHERE id = ?",[t]),alert("Teacher deleted!")}catch(r){alert("Error: "+JSON.stringify(r))}})()}getTeacherforName(t){var e=this;return(0,n.Z)(function*(){try{return(yield e.databaseObj.executeSql("SELECT * FROM teacher WHERE name = ?",[t])).rows.item(0)}catch(r){return alert("Error: "+JSON.stringify(r)),null}})()}addCourse(t,e,r){var a=this;return(0,n.Z)(function*(){try{yield a.databaseObj.executeSql("INSERT INTO course (name, description, teacher_id) VALUES (?, ?, ?)",[t,e,r]),alert("Course added!")}catch(s){alert("Error: "+JSON.stringify(s))}})()}getCourses(){var t=this;return(0,n.Z)(function*(){try{const e=yield t.databaseObj.executeSql("SELECT * FROM course",[]),r=[];for(let a=0;a<e.rows.length;a++)r.push(e.rows.item(a));return r}catch(e){return alert("Error: "+JSON.stringify(e)),[]}})()}updateCourse(t,e,r,a){var s=this;return(0,n.Z)(function*(){try{yield s.databaseObj.executeSql("UPDATE course SET name = ?, description = ?, teacher_id = ? WHERE id = ?",[e,r,a,t]),alert("Course updated!")}catch(d){alert("Error: "+JSON.stringify(d))}})()}deleteCourse(t){var e=this;return(0,n.Z)(function*(){try{yield e.databaseObj.executeSql("DELETE FROM course WHERE id = ?",[t]),alert("Course deleted!")}catch(r){alert("Error: "+JSON.stringify(r))}})()}getCourse(t){var e=this;return(0,n.Z)(function*(){try{return(yield e.databaseObj.executeSql("SELECT * FROM course WHERE name = ?",[t])).rows.item(0)}catch(r){alert("Error: "+JSON.stringify(r))}})()}getCourseTeacher(t){var e=this;return(0,n.Z)(function*(){try{const r=yield e.getTeacherforName(t);return(yield e.databaseObj.executeSql("SELECT * FROM course WHERE teacher_id = ?",[r.id])).rows.item(0)}catch(r){alert("Error: "+JSON.stringify(r))}})()}addStudentCourse(t,e,r){var a=this;return(0,n.Z)(function*(){try{yield a.databaseObj.executeSql("INSERT INTO student_course (student_id, course_id, note) VALUES (?, ?, ?)",[t,e,r]),alert("Student course added!")}catch(s){alert("Error: "+JSON.stringify(s))}})()}getCourseStudent(t){var e=this;return(0,n.Z)(function*(){try{const r=yield e.databaseObj.executeSql("SELECT * FROM student_course WHERE student_id = ?",[t]);let a=[];for(let s=0;s<r.rows.length;s++)a.push(r.rows.item(s));return a}catch(r){alert("Error: "+JSON.stringify(r))}})()}updateStudentCourse(t,e,r,a){var s=this;return(0,n.Z)(function*(){try{yield s.databaseObj.executeSql("UPDATE student_course SET student_id = ?, course_id = ?, note = ? WHERE id = ?",[e,r,a,t]),alert("Student course updated!")}catch(d){alert("Error updating student course: "+JSON.stringify(d))}})()}deleteStudentCourse(t){var e=this;return(0,n.Z)(function*(){try{yield e.databaseObj.executeSql("DELETE FROM student_course WHERE id = ?",[t]),alert("Student course deleted!")}catch(r){alert("Error deleting student course: "+JSON.stringify(r))}})()}}return u.\u0275fac=function(t){return new(t||u)(E.LFG(S.e))},u.\u0275prov=E.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);