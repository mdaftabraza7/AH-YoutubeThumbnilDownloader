document.getElementById('fetchThumbnail').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const resolution = document.getElementById('resolution').value;
    const videoId = extractYouTubeVideoId(videoUrl);

    if (videoId) {
        document.getElementById('loading').style.display = 'block';
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${resolution}.jpg`;

        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            displayThumbnail(thumbnailUrl);
        }, 1000);  // Simulating a loading time
    } else {
        showError();
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('videoUrl').value = '';
    document.getElementById('thumbnailContainer').style.display = 'none';
    document.getElementById('error').style.display = 'none';
});

function extractYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regex);
    return match ? match[2] : null;
}

function displayThumbnail(thumbnailUrl) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const thumbnailImg = document.getElementById('thumbnail');
    const downloadLink = document.getElementById('downloadLink');

    thumbnailImg.src = thumbnailUrl;
    downloadLink.href = thumbnailUrl;

    thumbnailContainer.style.display = 'block';
    document.getElementById('error').style.display = 'none';
}

function showError() {
    document.getElementById('error').style.display = 'block';
    document.getElementById('thumbnailContainer').style.display = 'none';
}