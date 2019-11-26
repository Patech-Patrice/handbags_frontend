class Handbag {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.designer = data.designer;
        this.body = data.body;
        this.collector = data.collector;
        Handbag.all.push(this);
    }

    renderListItem() {
        return `
        <li><br>
        <h1>${this.collector}<h1>
        <h4>${this.name}<h4>
        <h5>${this.designer}<h5>
        <h6>${this.body}
        <button data-id=${this.id}>edit</button
        </h6>
        </li>`;
    }
    static findById(id) {
        return this.all.find(handbag => handbag.id === id);
      }
    
    renderUpdateForm() {
        return `
        <form data-id=${this.id}>
          <label>Title</label>
          <p>
            <input type="text" value="${this.name}" />
          </p>
          <label>Content</label>
          <p>
            <textarea>${this.body}</textarea>
          </p>
          <button type='submit'>Save Note</button>
        </form>
      `;
      }
 }

 Handbag.all = [];