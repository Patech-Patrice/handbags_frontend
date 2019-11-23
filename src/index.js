document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();
    app.adapter.getHandbags().then(app.createHandbags);
        
    });
   

