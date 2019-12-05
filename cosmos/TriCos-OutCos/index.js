module.exports = function(context) {
  context.bindings.funcOutputName = JSON.stringify({
    name: 'sample'
  });

  context.done();
};
