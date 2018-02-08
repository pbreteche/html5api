export class Student {

    static createFromJson(path) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', path);

            xhr.addEventListener('load', function(){
                const instance = new Student();
                instance.notes = JSON.parse(this.responseText);
                resolve(instance)
            });

            xhr.send();
        });
    }
}