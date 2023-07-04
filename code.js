const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

//sliding images 



var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var currentSlideIndex = 0;
    var slideInterval;

    // Function to show a specific slide
    function showSlide(slideIndex) {
      if (slideIndex < 0 || slideIndex >= slides.length) {
        return;
      }
      
      // Hide all slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
      }
      
      // Show the selected slide
      slides[slideIndex].classList.add("active");
      dots[slideIndex].classList.add("active");
      
      currentSlideIndex = slideIndex;
      
      // Reset the slide interval
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000); // Adjust the slide interval here
    }

    // Function to show the next slide
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
    }
    
    // Function to show the previous slide
    function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
      }
      showSlide(currentSlideIndex);
    }
    
    // Start the slide interval
    slideInterval = setInterval(nextSlide, 3000); // Adjust the slide interval here





//sliding images end

//Empolye list start

const employees = [
    { name: 'Karthik', post: 'Chairperson', photo: 'images/karthik.jpg' },
    { name: 'Achu', post: 'Secretary', photo: 'images/achu.jpg' },
    { name: 'Gokul Das', post: 'Treasurer', photo: 'images/gokul.jpg' },
    { name: 'Anoop', post: 'Vice Chairperson', photo: 'images/anoop.jpg' },
    { name: 'kiran', post: 'Members', photo: 'images/vava.jpg' },
    { name: 'Balu', post: 'Members', photo: 'images/balu.jpg' },
    { name: 'Amalraj', post: 'Members', photo: 'images/amalraj.jpg' },
    { name: 'Rahul', post: 'Members', photo: 'images/rahul.jpg' },
    { name: 'Hareesh',post: 'Members', photo: 'images/hareesh.jpg' },
    { name: 'Manoj',post: 'Members', photo: 'images/manoj.jpg' },
    { name: 'Kalesh', post: 'Members', photo: 'images/kalesh.jpg' },
    { name: 'Gopan', post: 'Members', photo: 'images/gopan.jpg' },
    { name: 'Monish', post: 'Members', photo: 'images/monish.jpg' },
    { name: 'Vishal', post: 'Members', photo: 'images/vishal.jpg' },
    { name: 'Kiran', post: 'Members', photo: 'images/kiran.jpg' },
    { name: 'Unni', post: 'Members', photo: 'images/unni.jpg' },
    { name: 'Vishnu', post: 'Members', photo: 'images/vishnu.jpg' },
    { name: 'Shyam', post: 'Members', photo: 'images/shyam.jpg' },
    { name: 'Suraj', post: 'Members', photo: 'images/suraj.jpg' },
    { name: 'Praveen', post: 'Members', photo: 'images/praveen.jpg' },
    { name: 'Avinash', post: 'Members', photo: 'images/avinash.jpg' },
    { name: 'Anandhu', post: 'Members', photo: 'images/pathan.jpg' },
];
function generateEmployeeList() {
  const employeeList = document.getElementById('employeeList');

  employees.forEach(employee => {
    const li = document.createElement('li');
    li.classList.add('employee-item');

    const img = document.createElement('img');
    img.src = employee.photo;
    img.alt = employee.name;
    li.appendChild(img);

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('employee-details');

    const h3 = document.createElement('h3');
    h3.textContent = employee.name;
    detailsDiv.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = employee.post;
    detailsDiv.appendChild(p);

    li.appendChild(detailsDiv);
    employeeList.appendChild(li);
  });
}

generateEmployeeList();

//Empolye list end 

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
