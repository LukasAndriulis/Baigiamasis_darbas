// ---------------------------------------
// MAIN/MOBILE MENU
function myFunction() {
  var x = document.getElementById("mMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("mainMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



// ---------------------------------------
// BACK TO TOP BUTTON
var btn = $('#back-to-top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// ---------------------------------------
// DESTINATIONS MENU

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the elements for the destinations
  const destinations = document.querySelectorAll(".destinations-selection h3");

  // Get the elements for the images and descriptions
  const images = document.querySelectorAll(".destinations-lower-content > div");
  const descriptions = document.querySelectorAll(".destinations-lower-content .descriptions");

  // Hide all images and descriptions except the first one
  images.forEach((image, index) => {
    if (index !== 0) {
      image.style.display = "none";
    }
  });
  descriptions.forEach((description, index) => {
    if (index !== 0) {
      description.style.display = "none";
    }
  });

  // Add click event listeners to each destination
  destinations.forEach((destination, index) => {
    destination.addEventListener("click", function() {
      // Remove the active class from all destinations
      destinations.forEach((item) => {
        item.classList.remove("active");
      });

      // Add the active class to the clicked destination
      this.classList.add("active");

      // Hide all images and descriptions
      images.forEach((image) => {
        image.style.display = "none";
      });
      descriptions.forEach((description) => {
        description.style.display = "none";
      });

      // Show the corresponding image and description based on the clicked destination
      images[index].style.display = "flex";
      descriptions[index].style.display = "block";
    });
  });
});