// submit data function
    function submitData(name, email) {
        const configurationObject = {
          name: name,
          email: email
        };
    //   post request with headers and body
        const configurationObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(configurationObject)
        };
      
        return fetch('http://localhost:3000/users', configurationObj) // destination URL
          .then(response => response.json())
          .then(data => {
            console.log(data); 
            appendIdToDOM(data.id);
            return data;
          })
        //   append error to DOM
          .catch(error => {
            console.error('Error:', error); 
            appendErrorMessageToDOM(error.message); 
            return error; 
          });
      }
    //   append a paragraph
      function appendIdToDOM(id) {
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
      }
    //   append error message to DOM
      function appendErrorMessageToDOM(message) {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${message}`;
        document.body.appendChild(errorElement);
      }
    //   Append id to DOM
        function appendIdToDOM(id) {
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
        }
        // append error messaage to DOM
        function appendErrorMessageToDOM(message) {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${message}`;
        document.body.appendChild(errorElement);
        }
        