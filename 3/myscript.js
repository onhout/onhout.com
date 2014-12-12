$(document).ready(function(){
    $("#test").click(function(event){
        event.preventDefault();
        $.getJSON("dictionary.json", function(data){
            var html='';
            $.each(data, function(entryIndex, entry){
                html += '<div class"entry">';
                html += '<h2 class="key">' + entry.key + '</h2>';
                if (entry.key2){
                    $.each(entry.key2, function(arrayIndex, line){
                        html += '<h3 class="key2">' + line + '</h3>';
                    });
                }
                html += '</div>';
            });
            $("#what").html(html);
        });
    });
});