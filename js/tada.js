var current_button = 0;

setInterval(function(){
    if(current_button===$('.tada').length){
        $('.tada').addClass('animated');
        current_button=0;
    }else{
        $('.tada').removeClass('animated');
        $('.tada:eq('+current_button+')').addClass('animated');
        current_button++;
    }
},1000)