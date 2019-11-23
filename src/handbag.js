class Handbag {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.designer = data.designer
        this.body = data.body
        //this.collector = handbagJSON.collector
        Handbag.all.push(this);
    }
    renderListItem() {
        return `
        <li><br>
        <h1>${this.collector}<h1>
        <h4>${this.designer}<h4>
        <h5>${this.name}<h5>
        <h6>${this.body}
        <button data-id=${this.id}>edit</button
        </h6>
        </li>`;
    } 
 }

 Handbag.all = [];