// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for header height
                behavior: 'smooth',
            });
        }
    });
});

// Contact Form Validation
const form = document.querySelector('#contact form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields!');
        } else {
            alert('Thank you for contacting us!');
            form.reset();
        }
    });
}

// Generate QR Code
const qrCodeContainer = document.getElementById('qr-code');
if (qrCodeContainer) {
    const qrCode = new QRCode(qrCodeContainer, {
        text: "https://yourwebsite.com", // Replace with your website URL
        width: 128,
        height: 128,
    });
}
