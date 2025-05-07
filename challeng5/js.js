const form = document.getElementById("MyForm");
const btn = document.querySelector(".submit");

function calculateSphereVolume() {
  radius = Number(form.radius.value);

  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  form.volume.value = volume.toFixed(2);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  calculateSphereVolume();
});
