import React, { useState } from 'react';
import Card from './Card';

function Cards(props){

    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);





    // Returns a list of all courses recieved from the API response
    function getCourses(){
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }else{
            // Ill send data array of of specific category
            return courses[category];
        }
        
    }



    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map(function(course){
                return(
                    <Card key={course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}></Card>
                );
            })}
        </div>
    );
}

export default Cards;