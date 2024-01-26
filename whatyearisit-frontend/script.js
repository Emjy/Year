fetch('https://year-qnet80bva-emjy-67ba5b66.vercel.app/year')
    .then(response => response.json())
    .then((data) => {
        document.querySelector('#year').textContent = data.year;
    });

