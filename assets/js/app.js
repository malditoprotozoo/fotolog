$(document).ready(function() {
  $("#submit").click(function() {
    var profilePic = $("#file-pic").val();
    var name = $("#nickname-content").val();
    var email = $("#e-mail-content").val();
    var comment = $("#comment-content").val();
    if (comment.length !== 0) {
      /**
      * This will add the profile image
      */
      var containerFather = $("<div class='columns is-mobile'></div>");
      containerFather.appendTo("#comments");
      var containerLeft = $("<div class='column is-2-desktop is-2-tablet is-3-mobile hcenter'></div>");
      containerLeft.appendTo(containerFather);
      var contentLeft = $("<div class='profile-pic'></div");
      contentLeft.appendTo(containerLeft);
      var contentImg = $("<img></img>");
      if (profilePic.length !== 0) {
        contentImg.attr("src", profilePic);
      } else {
        contentImg.attr("src", "assets/img/unknown_user.png");
      }
      contentImg.appendTo(contentLeft);
      /**
      * This will add the name
      */
      var containerRight = $("<div class='column comment-text'></div>");
      var paragraph1 = $("<p></p>");
      if (name.length !==0) {
        var nameContainer = $("<span class='nickname'>"+name+"</span>");
      } else {
        var nameContainer = $("<span class='nickname'>"+"Anonymous"+"</span>");
      }
      containerRight.appendTo(containerFather);
      paragraph1.appendTo(containerRight);
      nameContainer.appendTo(paragraph1);
      /**
      * This will add the email
      */
      nameContainer.wrap("<a href='mailto:"+email+"' class='picked-color-text'></a>");
      /**
      * This will add the comment
      */
      var commentContainer = $("<p>"+comment+"</p>");
      commentContainer.appendTo(containerRight);
      /**
      * This will clean all the inputs
      */
      $("#file-pic").val("");
      $("#nickname-content").val("");
      $("#e-mail-content").val("");
      $("#comment-content").val("");
    } else {
      alert("Escribe un mensaje");
    }
  })
});