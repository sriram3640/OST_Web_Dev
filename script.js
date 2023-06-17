function showAboutMe() {
  var container = document.getElementById("aboutMeContainer");
  var textElement = document.getElementById("aboutMeText");

  // Update the text content of the paragraph
  var aboutMeInfo = "I'm Sriram Surisetti, a passionate 4th-year B.Tech student pursuing Computer Science Engineering at NITAP. With a strong enthusiasm for web development, I strive to explore diverse fields to expand my knowledge and skills. My goal is to engage in challenging projects that fuel my growth and allow me to contribute to the ever-evolving world of technology.";
  var contactInfo = "Contact me:<br>Email: sriramsurisetti3412@gmail.com<br>Phone: +91-7989117576";

  // Construct the HTML content for the text card
  var htmlContent = "<p>" + aboutMeInfo + "</p>";
  htmlContent += '<div class="contact-container">' + contactInfo + '</div>';

  textElement.innerHTML = htmlContent;

  // Toggle the display of the container
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
