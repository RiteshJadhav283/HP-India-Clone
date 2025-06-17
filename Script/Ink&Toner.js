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

// Popup modal for 'Click here' link

document.addEventListener('DOMContentLoaded', function() {
  // Show popup when 'Click here' is clicked
  document.querySelectorAll('a.a-links[href="#popup"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('popup').classList.add('active');
    });
  });

  // Hide popup when close button is clicked
  document.querySelectorAll('#popup .close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('popup').classList.remove('active');
    });
  });

  // Hide popup when clicking outside the popup box
  document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });

  // Default: show Ink products
  showProductTab('ink');

  // Tab click listeners
  document.querySelector('.INK a').addEventListener('click', function(e) {
    e.preventDefault();
    showProductTab('ink');
  });
  document.querySelector('.TONER a').addEventListener('click', function(e) {
    e.preventDefault();
    showProductTab('toner');
  });
  document.querySelector('.MAINTENANCE_KITS a').addEventListener('click', function(e) {
    e.preventDefault();
    showProductTab('kits');
  });
});

// Tab switching for Ink/Toner/Maintenance Kits
function showProductTab(tab) {
  const ink = document.querySelector('.Ink_Products');
  const toner = document.querySelector('.Toner_Products');
  const kits = document.querySelector('.Maintenance_Kits_Products');
  const inkTab = document.querySelector('.INK');
  const tonerTab = document.querySelector('.TONER');
  const kitsTab = document.querySelector('.MAINTENANCE_KITS');

  // Hide all
  ink.style.display = 'none';
  toner.style.display = 'none';
  kits.style.display = 'none';
  inkTab.classList.remove('active');
  tonerTab.classList.remove('active');
  kitsTab.classList.remove('active');

  // Show selected
  if (tab === 'ink') {
    ink.style.display = '';
    inkTab.classList.add('active');
  } else if (tab === 'toner') {
    toner.style.display = '';
    tonerTab.classList.add('active');
  } else if (tab === 'kits') {
    kits.style.display = '';
    kitsTab.classList.add('active');
  }
}

