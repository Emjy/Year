fetch('https://year-93dx572va-emjy-67ba5b66.vercel.app/year')
    .then(response => response.json())
    .then((data) => {
        document.querySelector('#year').textContent = data.year;
    });

