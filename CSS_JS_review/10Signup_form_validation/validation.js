const form=document.getElementById('form')
const first_name=document.getElementById('first-name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const repeat_password=document.getElementById('repeat-password')
const errorMesasages=document.getElementById('error-messages')


form.addEventListener('submit',(e)=>{
    //e.preventDefault(); //prevent submiting
    let errors=[]

    if(first_name){ //signup page
        errors=getSignupErrors(first_name,email,password,repeat_password);
        
    }else{ //login page
        errors=getLoginErrors(email,password);
    }
    if(errors.length>0){
        e.preventDefault();
        errorMesasages.innerText=errors.join('.');
    }
})

function getSignupErrors(first_name,email,password,repeat_password){
    let errors=[]

    if(first_name.value==='' || first_name.value===null ){
        errors.push('Name is required')
        first_name.parentElement.classList.add('incorrect');
    }
    if(email.value==='' || email.value===null ){
        errors.push('Email is required')
        email.parentElement.classList.add('incorrect');
    }
    if(password.value==='' || password.value===null ){
        errors.push('Password is required')
        password.parentElement.classList.add('incorrect');
    }
    if(password.length<8){
        errors.push('Password nust have at least 8 characters')
        password.parentElement.classList.add('incorrect');
    }
    if(repeat_password.value!=password.value){
        errors.push('Password does not match the repeated password')
        password.parentElement.classList.add('incorrect');
        repeat_password.parentElement.classList.add('incorrect');
    }
    
    return errors
}

function getLoginErrors(email,password){
    let errors=[]
    if(email.value==='' || email.value===null ){
        errors.push('Email is required')
        email.parentElement.classList.add('incorrect');
    }
    if(password.value==='' || password.value===null ){
        errors.push('Password is required')
        password.parentElement.classList.add('incorrect');
    }
    return errors
}


const allInputs=[first_name,email,password,repeat_password].filter(input=>input!=null)
allInputs.forEach(input => {
    input.addEventListener('input',()=>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            errorMesasages.innerTEXT=''
        }
    })
    
});