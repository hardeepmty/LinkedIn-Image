// URL of the new profile picture
const newProfilePicUrl = 'https://i.redd.it/k2s4a14t2if51.png'; // Replace with your desired image URL

// Function to replace profile pictures
function replaceProfilePictures() {
    // Select all profile pictures in the LinkedIn feed
    const profilePics = document.querySelectorAll('img[src*="profile"], img[class*="profile"], img[src*="avatar"], img[class*="avatar"]');

    profilePics.forEach(pic => {
        // Replace the src attribute with the new profile picture URL
        pic.src = newProfilePicUrl;
        // To handle cases where LinkedIn might use lazy loading or background images
        if (pic.srcset) {
            pic.srcset = newProfilePicUrl;
        }
    });
}

// Run the function to replace profile pictures when the script is injected
replaceProfilePictures();

// Optional: Observe for new posts being added and replace their profile pictures
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
