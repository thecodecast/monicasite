$(function(){
  var $gridContainer  = document.getElementById('grid'),
      $masonry;
  imagesLoaded($gridContainer, function(){
      $masonry  = new Masonry($gridContainer);
  });

  var $postItems      = $('.post-item'),
      $postContainer  = $('#post-content-box'),
      $mainContainer  = $('#main-content'),
      $close          = $('#close-box');
  $postItems.click(function(e){
    e.preventDefault();
    $postContainer.load('single.html', function(response){
      $($gridContainer).fadeOut();
      $postContainer.addClass('translateleft');
      $close.show();
    })
  });

  $close.click(function(e){
    e.preventDefault();
    $postContainer.removeClass('translateleft');
    $close.hide();
    $($gridContainer).fadeIn();
  });
});
