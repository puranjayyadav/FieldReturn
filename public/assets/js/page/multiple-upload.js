// DropzoneJS
if (window.Dropzone) {
  Dropzone.autoDiscover = false;
}

const dropzone = new Dropzone('#mydropzone', {
  url: '#'
});

const minSteps = 6;
const maxSteps = 60;
const timeBetweenSteps = 100;
const bytesPerStep = 100000;

dropzone.uploadFiles = function(files) {
  const self = this;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    totalSteps = Math.round(
      Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep))
    );

    for (let step = 0; step < totalSteps; step++) {
      const duration = timeBetweenSteps * (step + 1);
      setTimeout(
        (function(file, totalSteps, step) {
          return function() {
            file.upload = {
              progress: (100 * (step + 1)) / totalSteps,
              total: file.size,
              bytesSent: ((step + 1) * file.size) / totalSteps
            };

            self.emit(
              'uploadprogress',
              file,
              file.upload.progress,
              file.upload.bytesSent
            );
            if (file.upload.progress == 100) {
              file.status = Dropzone.SUCCESS;
              self.emit('success', file, 'success', null);
              self.emit('complete', file);
              self.processQueue();
            }
          };
        })(file, totalSteps, step),
        duration
      );
    }
  }
};
