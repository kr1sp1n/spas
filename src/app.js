'use strict';

var hg = require('mercury');

function App(initialState) {
  var state = hg.state({
    /* your state here */
    _hotVersion: hg.value(0),
    channels: {
      /* your channels here */
    }
  });
  return state;
};

module.exports = App;
