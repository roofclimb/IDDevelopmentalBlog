//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b648b9969f06502871aa3d";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let studentName = $("#student-name").val();
      let studentId = $("#student-id").val();
      let studentMentor = $("#student-mentor").val();
      let studentClass = $("#student-class").val();
      let studentNumber = $("#student-hp").val();
      let studentGender = $("#student-gender").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name": studentName,
        "studentid": studentId,
        "studentmentor": studentMentor,
        "studentclass": studentClass,
        "handphonenumber": studentNumber,
        "gender": studentGender,
        };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-e51d.restdb.io/rest/student",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-update-msg").show().fadeOut(3000);
  
        //update our table 
        getContacts();
      });
    });//end click 
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-e51d.restdb.io/rest/student",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          //console.log(response[i]);
          //[METHOD 1]
          //let's run our loop and slowly append content
          //we can use the normal string append += method
          /*
          content += "<tr><td>" + response[i].name + "</td>" +
            "<td>" + response[i].studentId + "</td>" +
            "<td>" + response[i].studentMentor + "</td>
            "<td>Del</td><td>Update</td</tr>";
          */
  
          //[METHOD 2]
          //using our template literal method using backticks
          //take note that we can't use += for template literal strings
          //we use ${content} because -> content += content 
          //we want to add on previous content at the same time
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].name}</td>
          <td>${response[i].studentid}</td>
          <td>${response[i].studentmentor}</td>
          <td>${response[i].studentclass}</td>
          <td>${response[i].handphonenumber}</td>
          <td>${response[i].gender}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td>
          <a href='#update-contact-container' class='update' data-id='${response[i]._id}'
          data-studentid='${response[i].studentid}' data-mentor='${response[i].studentmentor}' data-name='${response[i].name}' data-studentclass='${response[i].studentclass}' data-handphonenumber='${response[i].handphonenumber}' data-gender='${response[i].gender}'>
           Update</a></td></tr>`;
          console.log(response[i]._id)
        }
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
    //[STEP 10]: Create our update listener
    //here we tap onto our previous table when we click on update
    //this is a delegation feature of jquery
    //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
      //update our update form values
      let studentName = $(this).data("name");
      let studentId = $(this).data("studentid");
      let studentMentor = $(this).data("mentor");
      let studentClass = $(this).data("studentclass");
      let studentNumber = $(this).data("handphonenumber");
      let studentGender = $(this).data("gender");
      let contactId = $(this).data("id");
      console.log(contactId);
  
      //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
      $("#update-student-name").val(studentName);
      $("#update-student-id").val(studentId);
      $("#update-student-mentor").val(studentMentor);
      $("#update-student-class").val(studentClass);
      $("#update-student-hp").val(studentNumber);
      $("#update-student-gender").val(studentGender);
      $("#update-contact-id").val(contactId);
      $("#update-contact-container").show();
      console.log(contactId);
    });//end contact-list listener for update function
  
    //[STEP 12]: Here we load in our contact form data
    //Update form listener
    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();
      //retrieve all my update form values
      let studentName = $("#update-student-name").val();
      let studentId = $("#update-student-id").val();
      let studentMentor = $("#update-student-mentor").val();
      let studentClass = $("#update-student-class").val();
      let studentNumber = $("#update-student-hp").val();
      let studentGender = $("#update-student-gender").val();
      let contactId = $("#update-contact-id").val(); 

      console.log($("#update-student-name").val());
      console.log(contactId);
  
      //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
      updateForm(contactId,studentName, studentId, studentMentor, studentClass, studentNumber, studentGender);
    });//end updatecontactform listener
    
    $("#contact-list").on("click", ".delete", function (e) {
      e.preventDefault();
      let contactId = $(this).data("id");
      console.log($(this).data("name"));
      console.log(contactId)
      deleteRecord(contactId)
      
    });

    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function updateForm(id, name, studentid, mentor, studentclass, number,gender) {
      //@TODO create validation methods for id etc. 
      console.log(id)
      var jsondata = { "name": name, "studentid": studentid, "studentmentor": mentor, "studentclass": studentclass, "handphonenumber": number,"gender": gender };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-e51d.restdb.io/rest/student/${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);
        //update our contacts table
        getContacts();
      });
    }//end updateform function

    $("#contact-list").on("click", ".delete",function (e) {
      e.preventDefault();
      console.log("delete")
      let contactId = $(this).data("id");
      $("#delete-student-msg").show().fadeOut(3000);
      $("#delete-contact-container").fadeOut(5000);
    });//end updatecontactform listener
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function deleteRecord(id) {
      var settings = {
        async: true,
        crossDomain: true,
        url: `https://interactivedev-e51d.restdb.io/rest/student/${id}`,
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        getContacts();
      });
    }//end updateform function
  })
  