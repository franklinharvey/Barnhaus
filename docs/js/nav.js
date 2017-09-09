function findBootstrapEnvironment() {
  var envs = ['xs', 'sm', 'md', 'lg'];
  var $el = $('<div>');
  $el.appendTo($('body'));

  for (var i = envs.length - 1; i >= 0; i--) {
    var env = envs[i];
    $el.addClass('hidden-' + env);
    if ($el.is(':hidden')) {
      $el.remove();
      return env
    }
  }
}

$(document).ready(function() {
  var $body = $('body');
  var $nav = $('#nav');
  var navTop = $nav[0].offsetTop;
  var navHeight = $nav[0].clientHeight;
  var bsEnv = findBootstrapEnvironment();
  var initAffix = function() {
    $body.on('affix-top.bs.affix', function() {
      $body.css('padding-top', 0);
      $body.removeClass('navbar-affixed');
    });
    $body.on('affix.bs.affix', function() {
      $body.css('padding-top', navHeight + 20);
      $body.addClass('navbar-affixed');
    });
    $nav.on('affix.bs.affix', function() {
      $nav.addClass('navbar-fixed-top');
    });
    $nav.on('affix-top.bs.affix', function() {
      $nav.removeClass('navbar-fixed-top');
    });
    $nav.affix({
      offset: {
        top: function() {
          return navTop;
        }
      }
    });
  }
  if (bsEnv === 'xs') {
    $nav.addClass('navbar-fixed-top');
    $body.css('padding-top', $nav[0].clientHeight + 15);
  } else {
    $nav.addClass('navbar-brand-hidden');
    initAffix();
  }
});