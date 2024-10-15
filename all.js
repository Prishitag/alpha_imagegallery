// JavaScript for Dynamic Image Filter and Modal Viewer

// Function to filter images based on the category
function filterImages(category) {
    const images = document.querySelectorAll('.row img');
    
    images.forEach(img => {
        if (category === 'All' || img.src.includes(category.toLowerCase())) {
            img.style.display = 'inline';  // Show relevant images
        } else {
            img.style.display = 'none';  // Hide non-relevant images
        }
    });
}

// Add event listeners to buttons for filtering
document.querySelectorAll('.but button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.innerText;
        filterImages(category);  // Call the filter function
    });
});

// Modal Image Viewer
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<span class="close">&times;</span><img class="modal-content" id="modal-img">';
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-img');

