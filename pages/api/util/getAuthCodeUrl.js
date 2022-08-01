function getAuthCode() {
    const base_url = 'https://accounts.spotify.com/authorize';
    return base_url +
        // App Specific Settings
        '?client_id='                       + process.env.CLIENT_ID +
        '&redirect_uri='                    + process.env.CALLBACK_URL +

        // API Behaviour Settings
        '&response_type=code' +
        '$show_dialog=false' +

        // API Scope Settings
        '&scope=' +

        'user-top-read'                     + '%20' +
        'user-read-recently-played'         + '%20' +
        'user-read-currently-playing';
}

export default getAuthCode;