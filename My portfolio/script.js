
document.addEventListener("DOMContentLoaded", function () {
    
    
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.padding = "12px 0";
            navbar.style.backgroundColor = "#0b0c10";
        } else {
            navbar.style.padding = "20px 0";
            navbar.style.backgroundColor = "rgba(11, 12, 16, 0.95)";
        }
    });

   
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            
            const name = document.getElementById("userName").value;
            
            
            alert(`Thank you, ${name}! Your message has been received successfully.`);
            
            contactForm.reset(); 
        });
    }
});