import { jsPDF } from 'jspdf';

export class PDFGenerator {
    static generatePDF(formData: { [key: string]: string }): void {
        const doc = new jsPDF();
        doc.text(`Name: ${formData.name}`, 10, 10);
        doc.text(`Email: ${formData.email}`, 10, 20);
        doc.text(`Education: ${formData.education}`, 10, 30);
        doc.text(`Experience: ${formData.experience}`, 10, 40);
        doc.text(`Skills: ${formData.skills}`, 10, 50);
        doc.save('resume.pdf');
    }
}
