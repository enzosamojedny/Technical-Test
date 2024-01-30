const fullName = document.getElementById("name");
const hours = document.getElementById("hours");
const progress = document.getElementById("progress");

document.addEventListener("DOMContentLoaded", async function () {
  async function submitData(event) {
    event.preventDefault();
    try {
      const data = {
        student: fullName.value,
        hours: hours.value,
        description: progress.value,
      };

      const response = await axios.post("/form", data);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your data has been submitted successfully.",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/thankyou";
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred during the submission.",
      });
    }
  }

  document.getElementById("form").addEventListener("submit", submitData);
});
