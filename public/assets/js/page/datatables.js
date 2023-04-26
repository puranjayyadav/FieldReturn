{
  var url = window.location.href;
  var parts = url.split('/');
  var last_part = parts[parts.length - 1];
}

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
        tr += `<td><a href="/metallurgical/${metaldata[i]._id}" class="btn btn-success">Details</a></td>`;

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

// Table export for CSV report of individual pump .

$(document).ready(function() {
  console.log(last_part);

  $.ajax({
    url: '/api/v1/metallurgical/' + last_part,
    dataType: 'json',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    success: function(data) {
      let tr;
      const metaldata = data.data.data;
      console.log(metaldata);
      const dateString = metaldata.date;

      // Create a new Date object from the date string
      const Newdate = new Date(dateString);
      // Get the day and date using Date object methods
      const day = Newdate.toLocaleString('en-US', { weekday: 'short' });
      const dateNum = Newdate.getDate();
      const hours = Newdate.getHours();
      const minutes = Newdate.getMinutes();
      const years = Newdate.getFullYear();
      console.log(years);

      // Format the day and date into a shortened string
      const shortenedDateString = `${day} ${years} ${dateNum} ${hours}:${minutes} `;
      //console.log(shortenedDateString);
      tr += '<tr>';
      tr += `<td>${metaldata.registrationNumber}</td>`;
      tr += `<td>${shortenedDateString}</td>`;
      tr += `<td>${metaldata.complaintDescription}</td>`;
      tr += `<td>${metaldata.complaintDescriptionBDS}</td>`;
      tr += `<td>${metaldata.WJC}</td>`;
      tr += `<td>${metaldata.FIP}</td>`;
      tr += `<td>${metaldata.customer}</td>`;
      tr += `<td>${metaldata.KM}</td>`;
      tr += `<td>${metaldata.BDS}</td>`;
      tr += `<td>${metaldata.OECD}</td>`;
      tr += `<td>${metaldata.partsRecieved}</td>`;
      tr += `<td>${metaldata.complaintDescriptionI}</td>`;
      tr += `<td>${metaldata.DateClosing}</td>`;
      tr += `<td>${metaldata.finalStatus}</td>`;
      // for (let i = 0; i < metaldata.Images.length; i++) {
      // tr += `<td><img height="100" src="/img/mettalurgical/${metaldata.Images[i]}" width="100"></td>`;
      // }
      //tr += `<td><img height="100" src="/img/mettalurgical/${metaldata.Images[0]}" width="100"></td>`;
      tr += `<td><a href="/api/v1/metallurgical/${metaldata._id}/report" class="btn btn-success">Invoice</a></td>`;

      tr += '</tr>';

      $('#tableExportPump').append(tr);
      tblFormation();
    }
  });
  function tblFormation() {
    $('#tableExportPump').DataTable({
      searching: true,
      processing: true,
      deferRender: true
    });
  }
});
