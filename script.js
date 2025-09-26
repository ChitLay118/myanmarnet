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
        { name: "Made in China", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/oxjRe2CRSblw0NmA4Uwpu9b4F0j-200x300.jpg", videoLink: "https://mega.nz/embed/6AVxSQhD#yn0ypdvg7QQcmcBmxtGVRBZ3ZVY_7X-o0aBSA0g95hk" },
    ];

    // 2. BOLLYWOOD Videos
    const bollywoodVideos = [
        { name: "Balota", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/29IpnkqWIkFvSlynGu7X6ylAdiL-200x300.jpg", videoLink: "https://mega.nz/embed/GRFX2CjK#GzEbDme5g7ET2MDNiACK6_akCK8nBBPEuctiZ75O7q8" },
        { name: "Soorarai Pottru", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/5uimlxPCgAei8JfQUDFEUQLoyyh-200x300.jpg", videoLink: "https://mega.nz/embed/3c8GwTzK#qEcN3h3CM_dzWXwi3NQEr0DBITwQSVKjMVObGWqowBA" },
        { name: "Maa", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/kc5n7LJUmvBsVxzAla1ONN8kouP-200x300.jpg", videoLink: "https://mega.nz/embed/mR9DDbSD#z8gTuRMxFVeGB7Q8mphs9X8g1HPJkAtZ0ftOitfi6fE" },
        { name: "Godse", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/cR9NesoY99WGQtQPViwbbthAWnt-200x300.jpg", videoLink: "https://mega.nz/embed/eo43SCJZ#5FuyVAlSYCCuNLjvgvcRpEayjJUM1kE3M4vfvPaT4cs" },
        { name: "Kothapallilo Okappudu", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/renqstBr6YWrp0J0ngad4dnIrMl-200x300.jpg", videoLink: "https://mega.nz/embed/KtwiRRjJ#2XVi4nUk4IGGtGR1CJa4DZx9WXzt1LlqPS5l6vqkgGU" },
        { name: "The Teacher", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/szlck49swaimG1UlITTiCa2F1Gy-200x300.jpg", videoLink: "https://mega.nz/embed/jcsBTDSR#tfWEbuLc-D7lSWLufaeIc23F4sat2J1YnWzgH62cbQU" },
        { name: "Good Day", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/A87qj6W0SGjlGvFWtqf0i0Froer-200x300.jpg", videoLink: "https://mega.nz/embed/nhoByCKK#Sl9hFNnlRFpsrmSy382jC1PQGvm0odq3VFgTB2OzjNg" },
        { name: "Akkenam", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/1tUVshO5qTfoZZ1lv4AlPFGnTnH-200x300.jpg", videoLink: "https://mega.nz/embed/q44DnJbA#dHb65xBjIZ_TWqZXqzNbJc0VWol3Ivi3AxxiV6ZVkkA" },
        { name: "Badla", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/eKpzbERuhogYTwI3PwfVsAHXnuO-200x300.jpg", videoLink: "https://mega.nz/embed/flsywJ4B#b2bpSZoJ0xfcU31v5f32Hsx97VbGGA8xvUL5AmiFR8Q" },
        { name: "Satyameva Jayate 2", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/y1ebOObyi97slwBTljIifE67PR5-200x300.jpg", videoLink: "https://mega.nz/embed/OlFBjJQT#ZxNyWx6wkxDhksJXsRHhd4Bdmq1hTdKSwo9Uo_ow-Y4" },
        { name: "Satyameva Jayate", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/4cgcfxYE1UoNGISx9CrdhuKsXe3-200x300.jpg", videoLink: "https://mega.nz/embed/WosQkajb#0hS2A9GjYsLA7YdVf9QiZMbInH0bMlbWzfH0ynLm-Fk" },
        { name: "Flight", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/cTidclJOxLIwqmV4zzMSs8goTu1-200x300.jpg", videoLink: "https://mega.nz/embed/L9pzjbgJ#dR89fgSLsFt6qpIWE-FjOSXZTvU9pHpubAoCtvk_59s" },
        { name: "Kalki 2898-AD", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/rstcAnBeCkxNQzNp3YXrF6IP1tW-200x300.jpg", videoLink: "https://mega.nz/embed/vd1RgTDB#E7NyoASfgVsN_xgOF5sHr-m9fds2_CWmiR2Lz3EtxMQ" },
        { name: "Karamsutra", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/akxdNCJQ3wh0bRLRl2p7VaICRXe-200x300.jpg", videoLink: "https://mega.nz/embed/7xBUCabJ#PWGNIGJ3RXobPShScADer0BSZxlnUxz5lTju51zGER8" },
        { name: "Taandob", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/iplMLlXU1BgmTz4xviILTOlECYL-200x300.jpg", videoLink: "https://mega.nz/embed/Z7t0SS7T#xDdr1dNg3_fR9hLJl4cCF8Q_ynECsbUoDlC49mVGNfs" },
        { name: "Six Each", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/mSUD3y15nNurCWZv2DyJwalWo2Z-200x300.jpg", videoLink: "https://mega.nz/embed/MukDjIIS#9aOxbVCc03L3ojL2wtPwB63JRjPHvzJBajOHiZZtgAk" },
        { name: "Gangubai Kathiawadi", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/wHPEKlzg7CaJFCjWlMdZKpCRIDl-200x300.jpg", videoLink: "https://mega.nz/embed/1us2mJCL#VIaEF2yi97qMeoT4jitFzqI2_KqIYtC-mRC2EIdyGsw" },
        { name: "Maaman", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/a0BsRj9qQu8L2arBAHcbbfrVrB7-200x300.jpg", videoLink: "https://mega.nz/embed/9rVlTQCb#W4MNKjENxN6-R0SKWuO_LzGcLwSf_ETIQd5W48rRifw" },
        { name: "Baida", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/op8Edzg2xHeGiprxJDFUt1OdJfh-200x300.jpg", videoLink: "https://mega.nz/embed/F68h0R7T#9faE21SqegnK0bExk6Kojemw3EfUr8p8MK1UytI5yDU" },
        { name: "Kaliyugam", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/hRKMtcIFzJyi59PtULiKQT4vPoA-200x300.jpg", videoLink: "https://mega.nz/embed/vF8ijKaJ#C4LvYwlLrK6qGhbG5ZHeHk1hXTwnJhTzJ9Fp_VQPQ3A" },
        { name: "Detective Sherdil", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/gqLrdGer0xvG5ezas7Qe3alqMzV-200x300.jpg", videoLink: "https://mega.nz/embed/fQU2TS4b#Kth5oFw96NN7_YHM_g6BaHHSWzp-zGd2fSABNVk0oXE" },
        { name: "Ghatikachalam", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/rjxyLloFbnjCHPm3XHBs6SZx3SA-225x300.jpg", videoLink: "https://mega.nz/embed/b0gB0CqZ#34yfwpOwR0AHfvjm4zEks2yl7IwBZKhuMRNMDduc2ms" },
        { name: "The Verdict", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/zDf6wYW85LUQiHFMQJe5wGJuc93-200x300.jpg", videoLink: "https://mega.nz/embed/jkBTXQzb#K8nMvufOg9jgtDfbHyCdLse672-Pkq8V8TgW5FAojnE" },
        { name: "Krack", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/jWzsCbUVeMZy286wNEhhYN3iDSO-200x300.jpg", videoLink: "https://mega.nz/embed/hUckWQAK#KVSnmAyFLxROTsdIIndZklgtJ9xRc_158LmWT_AIUH4" },
        { name: "Jai Gangaajal", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/txveHYPSMXdhUB8sGWGSJhtV6Yb-200x300.jpg", videoLink: "https://mega.nz/embed/HdlBjSZA#44Dg2tnUabHVnR4PC90Wk0OTIWJ_8pycVpgOZRxm-34" },
        { name: "23 (Iravai Moodu)", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/sIULuvuzbf54Fm1U5ckkEbK1Vai-225x300.jpg", videoLink: "https://mega.nz/embed/SIUBzI7D#ZaT_5SbHtlQj1z5-0iFMBFhqksRy4dQ_BHN9q-hMOfo" },
        { name: "AK vs AK", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/4ULEEvH0hDYnbWN3nClrb88sYCF-200x300.jpg", videoLink: "https://mega.nz/embed/QJExAQzT#WMCZgZFvvfaDjSRzdJQQ4uKR3tvYmxYE3PoSdGihiEI" },
        { name: "Sikandar Ka Muqaddar", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/eWUh4rgxtgypgnOa6uGMnUt01ux-200x300.jpg", videoLink: "https://mega.nz/embed/TYl0wJjD#FP7hZmf1xhJFh5_lePbDDIi7sjJ_xqRevCYvchccYyA" },
        { name: "100% Love", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/xDuAT2K7kcN2kM9BP9lwwNqNWCD-200x300.jpg", videoLink: "https://mega.nz/embed/MhJ3yB7I#3XkLJdNYpUH_YIjCCGM-ePOQwZOASwCAq8O9GVfAGPA" },
        { name: "Hindi Medium", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/2v0nQd3kYBV0iPNCVHiaLWGb1hg-200x300.jpg", videoLink: "https://mega.nz/embed/T7QSzB5R#6whukILXSpz8TG8RQ5wRQbIeogwcEf57_WKV2QxdXzw" },
    ];
    
    // 3. DRAMA Videos
    const dramaVideos = [
        { name: "About Family (Korea)", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/gGHrBhwk4KpWSykvdVwMfmP2C7b-200x300.jpg", videoLink: "https://mega.nz/embed/nBU0XJ6Z#AGQW0L8rAl8ldfOj72kNoxiLzvmkcdTPBolrnAHkXV8" },
        { name: "The Whole Truth (Thriller/Drama)", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/iL3Bx4YOqYdAMlx4czLyygA09MC-200x300.jpg", videoLink: "https://mega.nz/embed/zRd1GAbR#TvVodEc8Xsv6m4PGjvG_DMMiQTI5s9HSxyYwRSetfJA" },
        
        // ဒီမှာ Drama ဗီဒီယိုတွေ ထပ်ထည့်ပါ
    ];

    // 4. မြန်မာ Videos (အသစ်ထပ်တိုး)
    const myanmarVideos = [
        { name: "မဟူရာရုပ်ရှင်ရုံ (စ/ဆုံး)", image: "https://i.ytimg.com/vi/IdeH-gD3jHw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDydZr-LqUWkYYeBsERvvNLeR2vzg", videoLink: "https://www.youtube.com/embed/IdeH-gD3jHw"},
        // ဒီမှာ မြန်မာဗီဒီယိုတွေ ထပ်ထည့်ပါ
        // { name: "အသစ်ထပ်ထည့်မည့်မြန်မာကား", image: "your_image_link", videoLink: "your_mega_link" },
    ];


    // 5. ADULT Videos
    const adultVideos = [
        { name: "Adult Clip 1", image: "https://placehold.co/200x200/505050/ffffff?text=Adult+1", videoLink: "https://mega.nz/embed/adult_video_1_link" },
    ];

    // 6. CARTOON Videos
    const cartoonVideos = [
        { name: "Nezha: Demon Child is Back", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/bdhITckYK6CHhjRTYufi4As9mBM-225x300.jpg", videoLink: "https://mega.nz/embed/CFEGkBoT#bYUBO4fFKxpHyJsk5nxzuurwdJu2HTRQT8AZxiOC4TY" },
        { name: "New Gods: Nezha Reborn", image: "https://mmsubmovie.com/wp-content/uploads/2025/02/np4ScPY04HESKBbpexwstKsipKe-210x300.jpg", videoLink: "https://mega.nz/embed/XJ1WkZzI#p_qCcHMeCpcftpfkA0RjOoPVtGsg2bRwoQSuf0_nPso" },
    ];
    

    const videoPlayer = document.getElementById('videoPlayer');
    const imageGallery = document.getElementById('imageGallery');
    const videoTabs = document.getElementById('videoTabs');
    
    // ** Tab စာရင်း (မြန်မာ ပါဝင်သည်) **
    const categories = ["Action", "Bollywood", "Drama", "မြန်မာ", "Adult", "Cartoon"];
    let currentCategory = "Action"; // Default အနေဖြင့် Action ကို စတင်ပြသမည်
    
    // ** Category Name ကို သက်ဆိုင်ရာ Video Array နှင့် တွဲပေးသည် **
    const categoryMap = {
        "Action": actionVideos,
        "Bollywood": bollywoodVideos,
        "Drama": dramaVideos,
        "မြန်မာ": myanmarVideos, // မြန်မာ Array ကို တွဲပေးလိုက်သည်
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
            
            // Mega Link ဖြစ်မဖြစ် စစ်ပြီး <iframe> တွင် အသုံးပြုရန် src attribute တွင် သတ်မှတ်သည်
            const videoSrc = video.videoLink.includes('mega.nz/embed') 
                ? video.videoLink 
                : video.videoLink; // YouTube embed link အတွက် ပြောင်းလဲစရာမလို
            
            // Content (ပုံ နှင့် နာမည်) ကို ထည့်သွင်းသည်။
            item.innerHTML = `
                <img src="${video.image}" alt="${video.name}" class="w-full h-auto rounded-lg shadow-md object-cover">
                <p class="mt-2 text-center text-sm md:text-base font-medium text-gray-400">${video.name}</p>
            `;

            // Click Event ကို တွဲပေးသည်။ (ဗီဒီယိုပြောင်းလဲရန်)
            item.addEventListener('click', () => {
                const videoPlayer = document.getElementById('videoPlayer');
                // ဗီဒီယို Link ကို iframe ရဲ့ src ထဲကို တိုက်ရိုက်ထည့်ပေးသည်
                videoPlayer.src = videoSrc;
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
