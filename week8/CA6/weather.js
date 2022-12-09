$(document).ready(function(){
  $("#btnSubmit").on("click",function (e){
      e.preventDefault();
      console.log($("#txtDate").val());
      //process text 
      getPSI($("#txtDate").val());
  });

  function getPSI(datetime=""){
      console.log("sending psi data request ");
      var params ={
          url: `https://api.data.gov.sg/v1/environment/psi`,
          method: "GET",
          timeout: 0,
      };

      $.ajax(params).done(function (data){
          console.log("API status :" + data.api_info.status);
          const readings = data.items[0].readings;
          var reading_pm10= readings.pm10_twenty_four_hourly;
          var content ="";
          $.each(reading_pm10, function(key,obj){
              console.log(`PM10: ${key} : ${obj}`);
              content += `${key} : ${obj} <br/> `;
          });
          $("#pm10-twenty-four-hourly").html(content);

          var reading_twenty_four = readings.psi_twenty_four_hourly;
          var content ="";
          $.each(reading_twenty_four, function (key,obj){
              console.log(key + ":"+ obj);
              content += key +":" + obj+ "<br/>";
          });
          $("#psi-twenty-four-hourly").html(content);
          localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four_hourly));
          });
    }
});