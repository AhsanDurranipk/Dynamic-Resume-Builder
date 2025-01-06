import { ResumeForm } from './components/ResumeForm';
import { ThemeSelector } from './components/ThemeSelector';
import { Storage } from './utils/storage';
import { ResumePreview } from './components/ResumePreview';

document.addEventListener('DOMContentLoaded', () => {
    // Check if we have saved data from previous sessions
    const savedData = Storage.loadData();
    if (savedData) {
        // If saved data exists, update the preview
        ResumePreview.updatePreview(savedData);
    }

    // Initialize the Resume Form
    ResumeForm.init((data: any) => {
        // When the form is submitted, save the data and update the preview
        Storage.saveData(data);
        ResumePreview.updatePreview(data);
    });

    // Initialize the Theme Selector
    ThemeSelector.init();
});
