import Courses from './course/Courses';
import css from './assets/CSS.jpg';
import js from './assets/JS.png';
import html from './assets/HTML.png';
import React from './assets/React.jpg';
import { useState ,useEffect  } from 'react';

function CourseList(){
 
const [courses, setCourses] = useState([
    { id: 1, name: "HTML", price: 199, image: html },
    { id: 2, name: "CSS", price: 250, image: css },
    { id: 3, name: "JavaScript", price: 500, image: js },
    { id: 4, name: "React", price: 999, image: React},
]);
const [vicky , setVicky] = useState("onfire")
useEffect(()=>{
  console.log("created a use Effect")
  console.log(vicky)
})

 function handleDelete(id){
  console.log(id)
  const newCourses = courses.filter((course) => course.id !== id);
  setCourses(newCourses);

 }
   // sorting decending to ascending 
    courses.sort( (x,y) => x.id - y.id)

     //const courseFills =  courses.filter( ( fill)=> fill.price >   100)
     const CourseList = courses.map((course)=> 
      <Courses key ={course.id}
       name = {course.name} 
       image = {course.image}
       price = {course.price}
       delete = {handleDelete} 
       id= {course.id}/>
   )

  return (
<>
  
    {CourseList}
    <button onClick={()=> {setVicky("OFF Fire")}}>fire</button>
    

  
 
</>
  )
}

export default CourseList;