const userIcon = document.querySelector('.fa-user');
const modal = document.getElementById('account-modal');
const megaMenuWrappers = document.querySelectorAll('.mega-menu-wrapper');
const laptopDiv = document.querySelector('.Categories_of_Produuct .Laptop');
const laptopModal = document.querySelector('.Laptop_modal');

// Hide all mega menus initially
megaMenuWrappers.forEach(wrapper => {
    const menu = wrapper.querySelector('.mega-menu');
    if (menu) menu.style.display = 'none';
    wrapper.addEventListener('mouseenter', () => {
        if (menu) menu.style.display = 'flex';
    });
    wrapper.addEventListener('mouseleave', () => {
        if (menu) menu.style.display = 'none';
    });
});

// Account modal functionality
userIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
});

// Hide modal when clicking outside
document.addEventListener('click', function(e) {
    if (modal.style.display === 'block' && !modal.contains(e.target) && e.target !== userIcon) {
        modal.style.display = 'none';
    }
});

// Helper function to show/hide modals on hover
function setupCategoryModal(categorySelector, modalSelector) {
  const categoryDiv = document.querySelector(categorySelector);
  const modalDiv = document.querySelector(modalSelector);

  if (!categoryDiv || !modalDiv) return;

  // Show modal on hover
  categoryDiv.addEventListener('mouseenter', () => {
    modalDiv.style.display = 'flex';
  });

  // Hide modal when mouse leaves category (with delay for moving to modal)
  categoryDiv.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!modalDiv.matches(':hover')) {
        modalDiv.style.display = 'none';
      }
    }, 100);
  });

  // Keep modal visible when hovering over it
  modalDiv.addEventListener('mouseenter', () => {
    modalDiv.style.display = 'flex';
  });

  // Hide modal when mouse leaves modal
  modalDiv.addEventListener('mouseleave', () => {
    modalDiv.style.display = 'none';
  });
}

// Setup for Laptop and Desktop
setupCategoryModal('.Categories_of_Produuct .Laptop', '.Laptop_modal');
setupCategoryModal('.Categories_of_Produuct .Desktop', '.Desktop_modal');
setupCategoryModal('.Categories_of_Produuct .Printers', '.Printer_modal');
setupCategoryModal('.Categories_of_Produuct .Ink\\&Toner', '.InkToner_modal');
setupCategoryModal('.Categories_of_Produuct .Monitors', '.Monitors_modal');
setupCategoryModal('.Categories_of_Produuct .Accessories', '.Accessories_modal');
setupCategoryModal('.Categories_of_Produuct .Support', '.Support_modal');

// ======= Visual Laptop Types Slider =======
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.Slides_Laptop_Types');
  const slides = slider ? slider.querySelectorAll('li') : [];
  const prevBtn = document.querySelector('.flex-prev');
  const nextBtn = document.querySelector('.flex-next');
  const slideWidth = 350 + 15; // width + margin-right
  const visibleSlides = Math.floor(1587 / slideWidth);
  let currentIndex = 0;

  function updateSlider() {
    const maxIndex = slides.length - visibleSlides;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    const offset = -(currentIndex * slideWidth);
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      currentIndex--;
      updateSlider();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      currentIndex++;
      updateSlider();
    });
  }

  updateSlider();
});

