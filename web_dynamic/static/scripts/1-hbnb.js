#!/usr/bin/node

let myObj = {}
$(function () {
  $('input:checkbox').change(
    function () {
      if ($(this).is(':checked')) {
	myObj[($(this).attr("data-name"))] = $(this).attr("data-id")
      } else {
	delete myObj[$(this).attr("data-name")]
      }
      console.log(myObj)
    })
});
$('div h4').text(
