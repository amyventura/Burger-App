// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    
    let burger_id = $(this).children(".burger_id").val;
    console.log("burger_id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function(data) {
        // Reload the page to get the updated list
        location.reload();
      });
  });

  
});
