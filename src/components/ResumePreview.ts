export class ResumePreview {
    static updatePreview(data: any) {
        const nameElement = document.getElementById('name');
        const emailElement = document.getElementById('email');
        const educationElement = document.getElementById('education');
        const experienceElement = document.getElementById('experience');
        const skillsElement = document.getElementById('skills');

        if (nameElement) nameElement.textContent = data.name || 'N/A';
        if (emailElement) emailElement.textContent = data.email || 'N/A';
        if (educationElement) educationElement.textContent = data.education || 'N/A';
        if (experienceElement) experienceElement.textContent = data.experience || 'N/A';
        if (skillsElement) skillsElement.textContent = data.skills || 'N/A';
    }
}
