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




//To make the the Laptop product aling according to the price
document.addEventListener('DOMContentLoaded', function() {
  const sorter = document.getElementById('sorter');
  const productContainer = document.querySelector('.Product_Container');

  sorter.addEventListener('change', function() {
    let items = Array.from(productContainer.querySelectorAll('.item.product'));
    let value = sorter.value;

    if (value === 'price_asc') {
      items.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
    } else if (value === 'price_desc') {
      items.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
    } else {
      // For other options, you can add logic or just return to default order
      return;
    }

    // Remove all items and append sorted
    items.forEach(item => productContainer.appendChild(item));
  });
});


//Discount
document.getElementById('sorter').addEventListener('change', function() {
  const value = this.value;
  const productContainer = document.querySelector('.Product_Container');
  const items = Array.from(productContainer.querySelectorAll('.item.product'));

  if (value === 'price_asc') {
    items.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (value === 'price_desc') {
    items.sort((a, b) => b.dataset.price - a.dataset.price);
  } else if (value === 'mrp_discount_percent' || value === 'discount') {
    // Sort by discount descending (highest discount first)
    items.sort((a, b) => b.dataset.discount - a.dataset.discount);
  } else {
    return; // or handle other sort types
  }

  // Re-append sorted items
  items.forEach(item => productContainer.appendChild(item));
});

