async function getAuthorizedUser(token) {
    const url = 'https://api.spotify.com/v1/me';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return await response.json();
}

export default getAuthorizedUser;