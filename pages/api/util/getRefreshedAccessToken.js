async function getRefreshedAccessToken(refresh_token) {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`
        },
        body: new URLSearchParams({
            'grant_type': 'refresh_token',
            'refresh_token': refresh_token,
            'redirect_uri': process.env.CALLBACK_URL
        })
    });

    const data = await result.json();
    return data.access_token;
}

export default getRefreshedAccessToken;