$(document).ready(function(){
    var buttonStart = $('#buttonStart')
    var fieldUsername = $('#fieldUsername')

    buttonStart.on('click', function(){
        fieldUsername.toggleClass('showField')
        formHome.removeClass('topContainer')
    })
    
    var username = $('#username')
    var formHome = $('#formHome')
    
    username.on('focus', function(){
        formHome.addClass('topContainer')
    })


})