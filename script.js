$( function() {
    $(".mainPage").attr("style", "display: none");
    $(".invitation").attr("style", "display: none");
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "pulsate";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( ".startPage" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".invitation" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( ".Pat" ).on( "click", function() {
      runEffect();
    });
} );

var birthday = moment("11/18/21", "MM-DD-YY").format("dddd, MMMM Do");
$(".date").text(birthday).attr("style", "font-weight: bolder; font-size: large");



var crawl = "You've been invited to the CRAWL!";
$("#crawl").text(crawl).attr("style", "font-size: medium");

var coming = "Are you coming?";
$("#coming").text(coming);

$( function() {
    $(".notComing").attr("style", "display: none");
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "fade";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( ".invitation" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".mainPage" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( ".yes" ).on( "click", function() {
      runEffect();
    });
} );

$( function() {
    $(".notComingCard").attr("style", "display: none");
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "bounce";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( ".inviteCard" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".notComingCard" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( ".no" ).on( "click", function() {
      runEffect();
    });
} );

$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "fade";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( ".invitation" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".mainPage" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( ".nvm" ).on( "click", function() {
      runEffect();
    });
} );


$( function() {
    $(".Liasion").attr("style", "display: none");
    $(".place").text("Liasion Room").attr("style", "text-align: center");
    var time1 = moment("22:00:00", "HH:mm").format("h:mm a");
    var time2 = moment("02:00:00", "HH:mm").format("h:mm a");
    $(".time").text(time1 + " to " + time2);
    $(".address").text("1253 N Front St, Philadelphia, PA 19122");
    $(".Liasion").children().first().attr("style", "font-weight:bolder; font-size:x-large");
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "explode";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( ".friendFace" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".Liasion" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( ".ty" ).on( "click", function() {
      runEffect();
    });

    $(".Liasion").children("button").first().on("click", function(){
        window.open(
            "https://www.google.com/maps/place/Liaison+Room/@39.9701872,-75.1356148,15z/data=!4m5!3m4!1s0x0:0xb9f909fc50aa3fbd!8m2!3d39.9702581!4d-75.1355951?hl=en",
            "_blank"
            );
    });

    $(".Liasion").children("button").last().on("click", function(){
        window.open(
            "https://www.eventbrite.com/e/rock-the-house-at-the-liaison-room-tickets-207992399867",
            "_blank"
            );
    });
} );

