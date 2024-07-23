async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement("ul");
        users.forEach(user => {
            const listElement = document.createElement("li");
            listElement.textContent = user.name;
            userList.appendChild(listElement);
        });
        dataContainer.appendChild(userList);

    }
    catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
})