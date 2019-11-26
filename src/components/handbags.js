class Handbags {
    constructor() {
        this.handbags = []
        this.adapter = new HandbagsAdapter();
        this.attachEventListeners();
        this.fetchAndLoadHandbags();
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.createHandbags = this.createHandbags.bind(this);
        this.addHandbags = this.addHandbags.bind(this);
    }

    fetchAndLoadHandbags() {
      this.adapter
      .getHandbags()
      .then(handbags => {
       handbags.forEach(handbag => this.handbags.push(handbag))
      })
      .then(() => {
        this.render()
      })
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

      render(){
        const handbagsContainer = document.querySelector('#handbags-list')
        document.querySelector('#handbags-list').innerHTML = 'my notes here';
        handbagsContainer.innerHTML = this.handbags.map(handbag => `<li><h3>${handbag.name}</h3> <h4>${handbag.collector}</h4> <h5>${handbag.designer}</h5> ${handbag.body}</li>`).join('')
      }
    }

    


    