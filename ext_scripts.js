const form = document.getElementById("contact-form"); // assign website form to form variable

form.addEventListener("submit", async function (e) {
  // listener to run the async function when form is submitted
  e.preventDefault(); // prevent default browser behavior

  const formData = new FormData(form); // collect form data

  try {
    // try catch to handle errors
    const response = await fetch(form.action, {
      // send form data to server
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset(); // reset form
      const modalElement = document.getElementById("thankYouModal"); // find defined popup
      if (modalElement) {
        const thankYouModal = new bootstrap.Modal(modalElement, {
          // user must click the "x" button to leave the popup
          backdrop: "static",
          keyboard: false,
        });
        thankYouModal.show(); // show pop up
      } else {
        alert("Thank you for your message!"); // alert in case pop up fails
        window.location.reload();
      }
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert(
      "Something went wrong. Please check your internet connection and try again."
    );
  }
});
