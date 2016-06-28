$(document).ready(function(){
    document.querySelector('.pluginDemonstration0').setAttribute('style','display:block');
    document.querySelector('.pluginDemonstration1').setAttribute('style','display:none');
    document.querySelector('.pluginDemonstration2').setAttribute('style','display:none');
    document.querySelector('.pluginDemonstration3').setAttribute('style','display:none');

    document.querySelector('.plugin1').addEventListener('click', function(){
        document.querySelector('.pluginDemonstration0').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration1').setAttribute('style','display:block');
        document.querySelector('.pluginDemonstration2').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration3').setAttribute('style','display:none');
    });

    document.querySelector('.plugin2').addEventListener('click', function(){
        document.querySelector('.pluginDemonstration0').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration1').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration2').setAttribute('style','display:block');
        document.querySelector('.pluginDemonstration3').setAttribute('style','display:none');
    });

    document.querySelector('.plugin3').addEventListener('click', function(){
        document.querySelector('.pluginDemonstration0').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration1').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration2').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration3').setAttribute('style','display:block');
    });


    $('.lettering-demo').lettering();
    for(var i = 0; i < 1000; i++) {
        var className = ".char" + (i+1).toString();
        var elem = $(className);
        if(elem != null) {
            var color = Math.floor(Math.random()*16777215).toString(16);
            elem.css({"color": "#"+color});
        }
    }
})



$(":submit").click(function () {
$("#showme").show();
});
  $('.type-it').typeIt({
       speed: 200,
       lifeLike: true,
       startDelay: 3000,
       deleteSpeed: 100,
  })
  .tiPause(200)
  .tiType('I really like Front End Web Development. ')
  .tiSettings({speed: 150})
  .tiType('When it gets really hard...')
  .tiType('everyone helps me out. ')
  .tiPause(150)
  .tiType('So I wanted to let you know....')
  .tiType('I APPRECIATE')
  .tiDelete(10)
  .tiType('REALLY APPRECIATE YOU !!!!')
  .tiBreak()
  .tiBreak()
  .tiType(':-)')
  .tiBreak()
  .tiBreak()
  .tiType('Thanks, James');
