export class Storage {
    static saveData(data: { [key: string]: string }): void {
        localStorage.setItem('resumeData', JSON.stringify(data));
    }

    static loadData(): { [key: string]: string } {
        const data = localStorage.getItem('resumeData');
        return data ? JSON.parse(data) : {};
    }
}
