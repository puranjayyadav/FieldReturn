$(function(){
    $('.datepicker').datetimepicker({
      dateFormat: 'dd.mm.y',
      beforeShow: (input, inst) => {
        // modification classes
        const otherClasses = $(input).attr('class').split(' ').filter(x => x!== 'datepicker' && x!=='hasDatepicker');
        $(inst.dpDiv).attr('class').split(' ').forEach(x => {
          if(!['ui-datepicker','ui-widget','ui-widget-content','ui-helper-clearfix','ui-corner-all'].includes(x)){
            if(!otherClasses.includes(x)){
              $(inst.dpDiv).removeClass(x);
            }
          }
        });
        if(otherClasses.length > 0) {
          otherClasses.forEach( x =>  $(inst.dpDiv).addClass(x))
        }
      },
      onSelect: (date, inst) =>{
        // get val()
        const otherClasses = $(inst.input).attr('class').split(' ').filter(x => x!== 'datepicker' && x!=='hasDatepicker');
        // modification val if class timepicker
        if(!otherClasses.includes('timepicker')){
          $(inst.input).val(date.split(' ')[0])
        }
      }
      // timepicker show if has class timepicker
    }).timepicker({});
}());
