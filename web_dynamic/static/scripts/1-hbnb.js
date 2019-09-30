#!/usr/bin/node

let len;
let i = 1;
const myObj = {};
$(function () {
  $('input:checkbox').change(
    function () {
      if ($(this).is(':checked')) {
        myObj[($(this).attr('data-name'))] = $(this).attr('data-id');
      } else {
        delete myObj[$(this).attr('data-name')];
      }
      len = Object.keys(myObj).length;
      $('.amenitiesandbeyond').empty();
      for (const dName in myObj) {
        if (len === 1 || i === len) {
	  $('.amenitiesandbeyond').append(dName);
        } else {
	  $('.amenitiesandbeyond').append(dName + ', ');
        }
        i++;
      }
    });
});
