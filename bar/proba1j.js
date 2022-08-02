$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.logggo').addClass('fixed-header');
       
    }
    else {
        $('.logggo').removeClass('fixed-header');
        
    }
});

var main=function(){
    var szun=false;
    $("bal").click(function(){
        szun=true;
        $('.show>div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .$(content).appendTo('show');

    });

    $("jobb").click(function(){
        szun=true;
        $('.show>div:first')
        .fadeOut(1000)
        .prependTo('#slideshow')
        .next()
        .fadeIn(1000)
        .end()
        .$(content).appendTo('show');

    });

    setInterval(function(){
        if(szun===false){
            $('.show>div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo(".show");
        }
    },5000);
}
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
