$(document).ready(function(){

  $('.step1').show();
  $('.step2').hide();
  $('.step3').hide();

  $('button.next').on('click', function(e){
    e.preventDefault();
    const steps = $(".wizard__steps .wizard__step");
    let activeIndex = 0;
    steps.each(function(index, val) {
      if($(val).hasClass('wizard__step--active')){
        activeIndex = index;
      }
    });
    if(steps.eq(activeIndex+1).length){
      $('button.previous').removeClass('disabled');
      steps.removeClass('wizard__step--active');
      steps.eq(activeIndex+1).addClass('wizard__step--active');
      if(!steps.eq(activeIndex+2).length){
        $('button.next').addClass('disabled');
      }
      $(`.step${activeIndex+1}`).hide();
      $(`.step${activeIndex+2}`).show();
    }
  });

  $('button.previous').on('click', function(e){
    e.preventDefault();
    const steps = $(".wizard__steps .wizard__step");
    let activeIndex = 0;
    steps.each(function(index, val) {
      if($(val).hasClass('wizard__step--active')){
        activeIndex = index;
      }
    });
    if(steps.eq(activeIndex-1).length){
      $('button.next').removeClass('disabled');
      steps.removeClass('wizard__step--active');
      steps.eq(activeIndex-1).addClass('wizard__step--active');
      if(activeIndex-1<=0){
        $('button.previous').addClass('disabled');
      }
      $(`.step${activeIndex+1}`).hide();
      $(`.step${activeIndex}`).show();
    }
  });
});
