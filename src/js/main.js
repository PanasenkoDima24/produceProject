$(document).ready(function() {

    //E-mail Ajax Send
    $("#form1").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../php/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

$(document).ready(function() {

    //E-mail Ajax Send
    $("#form2").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../php/mail2.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});