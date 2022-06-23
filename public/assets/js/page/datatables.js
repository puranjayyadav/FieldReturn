$('[data-checkboxes]').each(function() {
  const me = $(this);
  const group = me.data('checkboxes');
  const role = me.data('checkbox-role');

  me.change(function() {
    const all = $(
      `[data-checkboxes="${group}"]:not([data-checkbox-role="dad"])`
    );
    const checked = $(
      `[data-checkboxes="${group}"]:not([data-checkbox-role="dad"]):checked`
    );
    const dad = $(`[data-checkboxes="${group}"][data-checkbox-role="dad"]`);
    const total = all.length;
    const checked_length = checked.length;

    if (role == 'dad') {
      if (me.is(':checked')) {
        all.prop('checked', true);
      } else {
        all.prop('checked', false);
      }
    } else if (checked_length >= total) {
      dad.prop('checked', true);
    } else {
      dad.prop('checked', false);
    }
  });
});

$('#table-2').dataTable({
  columnDefs: [{ sortable: false, targets: [0, 2, 3] }],
  order: [[1, 'asc']] //column indexes is zero based
});
$('#save-stage').DataTable({
  scrollX: true,
  stateSave: true
});
// $('#tableExport').DataTable({});

$(document).ready(function() {
  // console.log('ajax');
  $.ajax({
    url: '/api/v1/metallurgical',
    dataType: 'json',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    success: function(data) {
      let tr;
      const metaldata = data.data.data;
      // console.log(metaldata);
      for (let i = 0; i < metaldata.length; i++) {
        tr += '<tr>';
        tr += `<td>${metaldata[i].registrationNumber}</td>`;
        tr += `<td>${metaldata[i].FIP}</td>`;
        tr += `<td>${metaldata[i].MFD}</td>`;
        tr += `<td>${metaldata[i].customer}</td>`;
        tr += `<td>${metaldata[i].complaintDescription}</td>`;
        tr += `<td>${metaldata[i].BDS}</td>`;
        tr += `<td>${metaldata[i].finalStatus}</td>`;
        tr += `<td><a href="/metallurgical/${metaldata[i].slug}" class="btn btn-success">Details</a></td>`;
        tr += '</tr>';
      }
      $('#tableExport').append(tr);
      tblFormation();
    }
  });
  function tblFormation() {
    $('#tableExport').DataTable({
      searching: true,
      processing: true,
      deferRender: true,

      dom: 'Bfrtip',
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });
  }
});
