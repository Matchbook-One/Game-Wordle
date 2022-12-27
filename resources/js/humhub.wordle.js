humhub.module('wordle', (module, require, $) => {

  const init = function () {
    console.log('wordle module activated')
  }

  const hello = function () {
    alert(`${module.text('hello')} - ${module.config.username}`)
  }

  module.export({
    //uncomment the following line in order to call the init() function also for each pjax call
    //initOnPjaxLoad: true,
    init: init,
    hello: hello
  })
})