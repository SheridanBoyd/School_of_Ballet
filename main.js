function gallery(){
    $('#gallery img').on('click', display)
};

function display(e){
    console.log('inside the thing')
    // target = $(this).attr('src');
    // console.log(target)
    // $("#imgdisplay").attr('src',target);
};

$(document).ready(function(){
    console.log('the document is ready')
    gallery()

    console.log('the document is also ready')
});
