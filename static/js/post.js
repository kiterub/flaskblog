//$(document).ready(function(){
    $('#mycomment').click(function(){
        $.post('/_comment',$('#commentform').serialize(),
            function(data){
                $("#commentlist").append(data.comment_html);
            }
        );
    });
//});
