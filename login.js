// $(document).ready(function (){

function loginButton() {
  let email = $("#email_input").val();
  let password = $("#password_input").val();
  if (email == "admin" && password == "admin123") {
    if ($("#checkbox_input").checked) {
      localStorage.setItem("email_content", email_input);
      localStorage.setItem("password_content", password_input);
    }
    window.location.href = "homepage.html";
  } else {
    $("#para_content").html("Wrong password or Email");
  }
}
