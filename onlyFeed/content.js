const newProfilePicUrl = 'https://i.redd.it/k2s4a14t2if51.png'; 

function replaceProfilePictures() {

    const profilePics = document.querySelectorAll('img[src*="profile"], img[class*="profile"], img[src*="avatar"], img[class*="avatar"], img[src*="member"], img[class*="member"]');
    profilePics.forEach(pic => {
        pic.src = newProfilePicUrl;
        if (pic.srcset) {
            pic.srcset = newProfilePicUrl;
        }
    });
}

replaceProfilePictures();

const bodyObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
            replaceProfilePictures();
        }
    });
});

bodyObserver.observe(document.body, { childList: true, subtree: true });
