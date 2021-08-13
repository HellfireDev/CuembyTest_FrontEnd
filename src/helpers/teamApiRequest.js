
export const teamApiRequest = (url, team, page) => {

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.CUEMBY_API_KEY_1 || 'super'
            },
            body: JSON.stringify({
                team,
                page
            })
        })
            .then(response => response.json())
            .then(data => {
                resolve(data);
            }).catch(reject)
    });

}