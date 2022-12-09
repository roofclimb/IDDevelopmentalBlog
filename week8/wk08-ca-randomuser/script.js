// https://randomuser.me/api/
//@TODO use only the fetch web api 

let url = 'https://randomuser.me/api/';


//modify this fetch method to the required settings.
/*
fetch()
  .then()
  .then();
*/


//insert and modify to your needs
$("#btn").click(function(){
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const results=data.results[0];
    console.log(results.name)
    $("#fullname").html(`${results.name.first} ${results.name.last}`)
    $("#username").html(`${results.login.username}`)
    $("#email").html(`${results.email}`)
    $("#city").html(`${results.location.city}`)
    $("#avatar").attr("src",`${results.picture.medium}`)
  });
})

