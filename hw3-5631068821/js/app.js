var imgSrc,imgAttr;
$(document).on("click","#stamper-panel img",function(e){
    imgAttr=$(this).attr('stamper');
    console.log(imgAttr);
    // var imgSrc='';
    if(imgAttr==='star'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='star']").attr('src');
        console.log(imgSrc);
        var imgGlow=$('<img src="./img/bg_glow.png"/>');
        imgGlow.css({
            'position':'absolute',
            'margin-top':0
            // 'z-index':50
        })
        $('#star-div').append(imgGlow);
        
    }
    else if(imgAttr==='heart'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='heart']").attr('src');
        console.log(imgSrc);
    }
    else if(imgAttr==='mickey'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='mickey']").attr('src');
        console.log(imgSrc);
    }
    else if(imgAttr==='paw'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='paw']").attr('src');
        console.log(imgSrc);
    }
    else if(imgAttr==='crown'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='crown']").attr('src');
        console.log(imgSrc);
    }
});
$('#stamppad-canvas').click(function(e){
        var lx=e.pageX - $(this).offset().left;
        var ly=e.pageY - $(this).offset().top;
        var imgElem = $('<img src="' + imgSrc + '"/>');
        imgElem.css({
            position:'absolute',
            left:lx,
            top:ly
        })
        $(this).append(imgElem);
    });
