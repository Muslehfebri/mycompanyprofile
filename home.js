document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.querySelector(".hero img");
    const images = ["omah.png", "10.png", "11.png"];
    let currentIndex = 0;

    // Fungsi untuk mengganti gambar hero dan menetapkan lebar
    function changeHeroImage() {
        heroImage.src = images[currentIndex];
        heroImage.style.width = "100%"; // Menetapkan lebar gambar menjadi 100%
        heroImage.style.height = "auto"; // Mempertahankan rasio aspek gambar
        currentIndex = (currentIndex + 1) % images.length; // Pindah ke gambar berikutnya
    }

    // Panggil fungsi untuk mengatur gambar pertama
    changeHeroImage();

    // Interval untuk mengganti gambar setiap 3 detik
    setInterval(function () {
        changeHeroImage();
    }, 3000);
});
