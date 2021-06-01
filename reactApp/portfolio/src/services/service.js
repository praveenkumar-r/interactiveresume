export function sendMessage(item) {
    return fetch('http://localhost:8000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
        .then(data => data.json())
}

export function getFeedback(item) {
    return fetch('https://app1-portfolio.herokuapp.com/feedback', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}

export function saveFeedback(item) {
    return fetch('https://app1-portfolio.herokuapp.com/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
        .then(data => data.json())
}

export function updateFeedback(item) {
    return fetch(`https://app1-portfolio.herokuapp.com/feedback/${item._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
        .then(data => data.json())
}