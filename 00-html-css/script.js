// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const filterTechnology = document.querySelector("#filter-technology");
const filterLocation = document.querySelector("#location");
const filterExperience = document.querySelector("#experience-level");
const jobListings = document.querySelectorAll(".job-listing-card");

function filterJobs() {
  const selectedTech = filterTechnology.value.toLowerCase();
  const selectedLocation = filterLocation.value.toLowerCase();
  const selectedExperience = filterExperience.value.toLowerCase();

  jobListings.forEach((job) => {
    const jobText = job.textContent.toLowerCase();
    const matchesTech = selectedTech === "" || jobText.includes(selectedTech);
    const matchesLocation =
      selectedLocation === "" || jobText.includes(selectedLocation);
    const matchesExperience =
      selectedExperience === "" || jobText.includes(selectedExperience);

    if (matchesTech && matchesLocation && matchesExperience) {
      job.style.display = "";
    } else {
      job.style.display = "none";
    }
  });
}

filterTechnology.addEventListener("change", filterJobs);
filterLocation.addEventListener("change", filterJobs);
filterExperience.addEventListener("change", filterJobs);
