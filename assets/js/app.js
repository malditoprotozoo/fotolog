$(document).ready(function() {
  $("#submit").click(function() {
    var comment = $("#comment-content").val();
    if (comment.length !== 0) {
      var container = $('<div class="columns is-mobile"></div>').appendTo("#comments");
      var container2 = $('<div class="column comment-text"></div>').appendTo(container);
      container2.append(comment);
      $("#comment-content").val("");
    } else {
      alert("Escribe un mensaje");
    }
  })
});