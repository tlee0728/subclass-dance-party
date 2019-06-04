$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  // LINE UP
  $('.addLineUpButton').on('click', function(event) {
    
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }

  });

  // INTERACT
  $('.addInteractButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length - 1; i++) {
      for (var j = i + 1; j < window.dancers.length; j++) {

        var xdist = Math.pow((window.dancers[i].left - window.dancers[j].left), 2);
        var ydist = Math.pow((window.dancers[i].top - window.dancers[j].top), 2);
        if ((xdist + ydist) * 0.5 < 300) {
          window.dancers[i].interact(window.dancers[j]);
          // window.dancers[i].lineUp();
          
        }
      }
    }

  });


  $('body').on({
    mouseenter: function () {
      $(this).attr('class', 'increase fadingDancer');
    },
    mouseleave: function () {
      $(this).removeAttr('class', 'increase');
      $(this).attr('class', 'fadingDancer');
    }
  }, '.fadingDancer');

  $('body').on({
    mouseenter: function () {
      $(this).attr('class', 'increase dancer');
    },
    mouseleave: function () {
      $(this).removeAttr('class', 'increase');
      $(this).attr('class', 'dancer');
    }
  }, '.dancer');

  $('body').on({
    mouseenter: function () {
      $(this).attr('class', 'increase breakDancer');
    },
    mouseleave: function () {
      $(this).removeAttr('class', 'increase');
      $(this).attr('class', 'breakDancer');
    }
  }, '.breakDancer');


});
