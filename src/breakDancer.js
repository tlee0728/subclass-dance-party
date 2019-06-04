var makeBreakDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="breakDancer"></span>');
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings); 
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate({
    left: '-=50',
    height: 'toggle'
  }, 50);
  this.$node.animate({
    left: '+=50',
    height: 'toggle'
  }, 50);

  this.$node.animate({
    top: '+=50',
    height: 'toggle'
  }, 50);
  this.$node.animate({
    top: '-=50',
    height: 'toggle'
  }, 50);

  this.$node.animate({
    left: '+=50',
    height: 'toggle'
  }, 50);
  this.$node.animate({
    left: '-=50',
    height: 'toggle'
  }, 50);

  this.$node.animate({
    top: '-=50',
    height: 'toggle'
  }, 50);
  this.$node.animate({
    top: '+=50',
    height: 'toggle'
  }, 50);
 
};
