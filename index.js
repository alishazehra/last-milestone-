"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import jsPDF library
var jspdf_1 = require("jspdf");
require("jspdf-autotable");
// Get elements
var form = document.getElementById("resume-form");
var resultDiv = document.getElementById("result");
var resumePic = document.getElementById("resume-pic");
var resumeName = document.getElementById("resume-name");
var resumeEmail = document.getElementById("resume-email");
var resumePhone = document.getElementById("resume-phone");
var resumeEducation = document.getElementById("resume-education");
var resumeExperience = document.getElementById("resume-experience");
var resumeSkills = document.getElementById("resume-skills");
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    // Display the resume
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumePhone.textContent = phone;
    resumeEducation.textContent = education;
    resumeExperience.textContent = experience;
    resumeSkills.textContent = skills;
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            resumePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    resultDiv.classList.remove("hidden");
});
downloadPdfButton.addEventListener("click", function () {
    var doc = new jspdf_1.default();
    doc.setFontSize(22);
    doc.text('Resume', 20, 20);
    doc.setFontSize(16);
    doc.text("Name: ".concat(resumeName.textContent), 20, 40);
    doc.text("Email: ".concat(resumeEmail.textContent), 20, 50);
    doc.text("Phone: ".concat(resumePhone.textContent), 20, 60);
    doc.text("Education: ".concat(resumeEducation.textContent), 20, 70);
    doc.text("Experience: ".concat(resumeExperience.textContent), 20, 80);
    doc.text("Skills: ".concat(resumeSkills.textContent), 20, 90);
    if (resumePic.src) {
        doc.addImage(resumePic.src, 'JPEG', 20, 100, 50, 50);
    }
    doc.save('resume.pdf');
});
