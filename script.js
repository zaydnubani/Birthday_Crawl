// start of main page
// ```
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
// ```
// end of main page

// start of invitation page
// ```
$( function() {
    var birthday = moment("11/18/21", "MM-DD-YY").format("dddd, MMMM Do");
    $(".date").text(birthday);
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
    $(".friend").attr("style", "display: none");
    $(".notComingCard").attr("style", "display: none");
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
      $( ".inviteCard" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".notComing" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( ".no" ).on( "click", function() {
      runEffect();
    });
} );
// ```
// not coming bit
// ```
$( function() {
    // run the currently selected effect
    $(".friend").attr("style", "display: none");
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
// ```
// end of invitation page

// Start of directions page
// ```
$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "blind";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".directions" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".friend" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".cool" ).on( "click", function() {
    runEffect();
  });
} );
// ```
// End of directions page

// Start of locations
// ```
// Zayd
// ```
$( function() {
  $(".rottenRalphs").attr("style", "display: none");
  var time1 = moment("15:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("16:00:00", "HH:mm").format("h:mm a");
  $(".rottenRalphs").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".zayd" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $(".rottenRalphs").removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".zayd" ).on( "click", function() {
    runEffect();
  });

  $(".rottenRalphs").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/Rotten+Ralph's+Pub+%26+Eatery/@39.9484883,-75.1441666,15z/data=!4m2!3m1!1s0x0:0xe0cfc8f418b82491?sa=X&ved=2ahUKEwidzZX14KL0AhUORTABHSQ7BBEQ_BJ6BAheEAU",
          "_blank"
          );
  });
} );
// ```
// Steve
// ```
$( function() {
  $(".OCBeer").attr("style", "display: none");
  var time1 = moment("16:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("18:00:00", "HH:mm").format("h:mm a");
  $(".OCBeer").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".steve" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $(".OCBeer").removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".steve" ).on( "click", function() {
    runEffect();
  });

  $(".OCBeer").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/Old+City+Beer+Garden/@39.949699,-75.145341,15z/data=!4m5!3m4!1s0x0:0x7eb9370690543b2c!8m2!3d39.949699!4d-75.145341",
          "_blank"
          );
  });
} );
// ```
// Dani
// ```
$( function() {
  $(".daniHouse").attr("style", "display: none");
  var time1 = moment("18:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("20:00:00", "HH:mm").format("h:mm a");
  $(".daniHouse").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".dani" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".daniHouse" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".dani" ).on( "click", function() {
    runEffect();
  });

  $(".daniHouse").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/2015+N+5th+St,+Philadelphia,+PA+19122/data=!4m2!3m1!1s0x89c6c811f9fc8a9f:0x9eea61cb8f4e7e77?sa=X&ved=2ahUKEwjJnOvW3qL0AhXSRDABHemYDwEQ8gF6BAgFEAE",
          "_blank"
          );
  });
} );
// ```
// Trez
// ```
$( function() {
  $(".kiki").attr("style", "display: none");
  var time1 = moment("20:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("21:00:00", "HH:mm").format("h:mm a");
  $(".kiki").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".trez" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".kiki" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".trez" ).on( "click", function() {
    runEffect();
  });

  $(".kiki").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/KiKi+Garden+Fishtown/@39.9729842,-75.1337009,15z/data=!4m5!3m4!1s0x0:0xc59d911eb48ca785!8m2!3d39.9729842!4d-75.1337009",
          "_blank"
          );
  });
} );
// ```
// Jack
// ```
$( function() {
  $(".KFNT").attr("style", "display: none");
  var time1 = moment("21:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("22:00:00", "HH:mm").format("h:mm a");
  $(".KFNT").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".jack" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".KNFT" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".jack" ).on( "click", function() {
    runEffect();
  });

  $(".KFNT").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/Kung+Fu+Necktie/@39.970248,-75.1359322,15z/data=!4m5!3m4!1s0x0:0xfd0a3f3d7388e1f6!8m2!3d39.9702515!4d-75.1359509",
          "_blank"
          );
  });
} );
// ```
// Jesse
// ```
$( function() {
  $(".garage").attr("style", "display: none");
  var time1 = moment("22:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("23:00:00", "HH:mm").format("h:mm a");
  $(".garage").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".jesse" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".garage" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".jesse" ).on( "click", function() {
    runEffect();
  });

  $(".garage").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/Garage+Fishtown/@39.9686398,-75.1341832,15z/data=!4m5!3m4!1s0x0:0x2a88124aa356ea06!8m2!3d39.9686362!4d-75.1341934",
          "_blank"
          );
  });
} );
// ```
// Myles
// ```
$( function() {
  $(".johnnyB").attr("style", "display: none");
  var time1 = moment("22:00:00", "HH:mm").format("h:mm a");
  var time2 = moment("23:00:00", "HH:mm").format("h:mm a");
  $(".johnnyB").children('h3').eq(1).text(time1 + " to " + time2);
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "puff";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( ".myles" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".johnnyB" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( ".myles" ).on( "click", function() {
    runEffect();
  });

  $(".johnnyB").children("button").first().on("click", function(){
      window.open(
          "https://www.google.com/maps/place/Garage+Fishtown/@39.9686398,-75.1341832,15z/data=!4m5!3m4!1s0x0:0x2a88124aa356ea06!8m2!3d39.9686362!4d-75.1341934",
          "_blank"
          );
  });
} );
// ```
// Ty
// ```
$( function() {
    $(".Liasion").attr("style", "display: none");
    var time1 = moment("00:00:00", "HH:mm").format("h:mm a");
    var time2 = moment("02:00:00", "HH:mm").format("h:mm a");
    $(".Liasion").children('h3').eq(1).text(time1 + " to " + time2);
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "puff";
 
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

