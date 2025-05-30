const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      const modalElement = document.getElementById("thankYouModal");
      if (modalElement) {
        const thankYouModal = new bootstrap.Modal(modalElement, {
          backdrop: "static",
          keyboard: false,
        });
        thankYouModal.show();
      } else {
        alert("Thank you for your message!");
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
