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
        },
        {
            name: "About Family",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/gGHrBhwk4KpWSykvdVwMfmP2C7b-200x300.jpg",
            videoLink: "https://mega.nz/embed/nBU0XJ6Z#AGQW0L8rAl8ldfOj72kNoxiLzvmkcdTPBolrnAHkXV8"
        },
        {
            name: "Balota",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/29IpnkqWIkFvSlynGu7X6ylAdiL-200x300.jpg",
            videoLink: "https://mega.nz/embed/GRFX2CjK#GzEbDme5g7ET2MDNiACK6_akCK8nBBPEuctiZ75O7q8"
        },
        {
            name: "The Legend of Zorro",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/duZDsuIA2uX93Vujtm89oHeTFqE-200x300.jpg",
            videoLink: "https://mega.nz/embed/2RlFwIZb#CHgdn-YMkSQ5vQCm-Y4WldQTF8YpGEk0iWW2OUVNg44"
        },
         {
            name: "Made in China",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/oxjRe2CRSblw0NmA4Uwpu9b4F0j-200x300.jpg",
            videoLink: "https://mega.nz/embed/6AVxSQhD#yn0ypdvg7QQcmcBmxtGVRBZ3ZVY_7X-o0aBSA0g95hk"
        },
         {
            name: "Faceless",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/llTQhKYpctLVJr3BcLbaFQt2W8a-212x300.jpg",
            videoLink: "https://mega.nz/embed/TItERAzY#pRpLkcB3UMnBnz7sg5KxkvcOrziz5R3Xk-btKL5_sms"
        },
         {
            name: "Mission to Mars",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/beDWEWxgFlt1UWvf2al9cjDol2i-200x300.jpg",
            videoLink: "https://mega.nz/embed/PR0WhRbZ#n_0yW9aX8WST-CEV1tKttYm1X2XEZwwLv6WftlKxWlE"
        },
        {
            name: "Dark Night of the Soul",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/iC6llFstc5RkHthOb6pi6lwR0NM-200x300.jpg",
            videoLink: "https://mega.nz/embed/bUciVAhI#o0dBpUZ4EabK-EsrdmAuv4M-aMwjjVXAXc7EqxFzhS0"
        },
        {
            name: "Nezha: Demon Child is Back",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bdhITckYK6CHhjRTYufi4As9mBM-225x300.jpg",
            videoLink: "https://mega.nz/embed/CFEGkBoT#bYUBO4fFKxpHyJsk5nxzuurwdJu2HTRQT8AZxiOC4TY"
        },
        {
            name: "New Gods: Nezha Reborn",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/np4ScPY04HESKBbpexwstKsipKe-210x300.jpg",
            videoLink: "https://mega.nz/embed/XJ1WkZzI#p_qCcHMeCpcftpfkA0RjOoPVtGsg2bRwoQSuf0_nPso"
        },
        {
            name: "Brothers’ Nest",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/b2k7IdRHHuD2HZPZMWsZzRFUHoA-200x300.jpg",
            videoLink: "https://mega.nz/embed/3cdlxaCQ#y54CFU4jiavHyDJhbYHj1mYRUtta_uPyCZsyi63WgQ8"
        },
        {
            name: "The Whole Truth",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/iL3Bx4YOqYdAMlx4czLyygA09MC-200x300.jpg",
            videoLink: "https://mega.nz/embed/zRd1GAbR#TvVodEc8Xsv6m4PGjvG_DMMiQTI5s9HSxyYwRSetfJA"
        },
        {
            name: "Kingdom IV",
            image: "https://mmsubmovie.com/wp-content/uploads/2025/02/qZKKwXyZ92K0mIRpf2FbCkQa7oO-200x300.jpg",
            videoLink: "https://mega.nz/embed/OY80HQ7L#JDp9RNRhO3iobNSYk5v9tPA3giICjm8Kxk16s0mehPU"
        }
       
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
