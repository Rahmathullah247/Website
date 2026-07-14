 // 1. Greeting Message: Display Hello + User Name
 let userName = "Ellis Zsoldos"; 
 $("#greetingMessage").text("Hello, " + userName).show();

 // 2. Login Form Error Handling
 $("#loginButton").click(function () {
     let userId = $("#userId").val();
     let password = $("#password").val();

     // Mock validation: valid credentials are "admin" and "1234"
     if (userId !== "admin" || password !== "1234") {
         $("#errorMessage").show(); // Show error message
         $("#userId, #password").val(''); // Clear fields
     } else {
         $("#errorMessage").hide(); 
         alert("Login Successful!");
     }
 });

 // 3. Support Ticket Dropdown: Display Different Form Fields
 $("#ticketType").change(function () {
     let selectedType = $(this).val(); 
     let formFields = "";

     if (selectedType === "computer") {
         formFields = `
             <label>Computer Model: 
                 <input type="text" placeholder="e.g., Dell XPS 13">
             </label>`;
     } else if (selectedType === "software") {
         formFields = `
             <label>Software Name: 
                 <input type="text" placeholder="e.g., MS Office">
             </label>`;
     } else if (selectedType === "network") {
         formFields = `
             <label>Network Issue Description: 
                 <textarea placeholder="Describe network problem..."></textarea>
             </label>`;
     }

     $("#ticketFields").html(formFields); 
 });

 // 4. Real-Time Character Count for Textarea
 $("#probDesc").on("input", function () {
     let maxLength = 200; 
     let currentLength = $(this).val().length;

     // Update the character count display
     $("#charCount").text(currentLength + "/" + maxLength + " characters");

     // Change color if limit is exceeded
     if (currentLength > maxLength) {
         $("#charCount").css("color", "red");
     } else {
         $("#charCount").css("color", "black");
     }
 });
    
 // 5. Submit Ticket Button Click
 $("#submitTicketButton").click(function () {
     let isValid = validateTicketForm();

     if (isValid) {
         let timestamp = new Date().toLocaleString();
         alert("Ticket submitted successfully at " + timestamp);

         $("#supportForm")[0].reset();
     } else {
         $("#formErrorMessage").text("Please fill in all required fields!").show();
     }
 });

 // 6. Ticket Form Validation
 function validateTicketForm() {
     let reqDate = $("#reqDate").val();
     let empId = $("#empId").val();
     let fName = $("#fName").val();
     let lName = $("#lName").val();
     let probDesc = $("#probDesc").val();

     return reqDate && empId && fName && lName && probDesc;
 }
});



