// Check if the user has already joined the waiting list
  window.onload = function() {
    const hasJoinedWaitingList = localStorage.getItem('hasJoinedWaitingList');

    // If the user hasn't joined, show the modal
    if (!hasJoinedWaitingList) {
      document.getElementById('leadsModal').style.display = 'block';
    }
  };

  // Handle form submission
  document.getElementById('leadsForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Make an API call or submit the form data here (optional)

    // Set flag in localStorage after successful form submission
    localStorage.setItem('hasJoinedWaitingList', 'true');

    // Optionally, redirect the user to a thank you page or close the modal
    // window.location.href = "thankyou.html"; // Redirect to thank you page
    document.getElementById('leadsModal').style.display = 'none'; // Close the modal
  };

  // Prevent users from closing the modal by clicking outside
  window.onclick = function(event) {
    if (event.target === document.getElementById('leadsModal')) {
      event.stopPropagation();
    }
  };