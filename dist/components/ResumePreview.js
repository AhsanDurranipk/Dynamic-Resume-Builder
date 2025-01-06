"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumePreview = void 0;
var ResumePreview = /** @class */ (function () {
    function ResumePreview() {
    }
    ResumePreview.updatePreview = function (data) {
        var nameElement = document.getElementById('name');
        var emailElement = document.getElementById('email');
        var educationElement = document.getElementById('education');
        var experienceElement = document.getElementById('experience');
        var skillsElement = document.getElementById('skills');
        if (nameElement)
            nameElement.textContent = data.name || 'N/A';
        if (emailElement)
            emailElement.textContent = data.email || 'N/A';
        if (educationElement)
            educationElement.textContent = data.education || 'N/A';
        if (experienceElement)
            experienceElement.textContent = data.experience || 'N/A';
        if (skillsElement)
            skillsElement.textContent = data.skills || 'N/A';
    };
    return ResumePreview;
}());
exports.ResumePreview = ResumePreview;
