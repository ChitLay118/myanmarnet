document.addEventListener('DOMContentLoaded', () => {
    
    // ** လွယ်ကူသော ဗီဒီယို အချက်အလက်များ (ဗီဒီယိုအသစ်ထည့်ရန် ဤနေရာတွင် ထပ်ထည့်ပါ)**
    const videoData = [
        {
            name: "Live by Night",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bkd46T4RplawnDjpHoI8mhzTLks-200x300.jpg",
            videoLink: "https://mega.nz/embed/mZFzVByI#UqRrLkCu1xgLcHpFKS6CUPb5lno2g6Mvjh-fbANEdoU"
        },
        {
            name: "The Adjustment Bureau",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/A4wKf04g4DCVAWC67uPGozIJPGw-200x300.jpg",
            videoLink: "https://mega.nz/embed/mEtjxR6D#nI3JYlTXOIudI0ZM0yWY_ngH4D0PlFswvjEps5ej3uo" // ဒုတိယဗီဒီယို လင့်ခ်အစစ်ထည့်ပါ။
        },
        {
            name: "Delicious Delivery",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/pbU2UBygdGERFZkGLRXXYlj4aVz-200x300.jpg",
            videoLink: "https://mega.nz/embed/uY1zFIIS#Fso09aLwdQMwSLq9RQA_4Y_u-awAvmUDg9wyMmHqaBM" // တတိယဗီဒီယို လင့်ခ်အစစ်ထည့်ပါ။
        }
        // နောက်ထပ် ဗီဒီယိုထပ်ထည့်ရန်၊ ဤနေရာတွင် ကော်မာခံပြီး အလားတူ object တစ်ခု ထပ်ထည့်နိုင်ပါသည်။
        /*
        ,
        {
            name: "New Movie Title",
            image: "https://placehold.co/200x200/50ffff/ffffff?text=Video+4",
            videoLink: "https://mega.nz/embed/your_fourth_video_id"
        }
        */
    ];

    const videoPlayer = document.getElementById('videoPlayer');
    const imageGallery = document.getElementById('imageGallery');

    /**
     * Gallery Items များကို ဖန်တီးပြီး HTML ထဲသို့ ထည့်သွင်းပေးသည့် function
     */
    function renderGallery() {
        videoData.forEach(video => {
            // Gallery Item <div> ကို ဖန်တီးသည်။
            const item = document.createElement('div');
            item.className = 'gallery-item cursor-pointer transform transition duration-300 hover:scale-105';
            item.setAttribute('data-video', video.videoLink);
            item.setAttribute('data-image', video.image); // data-image က မလိုအပ်ပေမယ့် စည်းကမ်းအတိုင်း ထည့်ထားသည်။

            // Content (ပုံ နှင့် နာမည်) ကို ထည့်သွင်းသည်။
            item.innerHTML = `
                <img src="${video.image}" alt="${video.name}" class="w-full h-auto rounded-lg shadow-md object-cover">
                <p class="mt-2 text-center text-sm md:text-base font-medium text-gray-400">${video.name}</p>
            `;

            // Click Event ကို တွဲပေးသည်။
            item.addEventListener('click', () => {
                videoPlayer.src = video.videoLink;
            });

            // Gallery Container ထဲသို့ ထည့်သွင်းသည်။
            imageGallery.appendChild(item);
        });
    }

    // Gallery ကို စတင်ဖန်တီးသည်။
    renderGallery();
});
