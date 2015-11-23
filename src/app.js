 /* globals $ */
export default function() {
  var btn = $(`.fa-plus-circle`);
  var form = $(`.the-brain`);

  //to add li to the ul
  var addPic = function(pics) {
    var picItem = $('<li>').appendTo('.picture-list');

    // Add an image to the new `picItem`
    $('<img>')
      .attr('src', pics.image)
      .appendTo(picItem);

    $('<p>').text(pics.caption).appendTo(picItem);

    // Add an caption to the new `picItem`
  };

  //fafa plus toggle for drop down
  btn.on(`click`, function() {
    $(`.the-brain`).slideToggle();
  });

  form.on('submit', function(ev) {
    ev.preventDefault();

    var image = $(`#img-url`).val();
    var caption = $(`#img-cap`).val();

    //post to the server
    $.ajax({
      url: `http://tiny-lr.herokuapp.com/collections/photos-cw`,
      method: `POST`,
      dataType: `json`,
      data: {image, caption},
    }).then((response) => {
      $(`.the-brain`).slideUp();
      $(`#img-url`).val('');
      $(`#img-cap`).val('');

      // Take the response and use addPic to add it to the DOM
      addPic(response);
    });
  });

  //cancel button
  $('.cancel').on('click', function() {
    $('.the-brain').slideUp();
    $('#img-url').val('');
    $('#img-cap').val('');
  });

  $.ajax({
    url: `http://tiny-lr.herokuapp.com/collections/photos-cw`,
    method: `GET`,
    dataType: `json`,
  }).then((response) => {
    response.forEach(addPic);
  });
}
