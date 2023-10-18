let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delya:200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-image, .portfolio-box, .contact form', { origin:
 'buttom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value ,
        email_id : document.getElementById("email_id"). value ,
        message : document.getElementById("message").value
    }
    emailjs.send("service_q3wq23l", "template_t8160tn", params)
    .then(
        message => {
          if(message != "OK"){
              swal("Successful", "You clicked the button!", "success");
          }
          else{
              swal("Error", "You clicked the button!", "Error");
          }
        }
      );//.then(function(res){
        //alert("Success! " + res.status);
    //})
}