// Function to show popup
function showPopup() {
  document.getElementById('popup-ad').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Function to close popup
function closePopup() {
  document.getElementById('popup-ad').classList.add('hidden');
  document.getElementById('overlay').style.display = 'none';
}

// Function to share to WhatsApp
function shareToWhatsApp() {
  const message = `
🚀 Hai Sobat Medsos! 🚀

Bingung cari cara cepat buat medsosmu makin hits? 🤔 Jangan khawatir! Ada solusi keren buat kamu di JajanMedsos! 🌟
  
🌈 Apa sih JajanMedsos itu?
👉 Situs resmi Boost Medsos yang AMAN dan TERPERCAYA! Mulai dari Rp 15.000 aja, kamu bisa dapetin banyak follower dan keuntungan seru lainnya! 💰✨

🎉 Nikmati medsosmu makin seru dengan:
1️⃣ Diskon seru setiap bulan! 💸
2️⃣ Harga spesial buat pelanggan pertama! 🌈
3️⃣ Min Order Mulai dari Rp 15.000 dapetin banyak follower, likes, subscriber dan lainnya! 🚀

🔥 JajanMedsos: Aman, Nyaman, dan Pasti Bikin Penasaran! Klik sekarang di:
[https://jajanmedsos.netlify.app] 🚀💨

#JajanMedsos #BoostMedsos 🔥✨`;
  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, '_blank');
}

// Show popup when the page loads
window.onload = function() {
  showPopup();
};

// Close popup when close button is clicked
document.querySelector('.close-btn').addEventListener('click', closePopup);

// Close popup when overlay is clicked
document.getElementById('overlay').addEventListener('click', closePopup);












// Get the form popup element
var formPopup = document.getElementById("form-popup");

// Get the form input elements
var nameInput = document.getElementById("name");
var usernameInput = document.getElementById("username");
var packageSelect = document.getElementById("package");

// Function to share a welcome message on WhatsApp
function shareMessage() {
  // Welcome message
  var welcomeMessage = `
🚀 Hai Sobat Medsos! 🚀

 Bingung cari cara cepat buat medsosmu makin hits? 🤔 Jangan khawatir! Ada solusi keren buat kamu di JajanMedsos! 🌟
  
🌈 Apa sih JajanMedsos itu?
👉 Situs resmi Boost Medsos yang AMAN dan NYAMAN! Mulai dari Rp 20.000 aja, kamu bisa dapetin banyak follower dan keuntungan seru lainnya! 💰✨

🎉 Nikmati medsosmu makin seru dengan:
1️⃣ Diskon seru setiap bulan! 💸
2️⃣ Harga spesial buat pelanggan pertama! 🌈
3️⃣  Min Order Mulai dari Rp 20.000 dapetin banyak follower, likes, subscriber dan lainnya! 🚀

🔥 JajanMedsos: Aman, Nyaman, dan Pasti Bikin Penasaran! Klik sekarang di:
[https://jajanmedsos.netlify.app] 🚀💨

#JajanMedsos #BoostMedsos #CariTauDong 🔥✨`;

  // Encode the message
  var encodedMessage = encodeURIComponent(welcomeMessage);

  // Create the WhatsApp URL
  var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodedMessage;

  // Open the URL in a new tab
  window.open(whatsappUrl, "_blank");
}

// Function to send claim form data to WhatsApp
function sendData() {
  var name = nameInput.value;
  var username = usernameInput.value;
  var selectedPackage = packageSelect.options[packageSelect.selectedIndex].text;

  if (name && username) {
    // Nomor WhatsApp tujuan
    var whatsappNumber = "+6285880856341";

    // Send the form data via WhatsApp
    var whatsappMessageWithForm = `
https://jajanmedsos.netlify.app

Assalamualaikum ka
Saya mau Klaim Garansi yah ka, dengan deskripsi berikut:

Nama Pelanggan: ${name}
Username atau Link: ${username}
Paket Item: ${selectedPackage}

Selanjutnya saya akan kirimkan gambar Screenshot Share Link ke 3 Grup
      `;

    // URL untuk membuka aplikasi WhatsApp dengan pesan yang diisi
    var whatsappUrlWithForm = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessageWithForm);

    // Buka URL dengan data formulir di WhatsApp
    window.open(whatsappUrlWithForm, "_blank");
  } else {
    alert("Harap isi semua kolom.");
  }
}


// Function to show the form popup
function showForm() {
  var formPopup = document.getElementById("form-popup");
  var overlay = document.getElementById("overlay");

  // Add a transition effect to the form popup
  formPopup.style.transition = "0.3s";
  // Set the display property to block
  formPopup.style.display = "block";
  // Set the opacity property to 1
  formPopup.style.opacity = "1";
  overlay.style.display = "block";
}

// Function to close the form popup
function closeForm() {
  var formPopup = document.getElementById("form-popup");
  var overlay = document.getElementById("overlay");

  // Add a transition effect to the form popup
  formPopup.style.transition = "0.3s";
  // Set the opacity property to 0
  formPopup.style.opacity = "0";
  // Set a timeout function to set the display property to none after 0.3 seconds
  setTimeout(function () {
    formPopup.style.display = "none";
  }, 300);
  overlay.style.display = "none";
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------Paket Hemat------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function openOrderHemat() {
    document.getElementById('orderHemat').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling on background
  }
  
  function closeOrderHemat() {
    document.getElementById('orderHemat').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on background
  }
  
  function sendMessage() {
    const packageValue = document.getElementById('package').value;
    const linkValue = document.getElementById('link').value;
    const itemPaketValue = document.getElementById('itemPaket').value;
  
    const message = `
  https://jajanmedsos.netlify.app
  
  _${"Assalamualaikum ka.."}_
  Saya Mau Order Paket hemat ini dengan deskripsi berikut:
  
  - *Item Paket:* ${itemPaketValue}
  - *Paket:* ${packageValue}
  - *Username/Link:* ${linkValue}
  
  ${itemPaketValue}|${linkValue}|
  `;
  
    const whatsappLink = `https://api.whatsapp.com/send?phone=+6285880856341&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  }
  

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------step------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


$(document).ready(function(){
    $('.step-owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        rewind: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        navText: ["<div class='step-nav-button owl-prev'>‹</div>", "<div class='step-nav-button owl-next'>›</div>"]
    });
});



 