document.addEventListener('DOMContentLoaded', () => {
    
    // ** လွယ်ကူသော ဗီဒီယို အချက်အလက်များ (Category Field ပါဝင်သည်)**
    const videoData = [
        // Action (Default Category)
        { name: "Live by Night", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bkd46T4RplawnDjpHoI8mhzTLks-200x300.jpg", videoLink: "https://mega.nz/embed/mZFzVByI#UqRrLkCu1xgLcHpFKS6CUPb5lno2g6Mvjh-fbANEdoU" },
        { name: "The Adjustment Bureau", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/A4wKf04g4DCVAWC67uPGozIJPGw-200x300.jpg", videoLink: "https://mega.nz/embed/mEtjxR6D#nI3JYlTXOIudI0ZM0yWY_ngH4D0PlFswvjEps5ej3uo" },
        { name: "The Legend of Zorro", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/duZDsuIA2uX93Vujtm89oHeTFqE-200x300.jpg", videoLink: "https://mega.nz/embed/2RlFwIZb#CHgdn-YMkSQ5vQCm-Y4WldQTF8YpGEk0iWW2OUVNg44" },
        { name: "Mission to Mars", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/beDWEWxgFlt1UWvf2al9cjDol2i-200x300.jpg", videoLink: "https://mega.nz/embed/PR0WhRbZ#n_0yW9aX8WST-CEV1tKttYm1X2XEZwwLv6WftlKxWlE" },
        { name: "Brothers’ Nest", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/b2k7IdRHHuD2HZPZMWsZzRFUHoA-200x300.jpg", videoLink: "https://mega.nz/embed/3cdlxaCQ#y54CFU4jiavHyDJhbYHj1mYRUtta_uPyCZsyi63WgQ8" },
        { name: "Kingdom IV", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/qZKKwXyZ92K0mIRpf2FbCkQa7oO-200x300.jpg", videoLink: "https://mega.nz/embed/OY80HQ7L#JDp9RNRhO3iobNSYk5v9tPA3giICjm8Kxk16s0mehPU" },
        { name: "Operation Condor", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/vkj5JxVgY1ZYhX4pBHHgwdRNEkl-200x300.jpg", videoLink: "https://mega.nz/embed/imJF2ZzI#Jijp-uZaZnCL_ijxiZQAnq-S5tdgz0qNE2NCDXMdkqU" },
        { name: "Armour of God", category: "Action", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/phCpGqCSBWJqutKxj73COACrlPt-200x300.jpg", videoLink: "https://mega.nz/embed/3zJUyLBT#WWXqY1kypaiy-Pj1TSwZ2f4V5c29R9f5hLlHz9_2kuc" },
        
        // Bollywood
        { name: "Balota", category: "Bollywood", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/29IpnkqWIkFvSlynGu7X6ylAdiL-200x300.jpg", videoLink: "https://mega.nz/embed/GRFX2CjK#GzEbDme5g7ET2MDNiACK6_akCK8nBBPEuctiZ75O7q8" },
        { name: "Made in China", category: "Bollywood", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/oxjRe2CRSblw0NmA4Uwpu9b4F0j-200x300.jpg", videoLink: "https://mega.nz/embed/6AVxSQhD#yn0ypdvg7QQcmcBmxtGVRBZ3ZVY_7X-o0aBSA0g95hk" },

        // Korea
        { name: "About Family", category: "Korea", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/gGHrBhwk4KpWSykvdVwMfmP2C7b-200x300.jpg", videoLink: "https://mega.nz/embed/nBU0XJ6Z#AGQW0L8rAl8ldfOj72kNoxiLzvmkcdTPBolrnAHkXV8" },
        { name: "Korean Drama 1", category: "Korea", image: "https://placehold.co/200x200/50ffff/ffffff?text=Korea+1", videoLink: "https://mega.nz/embed/korean_video_1_link" },
        
        // Thai
        { name: "Thai Horror", category: "Thai", image: "https://placehold.co/200x200/ff50ff/ffffff?text=Thai+1", videoLink: "https://mega.nz/embed/thai_video_1_link" },
        
        // Adult
        { name: "Adult Clip 1", category: "Adult", image: "https://placehold.co/200x200/505050/ffffff?text=Adult+1", videoLink: "https://mega.nz/embed/adult_video_1_link" },

        // Cartoon
        { name: "Nezha: Demon Child is Back", category: "Cartoon", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bdhITckYK6CHhjRTYufi4As9mBM-225x300.jpg", videoLink: "https://mega.nz/embed/CFEGkBoT#bYUBO4fFKxpHyJsk5nxzuurwdJu2HTRQT8AZxiOC4TY" },
        { name: "New Gods: Nezha Reborn", category: "Cartoon", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/np4ScPY04HESKBbpexwstKsipKe-210x300.jpg", videoLink: "https://mega.nz/embed/XJ1WkZzI#p_qCcHMeCpcftpfkA0RjOoPVtGsg2bRwoQSuf0_nPso" },

        // (ယခင် videoData ထဲက ဖယ်ရှားခံရသော category များပါသည့် ဗီဒီယိုများ)
        { name: "Delicious Delivery", category: "Comedy", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/pbU2UBygdGERFZkGLRXXYlj4aVz-200x300.jpg", videoLink: "https://mega.nz/embed/uY1zFIIS#Fso09aLwdQMwSLq9RQA_4Y_u-awAvmUDg9wyMmHqaBM" },
        { name: "Faceless", category: "Horror", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/llTQhKYpctLVJr3BcLbaFQt2W8a-212x300.jpg", videoLink: "https://mega.nz/embed/TItERAzY#pRpLkcB3UMnBnz7sg5KxkvcOrziz5R3Xk-btKL5_sms" },
        { name: "The Whole Truth", category: "Thriller", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/iL3Bx4YOqYdAMlx4czLyygA09MC-200x300.jpg", videoLink: "https://mega.nz/embed/zRd1GAbR#TvVodEc8Xsv6m4PGjvG_DMMiQTI5s9HSxyYwRSetfJA" },
    ];

    const videoPlayer = document.getElementById('videoPlayer');
    const imageGallery = document.getElementById('imageGallery');
    const videoTabs = document.getElementById('videoTabs');
    
    // ** လိုချင်သော Tab စာရင်းကိုသာ ထားရှိခြင်း **
    const categories = ["Action", "Bollywood", "Korea", "Thai", "Adult", "Cartoon"];
    let currentCategory = "Action"; // Default အနေဖြင့် Action ကို စတင်ပြသမည်

    // --- Gallery Items များကို ဖန်တီးသည် ---
    
    /**
     * Gallery Items များကို ဖန်တီးပြီး HTML ထဲသို့ ထည့်သွင်းပေးသည့် function
     */
    function renderGallery(category) {
        imageGallery.innerHTML = ''; // အရင်ရှိပြီးသား Gallery တွေကို ရှင်းပစ်သည်

        // ရွေးချယ်ထားသော Category ကို စစ်ထုတ်သည်
        const filteredVideos = videoData.filter(video => 
            video.category === category
        );

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
