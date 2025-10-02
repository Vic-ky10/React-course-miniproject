import Courses from './course/Courses';
import css from './assets/CSS.jpg';
import js from './assets/JS.png';
import html from './assets/HTML.png';
import React from './assets/React.jpg';

function CourseList(){
 
    const course = [
    {
        id:1,
         name :"HTML" ,
         price: 199,
         image: html

    },
    {
        id:2,
         name : "CSS ",
         price : 250 ,
         image :css
    },
    {
        id:3,
        name :"javaScript",
        price : 500,
        image:js

    },
    {
        id:4,
        name : "React",
        price : 999,
        image : React ,

    }
]
   // sorting decending to ascending 
    course.sort( (x,y) => y.id - x.id)
     const courseFills =  course.filter( ( fill)=> fill.price>=100)
     const CourseList = courseFills.map(
    (courses , index )=> 
      <Courses key ={index }
       name = {courses.name} 
       image = {courses.image}
       price = {courses.price} />
   )

  return (
<>
  {
    CourseList

  }
 
</>
  )
}

export default CourseList;