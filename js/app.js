$(document).ready(function(){
    var from,to,subject,text;
    $("#send_email").click(function(){
        to=$("#to").val();
        subject=$("#subject").val();
        text=$("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data, err){
            if(data=="sent")
            {
                $("#message").empty().html("Email is been sent at "+to+" . Please check inbox !");
            }
            if(err){
                alert(err);
                $("#message").text(err);

            }

        });
    });
});