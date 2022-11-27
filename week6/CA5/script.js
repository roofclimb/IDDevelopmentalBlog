//Fill in the ??? to complete the function object.
function Singer(name, speciality, power, hitpoints, level, gender ){
    this.name=name;
    this.speciality=speciality;
    this.power=power;
    this.level=level;
    this.gender=gender;
    this.hitpoints=hitpoints;
    
    if (this.hitpoints<=50){
        this.maxhit='Weak';
    }
    else if(51<=this.hitpoints<=70){
        this.maxhit='Strong';
    }
    else if (71<=this.hitpoints<=100){
        this.maxhit='Amazing';
    }
    this.singerProfile=function(){
        return "Name: " + this.name + "<br>Specialty: " + this.speciality + "<br>Power: " + 
        this.maxpower + "<br>Hitpoints: " + this.maxhit + "<br>Level: " + this.level + "<br>Gender: " + this.gender;
    }
    this.maxpower=this.power*this.level-this.hitpoints;
}

let momobae=new Singer('Momobae','K-pop',49,49,7,'F');
//Create the function objects momobae and minabae.
let minabae=new Singer('Minabae','K-pop',9,60,59,'M');




//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);