const newProfilePicUrl = 'https://i.redd.it/k2s4a14t2if51.png'; 

function replaceProfilePictures() {

    const profilePics = document.querySelectorAll('img[src*="profile"], img[class*="profile"], img[src*="avatar"], img[class*="avatar"]');

    profilePics.forEach(pic => {
        pic.src = newProfilePicUrl;
 
        if (pic.srcset) {
            pic.srcset = newProfilePicUrl;
        }
    });
}

replaceProfilePictures();

const feedContainer = document.querySelector('.scaffold-finite-scroll__content, .core-rail');
if (feedContainer) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                replaceProfilePictures();
            }
        });
    });

    observer.observe(feedContainer, { childList: true, subtree: true });
}
