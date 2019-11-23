class App {
    constructor() {
        this.handbags = []
        this.adapter = new Adapter();
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.createHandbags = this.createHandbags.bind(this);
        this.addHandbags = this.addHandbags.bind(this);
    }

   attachEventListeners() {
        document.querySelector('#handbags-list').addEventListener('click', this.handleEditClick);
        document.querySelector('#update-handbag').addEventListener('submit', this.handleFormSubmit);
        }
  

    createHandbags(handbags) {
      handbags.forEach(handbag => {
          new Handbag(handbag);
      });
      this.addHandbags();
      }

      addHandbags() {
        document.querySelector('#handbags-list').innerHTML = '';
        Handbag.all.forEach(
          handbag => (document.querySelector('#handbags-list').innerHTML += handbag.renderListItem())
        );
      }
      handleFormSubmit(e) {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const handbag = Handbag.findById(id);
        const name = e.target.querySelector('input').value;
        const designer = e.target.querySelector('input').value;
        const body = e.target.querySelector('textarea').value;
    
        const bodyJSON = { name, designer, body };
        this.adapter.updateHandbag(Handbag.id, bodyJSON).then(updatedHandbag => console.log(updatedHandbag));
      }
    
      handleEditClick(e) {
        const id = parseInt(e.target.dataset.id);
        const handbag = Handbag.findById(id);
        document.querySelector('#update').innerHTML = Handbag.renderUpdateForm();
      }


}
    
  