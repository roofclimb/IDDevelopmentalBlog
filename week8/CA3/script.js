//#TODO
//Create 3 circles of different colors using CSS
//Upon mouse click of a circle, hide the circle
$(document).ready(function(){
    //Insert your code here
    //Think about the css property of the circle and how we can run our selection
    //Think about using $(this)
    $('#red-circle').click(function(){
        $(this).hide();
    });
    $('#blue-circle').click(function(){
        $(this).hide();
    });
    $('#yellow-circle').click(function(){
        $(this).hide();
    });
    
    });//eof