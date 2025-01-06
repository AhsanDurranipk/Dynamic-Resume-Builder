"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResumeForm_1 = require("./components/ResumeForm");
var ThemeSelector_1 = require("./components/ThemeSelector");
var storage_1 = require("./utils/storage");
var ResumePreview_1 = require("./components/ResumePreview"); // Import the ResumePreview class
document.addEventListener('DOMContentLoaded', function () {
    var savedData = storage_1.Storage.loadData();
    if (savedData) {
        // Use ResumePreview's updatePreview method to update the preview if there's saved data
        ResumePreview_1.ResumePreview.updatePreview(savedData);
    }
    // Initialize the form and theme selector
    ResumeForm_1.ResumeForm.init();
    ThemeSelector_1.ThemeSelector.init();
});
