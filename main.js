const cors = document.createElement("div");
cors.className ="courses";
let courseFormat="";
cors.innerHTML = `
        <h2 >Expand your career opportunities with Python</h2>
        <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly
         useful language.Its simple syntax and readability makes Python perfect for Flask, Django, 
         data science,and machine learning. You’ll learn how to build everything from games to sites to apps.
         Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
        <button class="explore-button ">Explore Python</button>  
    `; 
//con.innerHTML =`<h3>hello</h3>`;
//const link = "http://localhost:3000/courses";
const link = "http://localhost:3000/courses";
fetch(link)
      .then(res => res.json())
      .then(data => data.forEach((course) => Generator(course)));

function Generator(course) {
    courseFormat += `
        <div class="only-one-course" >
        <div class="course-img">
        <img  src="${course.image}" />
            </div>
            
            <h3 class="course-title">${course.title} </h3>
            <h5 class="course-author"> ${course.instructors.map(instructor =>instructor.name )}</h5>
            
            <div class="stars">
                <span class="rating">${course.rating}</span>
                <img src="images/stars${course.rating}.png" height="15">
                <span class="enroll-count">${course.enroll}</span>
                
            </div>
            <div class="course-price">
                <p>E&#163;${course.oldPrice} <span class="old-price">E&#163;${course.newPrice}</span>
                    </p>
            </div>
            <div class="${course.BestSeller}">BestSeller</div>
        
        </div>
        
        `;


}

cors.innerHTML += `
<div class="all-courses" >
    ${courseFormat}
    </div>
`;
document.body.appendChild(cors);