document.getElementById('fetchButton').addEventListener('click', showVideo);

function showVideo() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ucCXMM7LTY0" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
}
