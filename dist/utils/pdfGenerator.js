"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFGenerator = void 0;
var jspdf_1 = require("jspdf");
var PDFGenerator = /** @class */ (function () {
    function PDFGenerator() {
    }
    PDFGenerator.generatePDF = function (formData) {
        var doc = new jspdf_1.jsPDF();
        doc.text("Name: ".concat(formData.name), 10, 10);
        doc.text("Email: ".concat(formData.email), 10, 20);
        doc.text("Education: ".concat(formData.education), 10, 30);
        doc.text("Experience: ".concat(formData.experience), 10, 40);
        doc.text("Skills: ".concat(formData.skills), 10, 50);
        doc.save('resume.pdf');
    };
    return PDFGenerator;
}());
exports.PDFGenerator = PDFGenerator;
