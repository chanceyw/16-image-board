export default function() {
  var btn = $(`.fa-plus-circle`);
  var form = $(`.the-brain`);

    $(`.fa-plus-circle`).on(`click`, function() {
    $(`.the-brain`).slideToggle();
    return false;
  });


  }
