const name=document.getElementById('name');
form.addEventListener('submit',(e) => {
    let messages=[]
    if (name.value === '' || name.value == null)
    {
        messages.push('name need')
    }
    if(messages.length>0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        
    }
})