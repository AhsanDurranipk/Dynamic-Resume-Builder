export class ResumeForm {
    static init(callback: Function) {
        const form = document.getElementById('resume-form') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', (event: Event) => {
                event.preventDefault();
                
                const formData = new FormData(form);
                const resumeData = {
                    name: formData.get('name')?.toString() || '',
                    email: formData.get('email')?.toString() || '',
                    education: formData.get('education')?.toString() || '',
                    experience: formData.get('experience')?.toString() || '',
                    skills: formData.get('skills')?.toString() || ''
                };

                // Call the callback to save data and update the preview
                callback(resumeData);
            });
        }
    }
}
