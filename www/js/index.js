document.addEventListener('deviceready', function () {
    nodejs.start('main.js');
    nodejs.channel.on('message', function (msg) {
        console.log('From Node:', msg);
    });
    setTimeout(function () {
        fetch('http://localhost:3000/api/health')
            .then(res => res.json())
            .then(data => console.log('Health check:', data))
            .catch(err => console.error('Fetch failed:', err));
    }, 1500);
}, false);

if (!window.cordova || window.cordova.platformId === 'browser') {
    window.addEventListener('load', function () {
        console.log('Running in browser — no embedded Node here.');
        // web logic goes here once you split it out
    });
}