var makeFadingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fadingDancer"></span>');
  var styleSettings = {
    top: top,
    left: left
    // border:"10px solid blue";
  };
  this.$node.css(styleSettings); 
};

makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;

makeFadingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.fadeToggle(1000);
};