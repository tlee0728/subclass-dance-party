// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');  
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.step();
  this.setPosition(top, left);
  
};


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  
};

makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.interact = function(dancer) {
  if (this.left < dancer.left) {
    console.log(this.left);
    this.$node.animate({
      left: '+= 50'},
    500
    );
    this.$node.animate({
      left: '-= 50'},
    500
    );
  }

  if (this.left > dancer.left) {
    console.log(this.left);
    this.$node.animate({
      left: '-= 50'},
    500
    );
    this.$node.animate({
      left: '+= 50'},
    500
    );
  }
};

