function testAPI() {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-result').innerHTML = 
                `<p>API Response: ${data.message}</p>`;
        })
        .catch(error => {
            document.getElementById('api-result').innerHTML = 
                `<p>Error: ${error}</p>`;
        });
}
