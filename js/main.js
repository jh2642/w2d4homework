
$(":submit").click(function () {
$("#showme").show();
});
  $('.type-it').typeIt({
       speed: 200,
       lifeLike: true,
       startDelay: 3000,
       deleteSpeed: 100
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
