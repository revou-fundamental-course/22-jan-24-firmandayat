let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".slider");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = "block";
  console.log("gambar ke" + start);
  start++;

  setTimeout(otomatis, 3000);
}

const name = document.getElementById("name");
const email = document.getElementById("email");
const button = document.getElementById('Our')

button.addEventListener('click', function(){
  let a = name.value
  let b = email.value

  if (!a) {
    const nameError = document.getElementById('name-error')
    nameError.classList.add('name-error')

    nameError.innerText='Nama wajib diisi*'
  }

  if (!b) {
    const emailError = document.getElementById("email-error");
    emailError.classList.add("error-message");

    emailError.innerText = "Email wajib diisi*";
  }

})