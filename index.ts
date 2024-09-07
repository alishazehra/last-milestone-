// Import jsPDF library
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Get elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;
const resumePic = document.getElementById("resume-pic") as HTMLImageElement;
const resumeName = document.getElementById("resume-name") as HTMLSpanElement;
const resumeEmail = document.getElementById("resume-email") as HTMLSpanElement;
const resumePhone = document.getElementById("resume-phone") as HTMLSpanElement;
const resumeEducation = document.getElementById("resume-education") as HTMLSpanElement;
const resumeExperience = document.getElementById("resume-experience") as HTMLSpanElement;
const resumeSkills = document.getElementById("resume-skills") as HTMLSpanElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

form.addEventListener("submit", function (event) {
    event.preventDefault();

// Get input values
const name = (document.getElementById("name") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phone = (document.getElementById("phone") as HTMLInputElement).value;
const education = (document.getElementById("education") as HTMLInputElement).value;
const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];

// Display the resume
resumeName.textContent = name;
resumeEmail.textContent = email;
resumePhone.textContent = phone;
resumeEducation.textContent = education;
resumeExperience.textContent = experience;
resumeSkills.textContent = skills;

if (profilePic) {
    const reader = new FileReader();
    reader.onload = function (e) {
        resumePic.src = e.target?.result as string;
    };
    reader.readAsDataURL(profilePic);
}

resultDiv.classList.remove("hidden");
});

downloadPdfButton.addEventListener("click", () => {
const doc = new jsPDF();

doc.setFontSize(22);
doc.text('Resume', 20, 20);

doc.setFontSize(16);
doc.text(`Name: ${resumeName.textContent}`, 20, 40);
doc.text(`Email: ${resumeEmail.textContent}`, 20, 50);
doc.text(`Phone: ${resumePhone.textContent}`, 20, 60);
doc.text(`Education: ${resumeEducation.textContent}`, 20, 70);
doc.text(`Experience: ${resumeExperience.textContent}`, 20, 80);
doc.text(`Skills: ${resumeSkills.textContent}`, 20, 90);

if (resumePic.src) {
    doc.addImage(resumePic.src, 'JPEG', 20, 100, 50, 50);
}

doc.save('resume.pdf');
});

