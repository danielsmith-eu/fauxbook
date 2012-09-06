function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
        
$(document).ready(function(){
    // template
    var like_template = "<div class='likebox'><div class='like'></div><div class='liketxt'><%= like %></div></div>";

    // data loaded from friends.js
    $.each(window.friends, function(uri, person){
        if (uri == getParameterByName("friend")){
            // this is our friend
            var name = person["Name/Label"][0]; // must be present
            $(".littlepic").html(name);

            $.each(person['likes'], function(){
                var like = this;
                var div = _(like_template).template({"like": like});
                div = $(div);
                $("#likes").append(div);
            });


        }

    });
});
