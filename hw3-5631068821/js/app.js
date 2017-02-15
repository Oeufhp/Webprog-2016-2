var imgSrc,imgAttr;
$(document).on("click","#stamper-panel img",function(e){
    imgAttr=$(this).attr('stamper');
    console.log(imgAttr);
    if(imgAttr==='star'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='"+imgAttr+"']").attr('src');
        console.log(imgSrc);
        $(this).addClass('current');
        $("#stamper-panel img[stamper$='heart']").removeClass('current');
        $("#stamper-panel img[stamper$='mickey']").removeClass('current');
        $("#stamper-panel img[stamper$='paw']").removeClass('current');
        $("#stamper-panel img[stamper$='crown']").removeClass('current');
    }
    else if(imgAttr==='heart'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='"+imgAttr+"']").attr('src');
        console.log(imgSrc);
        $(this).addClass('current');
        $("#stamper-panel img[stamper$='star']").removeClass('current');
        $("#stamper-panel img[stamper$='mickey']").removeClass('current');
        $("#stamper-panel img[stamper$='paw']").removeClass('current');
        $("#stamper-panel img[stamper$='crown']").removeClass('current');
    }
    else if(imgAttr==='mickey'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='"+imgAttr+"']").attr('src');
        console.log(imgSrc);
        $(this).addClass('current');
        $("#stamper-panel img[stamper$='star']").removeClass('current');
        $("#stamper-panel img[stamper$='heart']").removeClass('current');
        $("#stamper-panel img[stamper$='paw']").removeClass('current');
        $("#stamper-panel img[stamper$='crown']").removeClass('current');
    }
    else if(imgAttr==='paw'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='"+imgAttr+"']").attr('src');
        console.log(imgSrc);
        $(this).addClass('current');
        $("#stamper-panel img[stamper$='star']").removeClass('current');
        $("#stamper-panel img[stamper$='heart']").removeClass('current');
        $("#stamper-panel img[stamper$='mickey']").removeClass('current');
        $("#stamper-panel img[stamper$='crown']").removeClass('current');
    }
    else if(imgAttr==='crown'){
        imgSrc=$("#hidden-stamp-marks img[stamper$='"+imgAttr+"']").attr('src');
        console.log(imgSrc);
        $(this).addClass('current');
        $("#stamper-panel img[stamper$='star']").removeClass('current');
        $("#stamper-panel img[stamper$='heart']").removeClass('current');
        $("#stamper-panel img[stamper$='mickey']").removeClass('current');
        $("#stamper-panel img[stamper$='paw']").removeClass('current');
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
