#!/usr/bin/node
$(document).ready(function () {
  // Initialize empty list
  const checkedAmenities = [];

  // Listen for changes on all input checkboxes
  $('input[type=checkbox]').change(function () {
    const amenityId = $(this).attr('data-id');

    if ($(this).is(':checked')) {
      // If checkbox is checked, store the AmenityID in a variable
      checkedAmenities.push(amenityId);
    } else {
      // If the checkbox is unchecked, remove AmenityID from the variable
      checkedAmenities.splice(checkedAmenities.indexOf(amenityId), 1);
    }

    // Update Amenities with the list of checked Amenities
    $('#amenities h4').text(checkedAmenities.join(', '));
  });
});
