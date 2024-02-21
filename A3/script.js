// Select all table rows
const rows = document.querySelectorAll('table tbody tr');

// Add event listener to each row
rows.forEach((row, index) => {
  row.addEventListener('mouseenter', () => {
    // Animate the row on mouse enter
    anime({
      targets: row,
      translateY: -5,
      duration: 300,
      easing: 'easeInOutSine',
    });
  });

  row.addEventListener('mouseleave', () => {
    // Animate the row back to its original position on mouse leave
    anime({
      targets: row,
      translateY: 0,
      duration: 300,
      easing: 'easeInOutSine',
    });
  });
});
