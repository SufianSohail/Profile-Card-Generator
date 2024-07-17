function cardUpdate(){

    //consider the whole html page as document, to get value of any input 
    //from the user in this page, we will use the document funct of js
    //we gave unique identifiers i.e ids to all the input fields, those ids will
    //help us in getting the particular value using document.getElementById("id"); funct


    //defining variables for all the inputs
    // Store form data in localStorage
    localStorage.setItem('schoolName',document.getElementById("schoolName").value);
    localStorage.setItem('studentName',document.getElementById("studentName").value);
    localStorage.setItem('studentClass',document.getElementById("studentClass").value);
    localStorage.setItem('DateofBirth',document.getElementById("DateofBirth").value);
    localStorage.setItem('rollNumber',document.getElementById("rollNumber").value);
    localStorage.setItem('contactNumber',document.getElementById("contactNumber").value);
    // Handle image upload
    const imageFile = document.getElementById("profileImage").files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('profileImage', e.target.result);
        };
        reader.readAsDataURL(imageFile);
    }

    // Redirect to the card info page
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/cardinfo.html";
    }, 100); 

}

function cardLoad(){
     // This function will be called when cardinfo.html loads
     document.getElementById("schoolNameVal").innerText = localStorage.getItem('schoolName') || 'School';
     document.getElementById("studentNameVal").innerText = localStorage.getItem('studentName') || 'Student Name';
     document.getElementById("studentClassVal").innerText = localStorage.getItem('studentClass') || 'Class';
     document.getElementById("DoBVal").innerText = localStorage.getItem('DateofBirth') || 'DoB';
     document.getElementById("rollNumberVal").innerText = localStorage.getItem('rollNumber') || '11122';
     document.getElementById("contactNumberVal").innerText = localStorage.getItem('contactNumber') || '+91 XXXXXXXXXX';

     // Load and display the image
    const profileImage = localStorage.getItem('profileImage');
    if (profileImage) {
        document.getElementById("profileImageDisplay").src = profileImage;
    }
     // Clear the localStorage after use
     localStorage.clear();
}

document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    const customFileUpload = document.getElementById('customFileUpload');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    customFileUpload.addEventListener('click', function() {
        profileImage.click();
    });

    profileImage.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            fileNameDisplay.textContent = this.files[0].name;
        } else {
            fileNameDisplay.textContent = 'No file chosen';
        }
    });
});

function BacktoHome(){
    window.location.href = "http://127.0.0.1:5500/index.html";
}

// Add this to your script.js

document.querySelectorAll('.glow-button, .glow-input').forEach(element => {
    element.addEventListener('mousemove', e => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const isNearBorder = x < 10 || x > rect.width - 10 || y < 10 || y > rect.height - 10;
      element.classList.toggle('border-glow', isNearBorder);
      element.classList.toggle('text-glow', !isNearBorder);
    });
  
    element.addEventListener('mouseleave', () => {
      element.classList.remove('border-glow', 'text-glow');
    });
  });
  
  function PrintCard(){
    window.print();
  }