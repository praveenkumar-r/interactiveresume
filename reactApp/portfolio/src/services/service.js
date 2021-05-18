export function sendMessage(item) {
    return fetch('https://app1-portfolio.herokuapp.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
        .then(data => data.json())
}