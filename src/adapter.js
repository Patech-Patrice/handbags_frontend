class Adapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000/api/v1/handbags';
      this.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
  
    getHandbags(){
      return fetch(this.baseUrl).then(res => res.json()
      )
  }
  
    updateHandbag(id, body) {
      return fetch(`${this.baseUrl}/handbags/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      }).then(res => res.json());
    }
  
 
  }


  


       

       


