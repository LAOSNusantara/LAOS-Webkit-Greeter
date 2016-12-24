$(document).ready(function(){
var kontenAwal = $('#isiModal').html();
    
$('.action-reboot').click(function(){
    $('.modal-header').html('RESTART');
    $('#isiModal').html(''+kontenAwal);   
//    $('#restart').css('display','block'); 
    $('#restart').show(); 
});
    
$('.action-lang').click(function(){
    $('.modal-header').html('Change Language');
    $('#isiModal').html('<form><select id="lang" tabindex="1"/></form>');
    $('#restart').show(); 
});
    
$('.action-shutdown').click(function(){
    $('.modal-header').html('SHUTDOWN');
    $('#isiModal').html(''+kontenAwal); 
    $('#restart').show();
});
    
$(document).on('click','#restart-close',function(){
    $('#restart').hide();
});
    
$(document).on('click','#restart-no',function(){
    $('#restart').hide();
});
    
$(document).on('click','#restart-yes',function(){
    if ($('.modal-header').html() == 'RESTART') {
    lightdm.restart();
    }else{
    lightdm.shutdown();
    }
});
}); 