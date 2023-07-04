document.addEventListener("DOMContentLoaded", function () {
    const lightboxModal = document.querySelector(".lightbox-modal");
    const lightboxContent = document.querySelector(".lightbox-content");
    const lightboxImage = lightboxContent.querySelector("img");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxPrev = document.querySelector(".lightbox-prev");
    const lightboxNext = document.querySelector(".lightbox-next");
    const lightboxLinks = document.querySelectorAll(".lightbox");
  
    let currentImageIndex = 0;
  
    // Open lightbox modal
    function openLightbox(index) {
      lightboxImage.src = lightboxLinks[index].getAttribute("href");
      lightboxModal.style.display = "block";
      currentImageIndex = index;
    }
  
    // Close lightbox modal
    function closeLightbox() {
      lightboxModal.style.display = "none";
    }
  
    // Show previous image
    function showPrevImage() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = lightboxLinks.length - 1;
      }
      openLightbox(currentImageIndex);
    }
  
    // Show next image
    function showNextImage() {
      currentImageIndex++;
      if (currentImageIndex >= lightboxLinks.length) {
        currentImageIndex = 0;
      }
      openLightbox(currentImageIndex);
    }
  
    // Attach event listeners
    lightboxLinks.forEach(function (link, index) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        openLightbox(index);
      });
    });
  
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", showPrevImage);
    lightboxNext.addEventListener("click", showNextImage);
    lightboxModal.addEventListener("click", function (e) {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
    
  
    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (lightboxModal.style.display === "block") {
        if (e.key === "Escape") {
          closeLightbox();
        } else if (e.key === "ArrowLeft") {
          showPrevImage();
        } else if (e.key === "ArrowRight") {
          showNextImage();
        }
      }
    });
  });
  