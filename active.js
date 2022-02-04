let btn = document.querySelector('.close-btn');
let sidebar = document.querySelector('aside');

btn.onclick = function(){
    sidebar.classList.toggle("active");
}