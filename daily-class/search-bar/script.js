const inputTxt = document.querySelector('.text');
inputTxt = document.addEventListener('input', e =>{
    const value = e.target.value;
    console.log(value);

    document.querySelectorAll('p').forEach(find =>{
        const nameTag = find.querySelector('.name');
        if(nameTag.innerText.toLowerCase().includes(value.toLowerCase())){
            find.style.display = 'block';
    }else{
        find.style.display = 'none';
    }
})
});