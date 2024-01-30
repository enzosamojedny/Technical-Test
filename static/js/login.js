const email = document.getElementById("email");
const password = document.getElementById("password");

document.addEventListener("DOMContentLoaded", async function () {
  async function submitForm(event) {
    event.preventDefault();
    try {
      const data = {
        email: email.value,
        password: password.value,
      };

      const response = await axios.post("/postuser", data);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your data has been submitted successfully.",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/form";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred during the submission.",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (error) {}
  }

  document.getElementById("myForm").addEventListener("submit", submitForm);
});
