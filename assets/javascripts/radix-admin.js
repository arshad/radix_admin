(function($) {
Drupal.behaviors.radix_admin = {
  attach: function (context, settings) {
    $('#radix-admin-menu > ul.menu > li', context).mouseenter(function () {
      $(this).addClass('over').find('ul.menu').show();
    });
    $('#radix-admin-menu > ul.menu > li', context).mouseleave(function () {
      $(this).removeClass('over').find('ul.menu').hide();
    });
  }
};
})(jQuery);
