//a)

/* let output2 = document.querySelectorAll('li.hot')
for (let i = 0;i<output2.length;i++){
    output2[i].className='cool'
} */


//b)
/* let output3=document.getElementsByClassName('hot')
if (output3.length>=3)
{
    output3[2].className='cool'
} */


//c)
let i = document.getElementsByTagName('li')
for (n=0;n<i.length;n++){
    if(i[n].classList.contains("hot"))
    {
        i[n].className="cool"
        break
    }
}

