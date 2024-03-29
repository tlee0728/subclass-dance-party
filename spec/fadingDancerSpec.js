describe('fadingDancer', function() {

  var fadingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadingDancer = new makeFadingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(fadingDancer.$node, 'fadeToggle');
    fadingDancer.step();
    expect(fadingDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadingDancer, 'step');
      expect(fadingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadingDancer.step.callCount).to.be.equal(2);
    });
  });
});
