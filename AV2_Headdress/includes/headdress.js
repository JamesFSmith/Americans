// Variables for the javascript getting the videos
var vidAttract = document.getElementById("attractVid"); 
var vidHeaddress = document.getElementById("headdressVid");
var modalProp = 'none';
var timeVar;

$(".button1").click(function(){
    $("#headdressVid").show();
    $("#vidWrapper").animate({top: "0px"}, 
         {easing: 'swing',
          duration: 500,
          complete: function() {
              playVid();
          }
         }) //end show and animate
   }) //end button1 click function
    

function playVid() { 
    attractVid.pause();
    attractVid.currentTime = 0; 
    $(".button1").hide();
    headdressVid.play();
    $('#headdressVid').on('ended',function(){
    $("#vidWrapper").animate({top: "1080px"}, 
                     {easing: 'swing',
                      duration: 500,
                      complete: function() {
                          resetAttract();
                      }  //end complete: callback function
                     }) //end animate 
    }); //end headdress on ended 
} //end function playVid

// restart modal box for headdress video
$('#headdressVid').parent().click(function () {
        timing();
        if (modalProp == 'none') {
            $('#modal').show();
            modalProp = 'block';
            pauseVid();
        } else {
            
            $('#modal').hide();
            modalProp = 'none';
            resumeVid();    
            clearTimeout(timeVar);
        }
    });

//onclick for the two buttons of modal box
document.getElementById("startOverBtn").onclick = function() {restartVid()};
document.getElementById("resumeBtn").onclick = function() {resumeVid()};
    
//timeout for restart modal box, 10 secs and it's gone    
function timing() {
   timeVar = setTimeout(function(){ resumeVid(); }, 10000);
}

// func to go bak to the attact video when the headdress video is finished, called in playVid() func 
function resetAttract() {
    $("#headdressVid").hide();
     attractVid.play();
     $(".button1").show();
}

// resume the headdress video when No is pressed on restart modal, outside modal clicked, or on modal timeout
function resumeVid() {

    $('#modal').hide();
    modalProp = 'none';    
    vidHeaddress.play();
    clearTimeout(timeVar);
} 

// pause headdress video when screen is clicked and restart modal box is shown
function pauseVid() { 
    vidHeaddress.pause(); 
} 

// restart headdress video when Yes is clicked on restart modal box
function restartVid() {

    $('#modal').hide();
    modalProp = 'none';  
    vidHeaddress.currentTime = 0;  
    vidHeaddress.play();
    clearTimeout(timeVar);
} 
