$('#swal-1').click(function() {
  swal('Hello');
});

$('#swal-2').click(function() {
  swal('Good Job', 'You clicked the button!', 'success');
});

$('#swal-3').click(function() {
  swal('Good Job', 'You clicked the button!', 'warning');
});

$('#swal-4').click(function() {
  swal('Good Job', 'You clicked the button!', 'info');
});

$('#swal-5').click(function() {
  swal('Good Job', 'You clicked the button!', 'error');
});

$('#swal-6').click(function() {
  swal({
    title: 'Are you sure?',
    text: 'Once updated, you will submit data in database!',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      swal('Poof! Data Succesfully updated!', {
        icon: 'success'
      });
    } else {
      swal('Data not updated!');
    }
  });
});

$('#swal-7').click(function() {
  swal({
    title: 'What is your name?',
    content: {
      element: 'input',
      attributes: {
        placeholder: 'Type your name',
        type: 'text'
      }
    }
  }).then(data => {
    swal(`Hello, ${data}!`);
  });
});

$('#swal-8').click(function() {
  swal('Submitting form, uploading images!, this might take some while', {
    buttons: false,
    icon: 'success',
    timer: 5000
  }).then(
    window.setTimeout(() => {
      location.assign('/metallurgical');
    }, 5000)
  );
});
