const toggleButton=document.getElementById('toggle-btn');
const sidebar=document.getElementById('sidebar');


function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus()

}
 

function toggleSubmenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()        
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
    
}
//.nextElementSibling: 
// accesses the next sibling element in the DOM tree that is an element node (ignores text/comment nodes).

//.classList.toggle('className'): 
// adds the 'className' class to that element if it doesn’t already exist; removes it if it does.


function closeAllSubMenus(){
    const buttonsArray=Array.from(sidebar.getElementsByClassName('show'));
    buttonsArray.forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
    //A shorter expression is:
    //Array.from(sidebar.getElementsByClassName('show')).forEach
    //(ul => {
    //    ul.classList.remove('show');
    //    ul.previousElementSibling.classList.remove('rotate'); 
    //})    
}
