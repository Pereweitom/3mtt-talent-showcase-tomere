function showSideBar(){
    const sidebar = document.querySelector('.sideBar')
    sidebar.style.display = 'flex'
}

function closeSideBar(){
    const sidebar = document.querySelector('.sideBar')
    sidebar.style.display = 'none'
}
// Client Side validation for login page

function id(id) {
    return document.getElementById(id);
}

function classes(classes) {
    return document.getElementsByClassName(classes);
}



 let errorMsg = classes("error")
     failureIcon = classes("failure-icon");

    document.addEventListener("DOMContentLoaded", function() {
        
        let fellowID = id("fellowID"),
            email = id("email"),
            password = id("password"),
            form = id("form");   
    
        form.addEventListener("submit", function(e) {
            e.preventDefault();
    
            engine(fellowID, 0, "Fellow ID cannot be empty")
            engine(email, 1, "Email cannot be blank");
            engine(password, 2, "Password cannot be blank");
        });
    });


let engine = (field, serial, message) => {
    if(field.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        field.style.border = "2px solid red";
        
        // icons
        failureIcon[serial].style.opacity = "1";
      
      } 
      
      else {
        errorMsg[serial].innerHTML = "";
        field.style.border = "";
      
        
        // icons
        failureIcon[serial].style.opacity = "0";
        
      }
}

