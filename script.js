const header = document.querySelector("header");
      const menuToggler = document.querySelectorAll("#menu_toggle");

      menuToggler.forEach(toggler => {
        toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
      });
    

      const nav = document.querySelector('.nav');

// Listen for scroll events
window.addEventListener('scroll', function() {
    if (window.scrollY > 10) { // When scroll is more than 50px
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
const professorData = {
    id: 1,
    name: "Professor John Doe",
    department: "Computer Science",
    expertise: "Artificial Intelligence, Machine Learning, Data Science",
    email: "john.doe@sliet.ac.in",
    bio: "Professor John Doe has over 20 years of experience in teaching and research in the field of AI and Machine Learning.",
    image: "professor-profile.jpg", // Replace with the actual image path
    events: [
        { title: 'Booked', start: '2024-10-18T10:00:00', end: '2024-10-18T11:00:00', color: '#ff6868' },
        { title: 'Available', start: '2024-10-19T13:00:00', end: '2024-10-19T14:00:00', color: '#84c1ff' }
    ]
};

// Function to load professor details dynamically
function loadProfessorDetails() {
    // Set professor details in the profile section
    document.getElementById('professorName').innerText = professorData.name;
    document.getElementById('professorDepartment').innerText = professorData.department;
    document.getElementById('professorExpertise').innerText = professorData.expertise;
    document.getElementById('professorEmail').innerText = professorData.email;
    document.getElementById('professorBio').innerText = professorData.bio;
    document.getElementById('professorImage').src = professorData.image; // Set the professor's image source

    // Initialize the calendar with the professor's events
}
initializeCalendar(professorData.events);

function initializeCalendar(events) {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: events,
        eventClick: function(info) {
            if (info.event.title === 'Available') {
                alert('You have selected the slot: ' + info.event.start.toLocaleString());
                // Here you can add code to handle booking the slot
            } else {
                alert('This slot is already booked!');
            }
        }
    });
    calendar.render();
}

//document.addEventListener('DOMContentLoaded', loadProfessorDetails);