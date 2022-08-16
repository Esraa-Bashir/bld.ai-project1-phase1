const con = document.createElement("div");
con.className ="courses";
let courseFormat="";
con.innerHTML =`<h3>hello</h3>`;
fetch("python_res.json")
.then(res => res.json())
.then(data => {
    con.innerHTML = `
        <h2 >${data.header}</h2>
        <p>${data.description}</p>
        <button class="explore-button ">Explore Python</button>
        
        
    `;
    data.courses.forEach((course) => {

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
      });
    con.innerHTML += `
    <div class="all-courses" >
        ${courseFormat}
        </div>
       
    `;
});
document.body.appendChild(con);