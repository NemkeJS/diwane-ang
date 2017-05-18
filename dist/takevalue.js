'use strict';

app.service('takevalue', function ($http) {
  var arr = [];
  return this.getChipInfo = {
    make: function make(chip_info) {
      arr.push(this.editableFruitNames);
      console.log(arr);
      return arr;
    }
  };
});