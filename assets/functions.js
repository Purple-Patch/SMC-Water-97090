$(document).ready(function(){
    loop();
})

function loop(){
    function firstAnim(){
        $('#waterlogo').addClass('animate_textLeftToRight');
        $('#logo1').addClass('animate_textRightToLeft');
        $('#text1').addClass('animate_bigToSmall');
    }
    
    function fdelay(){
        setTimeout(function (){
            $('#fbg').fadeOut();
        },3000)
    }
    
    function secondAnim(){
        setTimeout(function () {
            $('#logo2').addClass('animate_textRightToLeft');
            $('#waterlogo2').addClass('animate_textLeftToRight');
            $('#text2').addClass('animate_textLeftToRight');
            $('#text3').addClass('animate_textLeftToRight');
            $('#text4').addClass('animate_textLeftToRight');
            $('#sakib').addClass('animate_sakibLeftToRight');
        },3000);
    }

    function sdelay(){
        setTimeout(function (){
            $('#secbg').fadeOut();
        },6000)
    }

    firstAnim();
    fdelay();
    secondAnim();
    // sdelay();
}

document.getElementById('fbg').ondragstart = function() { return false; };
document.getElementById('text1').ondragstart = function() { return false; };


