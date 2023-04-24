// Lấy danh sách ca thi
let cathi = ['cathi1', 'cathi2', 'cathi3', 'cathi4', 'cathi5'];

// Tạo các button tương ứng với từng ca thi và thêm chúng vào div có id là "buttons-container"
let container = document.getElementById('buttons-container');
for (let i = 0; i < cathi.length; i++) {
  let button = document.createElement('button');
  button.innerText = cathi[i];
  container.appendChild(button);
}