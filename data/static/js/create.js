$(function() {
  $('#create').submit(function () {
    window.location.href = '/_edit/' + encodeURI($('#title').val());
    return false;
  });
});
