document.getElementById("contactForm").addEventListener("submit", function(event) {
    const humanCheck = document.getElementById("humanCheck").value.trim();
    if (humanCheck !== "2") {
      alert("Please verify you are human by solving 1+1 correctly!");
      event.preventDefault();
    }
  });
  