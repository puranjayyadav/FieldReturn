$(document).ready(() => {
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };
  const addFile = function (self, file) {
    getBase64(file).then(data => {
      $(self.element).parent().find('.dropzone').append(`
        <aside class="dropzone__img">
            <img src='${data}' alt="drop-img" />
            <p class="dropzone__img-name">${file.name}</p>
            <button class="dropzone__img-delete" type="button">
              Remove
            </button>
          </aside>
      `);
      $(".dropzone__img-delete").on('click', function(){
        $(this).parent().remove();
      });
    });
  };

  const dropzones = ['dropzone1', 'dropzone2'];
  dropzones.forEach(dropzoneId => {
    if(document.getElementById(`${dropzoneId}`)){
      $(`#${dropzoneId}`).dropzone({
        init: function () {
          this.on('addedfile', function(file){ addFile(this, file);});
        },
        url: "/",
        clickable: `#${dropzoneId}-input`,
        dictDefaultMessage: '',
        previewTemplate: `<div></div>`
      });
    }
  });
});
