var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var passwordRegex = /^[a-zA-Z0-9!@#$?]+$/;
var digit = /\d/;
var letter = /[a-zA-Z]/;
var specialCharacters = /[!@#$?]/;


function isEmail(email) {

    return emailRegex.test(email);
}

function isPassword(password) {
    return (passwordRegex.test(password) && digit.test(password) &&
        letter.test(password) && specialCharacters.test(password));
}

$("#submitButton").click(function () {

    var errorMessage = "";
    var fieldsMissing = "";


    if ($("#email").val() == "") {
        fieldsMissing += "<br>email";
    }

    if ($("#phone").val() == "") {
        fieldsMissing += "<br>phone";
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>password";
    }

    if ($("#ConfirmPassword").val() == "") {
        fieldsMissing += "<br>ConfirmPassword";
    }



    if ($("#email").val() != "" && isEmail($("#email").val()) == false) {
        errorMessage += "<p>Invalid Email Address</p>"
    }

    if ($("#phone").val() != "" && $.isNumeric($("#phone").val()) == false) {
        errorMessage += "<p>Please enter only no's in phone no<p>";
    }

    if ($("#password").val() != "" && isPassword($("#password").val()) == false) {
        errorMessage += "<p>Invalid password<p>";
    }

    if ($("#password").val() != $("#ConfirmPassword").val()) {
        errorMessage += "<p>Both passwords are not the same<p>";
    }

    if(fieldsMissing != "") {
        fieldsMissing = "The following field(s) are missing:"+ fieldsMissing;
    }

    errorMessage += fieldsMissing;

    if(errorMessage != "") {
        $("#errormessage").html(errorMessage);
    }
    else {

                    $("#successMessage").show();
                    $("#errorMessage").hide();

                }
});
