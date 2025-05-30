// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  const sections = document.querySelectorAll('.features-section, .how-it-works, .testimonials-section, .cta-section');
  
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements in viewport
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// Add smooth hover effect for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
}); 