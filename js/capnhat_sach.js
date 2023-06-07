const inputImg = document.getElementById('image-file');
const previewImg = document.getElementById('preview-img');

inputImg.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();
  
  reader.addEventListener('load', function() {
    previewImg.src = reader.result;
  });
  
  if (file) {
    reader.readAsDataURL(file);
  }
});