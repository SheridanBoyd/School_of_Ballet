function gallery(){
    $('#gallery img').on('click', display)
};

function display(e){
    target = $(this).attr('src');
    console.log(target)
    $("#imgdisplay").attr('src',target);
};

$(document).ready(function(){
    gallery()
});
