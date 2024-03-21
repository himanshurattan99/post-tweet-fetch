document.addEventListener('DOMContentLoaded', function () {
    const tweetForm = document.getElementById('tweetForm');
    const tweetText = document.getElementById('tweetText');
    const responseDiv = document.getElementById('response');

    tweetForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const tweet = tweetText.value;
        const currentDate = new Date();

        // Make an HTTP POST request to the backend
        const url = 'https://jsonplaceholder.typicode.com/posts';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post: {
                        content: tweet,
                        time: `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`
                    }
                }),
            });

            let data;
            if (response.ok) {
                data = await response.json(); // Parse response as JSON
            }
            else {
                throw new Error('Tweet posting failed'); // Handle failure
            }

            console.log(data);
            // Handle successful tweet post
            responseDiv.innerText = `Tweet posted successfully! Tweet ID: ${data.id}`;
            responseDiv.classList.remove('hidden');
        }
        catch (error) {
            // Handle error
            responseDiv.innerText = `Error: ${error.message}`;
            responseDiv.classList.replace('text-success', 'text-error');
            responseDiv.classList.replace('border-success', 'border-error');
            responseDiv.classList.remove('hidden');
        }
    });
});

// .catch(error => {
//     // Handle error
//     responseDiv.innerText = `Error: ${error.message}`;
// });

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         post: {
//             content: tweet
//         }
//     }),
// })
//     .then(response => {
//         console.log(response);
//         if (response.ok) {
//             return response.json(); // Parse response as JSON
//         } else {
//             throw new Error('Tweet posting failed'); // Handle failure
//         }
//     })
//     .then(data => {
//         console.log(data);
//         // Handle successful tweet post
//         responseDiv.innerText = `Tweet posted successfully! Tweet ID: ${data.id}`;
//     })
//     .catch(error => {
//         // Handle error
//         responseDiv.innerText = `Error: ${error.message}`;
//     });