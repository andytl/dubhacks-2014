$(function() {
    $("#signinForm").submit(signIn);

    function signIn() {
        var name = $("[name='username']").val();
        var pw = $("[name='password']").val();
        var url = "localhost:3000/user/";
        var data = '"username":' + "\""+name + "\"," + '"password":' + "\""+pw + "\"";
        var obj = jQuery.parseJSON("{" + data + "}");
        $.ajax({
            type: "GET",
            url: url,
            data: obj,
            error: function(error) {
                    handleError(error);
                },
            success: function(result){
                onSuccess(result);
            },
            dataType: "JSON"
        });
    }


    function handleError(error) {
        alert("error: " + error.status);
    }

    function onSuccess(result) {
        $.cookie("userID", result);
        $.cookie("[name='username']").val();
        alert("cookies are set!(yum!)");
    }

});