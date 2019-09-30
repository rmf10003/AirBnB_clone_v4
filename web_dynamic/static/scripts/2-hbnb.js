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
      $('.amenitiesandbeyond').empty()
      if (Object.keys(myObj).length === 1) {
	for (const key in myObj) {
          $('.amenitiesandbeyond').append(key)
	}
      } else {
	for (const key in myObj) {
	  $('.amenitiesandbeyond').append(key + ', ')
	}
      }
    })
});

$.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available')
  } else {
    $('DIV#api_status').removeClass('available')
  }
});
