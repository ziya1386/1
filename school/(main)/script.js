const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getmode = localStorage.getItem("mode");
        if(getmode && getmode === "dark-mode"){
          body.classList.add("dark");
        }
      
//dark and light mode
      modeToggle.addEventListener("click" , () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

//js code to keep user selected mode even page refresh of file reopen
        if(!body.classList.contains("dark")){
          localStorage.setItem("mode" , "light-mode");
        }else{
          localStorage.setItem("mode" , "dark-mode");
        }
      });
 
 //js code to toggle search box
       searchToggle.addEventListener("click" , () =>{
       searchToggle.classList.toggle("active");
      });
      //js code to toggle siderber
      sidebarOpen.addEventListener("click" , () =>{
        nav.classList.add("active");
      });

      body.addEventListener("click" , e =>{
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
          nav.classList.remove("active");
        }
      });

      


// body slider section1
      let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
// here the length of items = 6
prev.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})




// body slider section2
let slider = document.querySelector('.slider');
let form = document.querySelector('.form');
let mouseDownAt = 0;
let left = 0;

slider.onmousedown = (e) => {
    mouseDownAt = e.clientX;
}
slider.onmouseup = () => {
    mouseDownAt = 0;
    slider.style.userSelect = 'unset';
    slider.style.cursor = 'unset';
    form.style.pointerEvents = 'unset';
    form.classList.remove('left');
    form.classList.remove('right');
}
slider.onmousemove = e => {
    if(mouseDownAt == 0) return;
    slider.style.userSelect = 'none';
    slider.style.cursor = 'grab';
    form.style.pointerEvents = 'none';

    if(e.clientX > mouseDownAt){
        form.classList.add('left');
        form.classList.remove('right');
    }else if(e.clientX < mouseDownAt){
        form.classList.add('right');
        form.classList.remove('left');
    }
    //increase or decrease the speed
    // by changing the value of "speed"
    let speed = 2;
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    let leftLimit = form.offsetWidth - slider.offsetWidth / 2;

    if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){
        form.style.setProperty('--left', left + 'px');
        left = leftTemporary;
        mouseDownAt = e.clientX;
    }
}

