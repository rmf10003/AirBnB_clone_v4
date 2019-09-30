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
  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search",
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      for (const place in data) {
	const articleTag = `
      <article>
      <div class="title">
      <h2>${data[place].name}</h2>
	      <div class="price_by_night">
      ${data[place].price_by_night}
	      </div>
	    </div>
	    <div class="information">
	      <div class="max_guest">
		<i class="fa fa-users fa-3x" aria-hidden="true"></i>
		<br />
		${data[place].max_guest} Guests
	      </div>
	      <div class="number_rooms">
		<i class="fa fa-bed fa-3x" aria-hidden="true"></i>
		<br />
		 ${data[place].number_rooms} Bedrooms
	      </div>
	      <div class="number_bathrooms">
		<i class="fa fa-bath fa-3x" aria-hidden="true"></i>
		<br />
		${data[place].number_bathrooms} Bathroom
	      </div>
	    </div>
	    <div class="description">
	      ${data[place].description}
	    </div>
  </article>
  `;
	$("section.places").append(articleTag)
      }
    }
  })
});
