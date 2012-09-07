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
    var friend_template = "<div class='person'><div class='face'></div><div class='info'><div class='name'><%= name %></div></div></div>";

    // data loaded from friends.js
    $.each(window.friends, function(uri, person){
        var name = person["Name/Label"][0]; // must be present
        var likes = person['likes'];
/*        $.each(person, function(predicate, vals){
            $.each(vals, function(){
                var val = this+"";

            });
        });
        */
        var div = _(friend_template).template({"name": name});
        div = $(div);
        $("#friends").append(div);

        div.click(function(){
            var link = window.friendurl+"?friend="+encodeURIComponent(uri);
            window.location = link;
        });
    });
});
