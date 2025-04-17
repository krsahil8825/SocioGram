<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To Amigram | Sign In</title>
    <link rel="stylesheet" href="style/loginsignup.css">
</head>

<body>

    <h1 class="title_for_signup_login_page">Welcome To Amigram</h1>
    <div class="form_container">
        <div>
            <form action="signup.php" method="post" class="formforsignup">
                <h2 class="form_title">Sign Up</h2>

                <lable class="signup_form_lable">
                    Username:
                </lable>

                <input type="text" name="username" id="username" required placeholder="Enter your username">


                <lable class="signup_form_lable">
                    Password:
                </lable>


                <input type="password" name="password" id="password" requited placeholder="Enter your password">


                <lable class="signup_form_lable">
                    Confirm Password:
                </lable>


                <input type="password" name="confirm_password" id="confirm_password" required
                    placeholder="Enter your confirm password">

                <label for="show_password" id="show_password_label" class="show_password_label"
                    onclick="togglePasswordVisibility()">
                    Show Password
                </label>

                <input type="checkbox" id="show_password" name="show_password">

                <script>

                    var passwordInput = document.getElementById("password");
                    var confirmPasswordInput = document.getElementById("confirm_password");
                    var showPasswordCheckbox = document.getElementById("show_password");
                    var showPasswordLabel = document.getElementById("show_password_label");

                    function togglePasswordVisibility() {
                        if (passwordInput.type === "password" && confirmPasswordInput.type === "password") {
                            passwordInput.type = "text";
                            confirmPasswordInput.type = "text";
                            showPasswordLabel.textContent = "Hide Password";
                        }
                        else {
                            passwordInput.type = "password";
                            confirmPasswordInput.type = "password";
                            showPasswordLabel.textContent = "Show Password";
                        }
                    }

                </script>



                <lable class="signup_form_lable">
                    Email:
                </lable>


                <input type="email" name="email" id="email" required placeholder="Enter your email">


                <lable class="signup_form_lable">Phone No: </lable>


                <input type="text" name="phone_no" id="phone_no" placeholder="Enter your phone no." required>


                <input type="submit" value="Sign Up" id="signup_btn">

            </form>
            <p class="redirect-to-login-signup-page">Already have an account? <a href="signin.php">Sign In</a></p>
        </div>
    </div>
    <footer class="footer_login_signup_page">
        <p>Created by Kumar Sahil | Made with ❤️ in India</p>
        <p>Copyright &copy; 2025 Kumar Sahil | All Rights Reserved</p>
    </footer>

</body>

</html>