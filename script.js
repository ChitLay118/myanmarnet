document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================
    // ** လွယ်ကူသော ဗီဒီယို အချက်အလက်များ (Category အလိုက် ခွဲထားသည်) **
    // =========================================================
    
    // 1. ACTION Videos
    const actionVideos = [
        { name: "Live by Night", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bkd46T4RplawnDjpHoI8mhzTLks-200x300.jpg", videoLink: "https://mega.nz/embed/mZFzVByI#UqRrLkCu1xgLcHpFKS6CUPb5lno2g6Mvjh-fbANEdoU" },
        { name: "The Adjustment Bureau", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/A4wKf04g4DCVAWC67uPGozIJPGw-200x300.jpg", videoLink: "https://mega.nz/embed/mEtjxR6D#nI3JYlTXOIudI0ZM0yWY_ngH4D0PlFswvjEps5ej3uo" },
        { name: "The Legend of Zorro", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/duZDsuIA2uX93Vujtm89oHeTFqE-200x300.jpg", videoLink: "https://mega.nz/embed/2RlFwIZb#CHgdn-YMkSQ5vQCm-Y4WldQTF8YpGEk0iWW2OUVNg44" },
        { name: "Mission to Mars", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/beDWEWxgFlt1UWvf2al9cjDol2i-200x300.jpg", videoLink: "https://mega.nz/embed/PR0WhRbZ#n_0yW9aX8WST-CEV1tKttYm1X2XEZwwLv6WftlKxWlE" },
        { name: "Brothers’ Nest", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/b2k7IdRHHuD2HZPZMWsZzRFUHoA-200x300.jpg", videoLink: "https://mega.nz/embed/3cdlxaCQ#y54CFU4jiavHyDJhbYHj1mYRUtta_uPyCZsyi63WgQ8" },
        { name: "Kingdom IV", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/qZKKwXyZ92K0mIRpf2FbCkQa7oO-200x300.jpg", videoLink: "https://mega.nz/embed/OY80HQ7L#JDp9RNRhO3iobNSYk5v9tPA3giICjm8Kxk16s0mehPU" },
        { name: "Operation Condor", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/vkj5JxVgY1ZYhX4pBHHgwdRNEkl-200x300.jpg", videoLink: "https://mega.nz/embed/imJF2ZzI#Jijp-uZaZnCL_ijxiZQAnq-S5tdgz0qNE2NCDXMdkqU" },
        { name: "Armour of God", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/phCpGqCSBWJqutKxj73COACrlPt-200x300.jpg", videoLink: "https://mega.nz/embed/3zJUyLBT#WWXqY1kypaiy-Pj1TSwZ2f4V5c29R9f5hLlHz9_2kuc" },
    ];

    // 2. BOLLYWOOD Videos
    const bollywoodVideos = [
        { name: "Balota", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/29IpnkqWIkFvSlynGu7X6ylAdiL-200x300.jpg", videoLink: "https://mega.nz/embed/GRFX2CjK#GzEbDme5g7ET2MDNiACK6_akCK8nBBPEuctiZ75O7q8" },
        { name: "Made in China", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/oxjRe2CRSblw0NmA4Uwpu9b4F0j-200x300.jpg", videoLink: "https://mega.nz/embed/6AVxSQhD#yn0ypdvg7QQcmcBmxtGVRBZ3ZVY_7X-o0aBSA0g95hk" },
    ];
    
    // 3. DRAMA Videos (အသစ်ထည့်ထားသည်)
    const dramaVideos = [
        { name: "About Family (Korea)", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/gGHrBhwk4KpWSykvdVwMfmP2C7b-200x300.jpg", videoLink: "https://mega.nz/embed/nBU0XJ6Z#AGQW0L8rAl8ldfOj72kNoxiLzvmkcdTPBolrnAHkXV8" },
        { name: "The Whole Truth (Thriller/Drama)", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/iL3Bx4YOqYdAMlx4czLyygA09MC-200x300.jpg", videoLink: "https://mega.nz/embed/zRd1GAbR#TvVodEc8Xsv6m4PGjvG_DMMiQTI5s9HSxyYwRSetfJA" },
        // လိုအပ်ရင် ဒီမှာ Drama ဗီဒီယိုတွေ ထပ်ထည့်ပါ
        // { name: "New Drama Movie", image: "your_image_link", videoLink: "your_mega_link" },
    ];

    // 4. ADULT Videos
    const adultVideos = [
        { name: "Adult Clip 1", image: "https://placehold.co/200x200/505050/ffffff?text=Adult+1", videoLink: "https://mega.nz/embed/adult_video_1_link" },
    ];

    // 5. CARTOON Videos
    const cartoonVideos = [
        { name: "Nezha: Demon Child is Back", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bdhITckYK6CHhjRTYufi4As9mBM-225x300.jpg", videoLink: "https://mega.nz/embed/CFEGkBoT#bYUBO4fFKxpHyJsk5nxzuurwdJu2HTRQT8AZxiOC4TY" },
        { name: "New Gods: Nezha Reborn", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/np4ScPY04HESKBbpexwstKsipKe-210x300.jpg", videoLink: "https://mega.nz/embed/XJ1WkZzI#p_qCcHMeCpcftpfkA0RjOoPVtGsg2bRwoQSuf0_nPso" },
    ];
    
    // Tab တွင် မပါသော်လည်း Data ရှိနေသေးသော ဗီဒီယိုများ (Filtering Logic တွင် မပေါ်စေပါ)
    // const otherVideos = [
    //     { name: "Delicious Delivery", category: "Comedy", image: "...", videoLink: "..." },
    //     { name: "Faceless", category: "Horror", image: "...", videoLink: "..." },
    // ];


    const videoPlayer = document.getElementById('videoPlayer');
    const imageGallery = document.getElementById('imageGallery');
    const videoTabs = document.getElementById('videoTabs');
    
    // ** Tab စာရင်း (အသစ်ထပ်တိုး Drama ပါဝင်သည်) **
    const categories = ["Action", "Bollywood", "Drama", "Adult", "Cartoon"];
    let currentCategory = "Action"; // Default အနေဖြင့် Action ကို စတင်ပြသမည်
    
    // ** Category Name ကို သက်ဆိုင်ရာ Video Array နှင့် တွဲပေးသည် **
    const categoryMap = {
        "Action": actionVideos,
        "Bollywood": bollywoodVideos,
        "Drama": dramaVideos, // Drama အသစ်ထည့်ထားသည်
        "Adult": adultVideos,
        "Cartoon": cartoonVideos,
    };


    // --- Gallery Items များကို ဖန်တီးသည် ---
    
    /**
     * Gallery Items များကို ဖန်တီးပြီး HTML ထဲသို့ ထည့်သွင်းပေးသည့် function
     */
    function renderGallery(category) {
        imageGallery.innerHTML = ''; // အရင်ရှိပြီးသား Gallery တွေကို ရှင်းပစ်သည်

        // Category Map မှ သက်ဆိုင်ရာ Video Array ကို ယူသည်
        const filteredVideos = categoryMap[category] || [];

        filteredVideos.forEach(video => {
            // Gallery Item <div> ကို ဖန်တီးသည်။
            const item = document.createElement('div');
            item.className = 'gallery-item cursor-pointer transform transition duration-300 hover:scale-105';
            item.setAttribute('data-video', video.videoLink);

            // Content (ပုံ နှင့် နာမည်) ကို ထည့်သွင်းသည်။
            item.innerHTML = `
                <img src="${video.image}" alt="${video.name}" class="w-full h-auto rounded-lg shadow-md object-cover">
                <p class="mt-2 text-center text-sm md:text-base font-medium text-gray-400">${video.name}</p>
            `;

            // Click Event ကို တွဲပေးသည်။ (ဗီဒီယိုပြောင်းလဲရန်)
            item.addEventListener('click', () => {
                videoPlayer.src = video.videoLink;
            });

            // Gallery Container ထဲသို့ ထည့်သွင်းသည်။
            imageGallery.appendChild(item);
        });
    }

    // --- Tab ခလုတ်များကို ဖန်တီးသည် ---

    /**
     * Tab ခလုတ်များကို ဖန်တီးပြီး event listener များ တွဲပေးသည်။
     */
    function renderTabs() {
        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.className = 'tab-button';
            button.setAttribute('data-category', category);

            // စတင်ရမည့် Tab ကို active class ပေးထားသည်။
            if (category === currentCategory) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                // Active button ကို ပြောင်းလဲခြင်း
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');

                // ရွေးချယ်ထားသော Category ဖြင့် Gallery ကို ပြန်လည်ပြသခြင်း
                currentCategory = category;
                renderGallery(currentCategory);
            });

            videoTabs.appendChild(button);
        });
    }

    // စတင်ပြသခြင်း
    renderTabs();
    renderGallery(currentCategory);
});
