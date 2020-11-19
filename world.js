// Ensure that the window loads before executing code
window.addEventListener('load', function (){
    const lookupBtn = document.getElementById('lookup');
    const cityBtn = document.getElementById('lookup-cities')

    // Perform normal search if the regular lookup button is clicked
    lookupBtn.addEventListener('click', function(){
        lookUpCountryData('normal');
    });

    // Perform city search if the regular lookup button is clicked
    cityBtn.addEventListener('click', function(){
        lookUpCountryData('city');
    });
});

async function lookUpCountryData(searchType){
    let inputField = document.getElementById('country');
    let resultField = document.getElementById('result')
    let data = await fetchData(inputField.value, searchType);
    resultField.innerHTML = data;
}

async function fetchData(formData, searchType){
    let url = ''
    if (searchType === 'city'){
        url = `world.php?country=${formData}&context=cities`;
    }else{
        url = `world.php?country=${formData}&context=''`;
    }
    const response = await fetch(url);
    if(response.ok){
        // Returns the response as a string
        return response.text();
    
    // If any unexpected errors happen while fetching, an error is thrown
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}   