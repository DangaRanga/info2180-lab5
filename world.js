// Ensure that the window loads before executing code
window.addEventListener('load', function (){
    let lookupBtn = document.getElementById('lookup');

    lookupBtn.addEventListener('click', lookUpCountry)
});

async function lookUpCountry(){
    let inputField = document.getElementById('country');
    let resultField = document.getElementById('result')
    let data = await fetchData(inputField.value);
    resultField.innerHTML = data;
}
async function fetchData(formData){
    const response = await fetch(`world.php?country=${formData}`);
    if(response.ok){
        // Returns the response as a string
        return response.text();
    
    // If any unexpected errors happen while fetching, an error is thrown
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}   