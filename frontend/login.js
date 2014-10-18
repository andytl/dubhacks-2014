$(function() {
    $("#login_button")[0].addEventListener('click', signIn);

    function signIn() {
        var name = $("[name='username']").val();
        var pw = $("[name='password']").val();
        var url = "http://localhost:3000/user/";
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
        var uid = result.uid;
        document.cookie = "userId=" + uid;
        var username = $("[name='username']").val();
        document.cookie = "userName=" + username;
        window.location.href = "http://localhost:3000/static/goal_list.html";
    }

});
