window.onload = () =>{

  /**
   * toggle password visibility
   */
  const togglePassword = document.querySelector('.toggle-password')
  if(togglePassword){
    togglePassword.addEventListener('click', (event)=>{
        let input = event.currentTarget.parentElement.querySelector('input')
      if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
      }else{
        input.setAttribute('type', 'password')
      }
    })
  }
}