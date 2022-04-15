const callNotification = ({ title='', text='', type, extra = '', img='', full }) => {
  const wrapper = $(`.rc-notification.rc-${full ? 'full' : type} > span`);
  const left = type === 'right' ? 'calc(-100% + 100vw)' : '0px';
  wrapper.append(`
    <div class="rc-notification-notice rc-notification-notice-closable ${full ? 'full' : (`${type}-up` || 'left-up')}" style="top: 0; left: ${left};">
        <div class="rc-notification-notice-content">
            <div class="notification notification--${extra} ${full ? 'notification--full-wide' : '' }">
                ${img ? `<div class="notification__image"><img src=${img} alt=""></div>` : ''}
                <h5 class="notification__title bold-text">${title}</h5>
                <p class="notification__message">${text}</p>
            </div>
            <a tabindex="0" class="rc-notification-notice-close notification--cross-${extra}">
              <span class="rc-notification-notice-close-x"><span class="lnr lnr-cross"></span></span>
            </a>
        </div>
    </div>
  `);
  wrapper.find('.rc-notification-notice-close-x').last().on('click', function() {
    $(this).parent().parent().remove();
  });
  // setTimeout(()=>{
  //   wrapper.find('.rc-notification-notice').last().remove();
  // }, 3000)
};

$(".notification-caller").on('click', function (){
      callNotification({
        title: $(this).attr('data-notification-title'),
        text:  $(this).attr('data-notification-text'),
        type:  $(this).attr('data-notification-type'),
        extra: $(this).attr('data-notification-extra'),
        img:   $(this).attr('data-notification-img'),
        full:  $(this).attr('data-notification-full'),
      })
});

