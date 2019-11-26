class HandbagsAdapter {
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


  createHandbag(value) {
    const handbag = {
        body: value
    }
   
    return fetch(this.baseUrl,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 
          name: name,
          designer: designer,
          body: body
         })   //ES6 lets you pass in one object
    }).then(res => res.json())
    .then(handbag => {return(handbag)})
    
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


  


       

       


