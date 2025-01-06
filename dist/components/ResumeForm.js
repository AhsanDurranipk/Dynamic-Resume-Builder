"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeForm = void 0;
var ResumeForm = /** @class */ (function () {
    function ResumeForm() {
    }
    ResumeForm.init = function (callback) {
        var form = document.getElementById('resume-form');
        if (form) {
            form.addEventListener('submit', function (event) {
                var _a, _b, _c, _d, _e;
                event.preventDefault();
                var formData = new FormData(form);
                var resumeData = {
                    name: ((_a = formData.get('name')) === null || _a === void 0 ? void 0 : _a.toString()) || '',
                    email: ((_b = formData.get('email')) === null || _b === void 0 ? void 0 : _b.toString()) || '',
                    education: ((_c = formData.get('education')) === null || _c === void 0 ? void 0 : _c.toString()) || '',
                    experience: ((_d = formData.get('experience')) === null || _d === void 0 ? void 0 : _d.toString()) || '',
                    skills: ((_e = formData.get('skills')) === null || _e === void 0 ? void 0 : _e.toString()) || ''
                };
                // Call the callback to save data and update the preview
                callback(resumeData);
            });
        }
    };
    return ResumeForm;
}());
exports.ResumeForm = ResumeForm;
