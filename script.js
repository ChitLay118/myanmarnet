document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================
    //  လွယ်ကူသော ဗီဒီယို အချက်အလက်များ (Category အလိုက် ခွဲထားသည်) 
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
        { name: "The Perfect Storm", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/vJPoxqgpfFNbGi0HyoNsjFeLCio-200x300.jpg", videoLink: "https://mega.nz/embed/WL5hTTrQ#vYTs-ee6YmNm-cks__0ovzm6IVn2KXjI0ZIWrQGqHq4" },
        { name: "Dead Hand", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/zB7SKChXDGJD9ADsOhskIFwD5gB-200x300.jpg", videoLink: "https://mega.nz/embed/7fR1hbga#3zRlTH9VbMzHpqMScF7bR_YAQ1c3xSLuqtfkGr2XT7s" },
        { name: "Wolf Warrior 2", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/87aWrVqaVhXhblhO7sYHLC2y8TT-200x300.jpg", videoLink: "https://mega.nz/embed/eyRH2IqY#0TgA_6esfVV4MK2T0B5yKXmhgTAbboPhIgI-9oRE7Rk" },
        { name: "Wolf Warrior", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/9tGyxJcPUQclngSCcT18oEs80Yn-200x300.jpg", videoLink: "https://mega.nz/embed/P6RGQRJY#aN2njcQCoH9lj1pDhWmX_X7Kqp5wPnxlS9gDwtAv7bg" },
        { name: "Bureau 749", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/flykCMw22y6yv8vKnBjmsW3pneo-200x300.jpg", videoLink: "https://mega.nz/embed/vdty3YqT#HABcWpMK6i91gHTl7hAyIxLhVvGmqFFPGll7hVUBtKM" },
        { name: "Vanguard", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/mKvw1Ic9enfFlCPBNJGiejRPMUO-200x300.jpg", videoLink: "https://mega.nz/embed/CiJXxbxZ#paXuXi-5ITIHNTA8LssjM6Tpw-1FGfcyrlY4gHaHP8U" },
        { name: "Who Am I?", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/9YDKLbBmWGpxG5bO3TBawtNNOAr-200x300.jpg", videoLink: "https://mega.nz/embed/GrBwWYzJ#8zTu-4guGjv4UGGRi7jO5q9mf3FzzkZZe_EErxc_JBc" },
        { name: "Inferno", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/cnqvFvjAaV28F1tU7986VVg0WP7-200x300.jpg", videoLink: "https://mega.nz/embed/675TmD5Z#b8KFiEiDjRTcok_3SEiSmAYqQTo7PwQeWfTds5EbYG0" },
        { name: "Monster Island", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/5xAIFOgKouHNsSt1yEdqHloJszY-202x300.jpg", videoLink: "https://mega.nz/embed/3lBBwQ4J#h4fgYQRYWSE-wqQpAXtaW03AhlLm3lJQsjvsTAg4yvc" },
        { name: "Civil War", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/sh7Rg8Er3tFcN9BpKIPOMvALgZd-200x300.jpg", videoLink: "https://mega.nz/embed/jxB0UZjR#qOFXPwxx9opuUPZeHekjPyUOq5UnmjeFSiOt6Er_QhM" },
        { name: "F1 The Movie", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/9tisVFdcQYlUk6Ni1cz38rqFZia-200x300.jpg", videoLink: "https://mega.nz/embed/igBHxI4B#s3YuTp2mSvb2_XpLvTnQqerZkIQLHmju2hjcAYoz1pE" },
        { name: "America Is Sinking", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/aJPnqK2kSM257FESP69HPTSWt3p-200x300.jpg", videoLink: "https://mega.nz/embed/jdkklBDA#nQm_ImmG_M6SNEyG0gB4xK_QPpeMMIGkQGLYVscdDXA" },
        { name: "Osiris", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/3YtZHtXPNG5AleisgEatEfZOT2w-200x300.jpg", videoLink: "https://mega.nz/embed/3JsQWBgA#SjJ4gd5Yhy3wGD22WFex6USbh2A0pkd1LGtCt6WGY24" },
        { name: "Red Eagle", image: "https://mmsubmovie.com/wp-content/uploads/2025/09/9wnbQ9d9pQqfTe5uVHarZh8aW-200x300.jpg", videoLink: "https://mega.nz/embed/bENWDR5b#ONPDpcHPvF7Zbuizv6FrgYCo3ZWlhRS7mLcbRl2W0KI" },
        { name: "Hitman: Agent Jun", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/dAt3nolyXLEEuXiIXZwv1iikbcA-200x300.jpg", videoLink: "https://mega.nz/embed/CyADFCgQ#PQa-r41vjqDiPw-1qXV98jRwuNntePV05V2orlZ3Ei0" },
        { name: "Hitman: Agent 47", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/cx9AOBOv9Qf5ufZYQMbfTV7w7VY-200x300.jpg", videoLink: "https://mega.nz/embed/imQWTAgY#WzxBSAH2ZBBijR1X5WiSJSpUVqH3tm9SclCd-Hkv55M" },
        { name: "Midway(2019)", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/hj8pyoNnynGeJTAbl7jcLZO8Uhx-200x300.jpg", videoLink: "https://mega.nz/embed/0A4xyDrK#pa88xnAxRD56OHfhkFxtofLEsQe55RG1aA4BURuJ9Q8" },
        { name: "Midway(1976)", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/vCzGV28YFmWubUn1jh8ytagYocR-200x300.jpg", videoLink: "https://mega.nz/embed/RNx11CIJ#XqEyL2mOkJN5s3RTkaUq2YuNHFJTG_E7n-F2dhkNWcA" },
        { name: "Hero", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/vxgZto2Cz7ILHAlmRXt50I2brB2-200x300.jpg", videoLink: "https://mega.nz/embed/pIoDWJ5a#SvvquGZ0SJEpEuflM6whsQWmusOcZzZ3k7OV8gTDrHw" },
        { name: "The New Legend of ShaoLin", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/57kngzlMiKkn6yg5lDfcxNmcYF4-200x300.jpg", videoLink: "https://mega.nz/embed/zkoRgRxI#QbIw1tsPrbx1AtCjlnx1_f8GeRfno5rJlflylUcQ3PU" },
        { name: "Terminator: Dark Fate", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/vqzNJRH4YyquRiWxCCOH0aXggHI-200x300.jpg", videoLink: "https://mega.nz/embed/jcFVwIyD#fDv3jIQc67XaYPGG7bOdiOZvfVu-St64ecZ7cKagXZ0" },
        { name: "Terminator Genisys", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/oZRVDpNtmHk8M1VYy1aeOWUXgbC-200x300.jpg", videoLink: "https://mega.nz/embed/LJNCECSC#zqIANiAdQZglq5mfJjkjxNCYx3BLNlRG6vl5mu_lNe0" },
        { name: "Terminator Salvation", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/gw6JhlekZgtKUFlDTezq3j5JEPK-200x300.jpg", videoLink: "https://mega.nz/embed/uVFz3IrQ#yHOcjbc2_fK4P-AbA4EqilgI8ieLp2vcfo5KlsUtIX4" },
        { name: "Terminator 3", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/vvevzdYIrk2636maNW4qeWmlPFG-200x300.jpg", videoLink: "https://mega.nz/embed/uc8EyQ7C#pgUhQ6BjrurxTs3pQcqBJKhh2S0lMFcPtIh0dwVqisM" },
        { name: "Terminator 2", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/weVXMD5QBGeQil4HEATZqAkXeEc-200x300.jpg", videoLink: "https://mega.nz/embed/nE8nVCya#kmcPTy_qkHqbCrBNaXgOOwEdwhuNLXdSEIAFHfhx060" },
        { name: "The Terminator", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/hzXSE66v6KthZ8nPoLZmsi2G05j-200x300.jpg", videoLink: "https://mega.nz/embed/fJs3iJhK#7mx0wusKV_LQ44EVZwOfxZCQt9ikm7B_isDt8kEvQeE" },
        { name: "Battlefield: Fall of The World", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/jJL2KJNUxxm7SIRBFN56j6Th5ES-200x300.jpg", videoLink: "https://mega.nz/embed/2EtSVBiK#nOvTVEgWwYw9aykkUBCOU-nNPYABLk6UlIp8UUDBBmE" },
        { name: "Air Force One Down", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/nKPoSD4pZ3s3CJ9g3cqWRcQ41TC-200x300.jpg", videoLink: "https://mega.nz/embed/7FlVFCCB#tkBOyvv4XBKBTDZk170HX5iXtHoBVg7iRVkJ7q64jIo" },
        { name: "Air Force One", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/juRFEbyx5JlNuYrZM50vcZmtN78-200x300.jpg", videoLink: "https://mega.nz/embed/3V0EkIBT#4_JPtg21mfe1l6wMvGm7grEPlr5gBzxDcISZc94J1Yk" },
        { name: "Blade: Trinity", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/r6ycjrStmmAqiY1oDjAli9NArCa-200x300.jpg", videoLink: "https://mega.nz/embed/y3RH0BII#IgO0CgaCTUMKRLWrzv9LGe0nDy4ZWwHjF1-3oopB1kc" },
        { name: "Blade II", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/azzTa03g0Fb8HC7O3521qq0oc8Q-200x300.jpg", videoLink: "https://mega.nz/embed/fm4iVSaT#MrL2NqSFG7oHWxw0crMPl23waJm8nj8PC0mav4i3vnU" },
        { name: "Blade", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/hx0sdduAsr4rq03RZKZzglR25z7-200x300.jpg", videoLink: "https://mega.nz/embed/CrhnWYCL#yx1JGZwQLo8EG_0twzIEOdh9kqnk43Ukmy24lfvs0XY" },
        { name: "Absolute Dominion", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/gTqTss9YJLigp0SFVtc4IXmE6zW-200x300.jpg", videoLink: "https://mega.nz/embed/md8mWIJI#TltiP2-nMJNNiUmsl9W5rIGNwg_IGw-ktjXP0JhCuZk" },
        { name: "49", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/nJNbyUFUt3c14CoIjLSn8ZxPw-200x300.jpg", videoLink: "https://mega.nz/embed/LcNgSZ6L#WQBR-ufLof_FE0-eIXPrmDK5MY5H0Rt0dtDRT0xqnzg" },
        { name: "Broken Arrow", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/iBPMwYYJFvdCBkXrwV75peo5Lz2-200x300.jpg", videoLink: "https://mega.nz/embed/6iJFSTDR#PxZV5_4ilKGIInM0QberTe7lUArTWxnB5egGXpx4xpo" },
        { name: "Halabala", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/hUTeK0qiyGTwbq2XodP7T1sfWNl-210x300.jpg", videoLink: "https://mega.nz/embed/7VMjzRQK#OEQAZLmvaMuT3c10QMx9KlsbMHOxrUZWwfrzMfAhwWM" },
        { name: "Dragon Blade", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/m5yyMErIDbdzVLIDXVBG6EzM1oF-200x300.jpg", videoLink: "https://mega.nz/embed/Hm4TmJzA#G3XBO2QvDTIIeGAf1Gqp_w0ExwTFk3-skysbB7t0wk0" },
        { name: "Taandob", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/iplMLlXU1BgmTz4xviILTOlECYL-200x300.jpg", videoLink: "https://mega.nz/embed/Z7t0SS7T#xDdr1dNg3_fR9hLJl4cCF8Q_ynECsbUoDlC49mVGNfs" },
        { name: "Red One", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/cdqLnri3NEGcmfnqwk2TSIYtddg-200x300.jpg", videoLink: "https://mega.nz/embed/UulGCThI#e9uk5ei5BLs-knSra3Z7hTXepC0_wHRzdQ8YYUM1pSQ" },
        { name: "Species III", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/8BelHo8qmaurZjPS9hipSQ79Rr6-200x300.jpg", videoLink: "https://mega.nz/embed/v9dx1ICY#l6z2QxXAZZySN21CI027AJAA2u0zvTSuwVdThYNE2Cw" },
        { name: "Species II", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/8LSBi0bHACZtIiVErUBQ2UXNYLA-200x300.jpg", videoLink: "https://mega.nz/embed/T4tGBYxS#GnHti23xMfIQIC55wIQmnnLSxVSL_DAGaSBqrjIbiGc" },
        { name: "Species", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/cT5wdyo8kT7dycqjrolJ2sHWkFx-200x300.jpg", videoLink: "https://mega.nz/embed/WpE2WQ5a#pucc6IyCzqkASCFvUOnNXZPKYZf24Spbh-2HJmm_RjQ" },
        { name: "Superman(2025)", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/ombsmhYUqR4qqOLOxAyr5V8hbyv-200x300.jpg", videoLink: "https://mega.nz/embed/l78mRL5B#1RJlNDqeLv47W-OqBU55n2nFdzb8Lal3ucXqCNSEnhc" },
        { name: "Maaman", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/a0BsRj9qQu8L2arBAHcbbfrVrB7-200x300.jpg", videoLink: "https://mega.nz/embed/9rVlTQCb#W4MNKjENxN6-R0SKWuO_LzGcLwSf_ETIQd5W48rRifw" },
        { name: "A Special Lady", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/bsmv8sDlVJsrSOHtdrimWxIjDCD-200x300.jpg", videoLink: "https://mega.nz/embed/qVsgABZJ#hzRMO6l86STADcTrbzArrEW9jrOIn_myvpF24upwsuU" },
        { name: "City of Bones", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/zaK1aVn5vXfNwLIDop9U8XA3Q0x-200x300.jpg", videoLink: "https://mega.nz/embed/ip8jjIhS#ddhcWX3RBnoiLodxulFWpEtF-vIZ0CL3L9bulDgu0NQ" },
        { name: "The Pickup", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/vFWvWhfAvij8UIngg2Vf6JV95Cr-200x300.jpg", videoLink: "https://mega.nz/embed/nRkknKBb#ByRAdtgVacXT8dqMPF2bUvRjYlt66C7MKXGaoQ0fNOQ" },
        { name: "The Lone Ranger", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/xRmsqvHnaWmrazJl9bTBqs4LAjp-200x300.jpg", videoLink: "https://mega.nz/embed/G81i2IDD#mWAj35euk3GoYjkdZXSprRhOzFVuHw4_1lxjPBSgCaM" },
        { name: "Broken Sword Hero", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/qWsGQKgrp6wpFXO8ShPbZgpdXDa-200x300.jpg", videoLink: "https://mega.nz/embed/CFNAkAgT#6uE-kFZmNGgpIB3_QH0owhKcEkfE-Bg-fUFWCrJmr4U" },
        { name: "Atlas", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r-200x300.jpg", videoLink: "https://mega.nz/embed/mYF1VZKY#yGrndy7HOHKekDIqAgrhgr3sHpBgHYC-y5JX7RkIRB0" },
        { name: "Shang-Chi", image: "https://mmsubmovie.com/wp-content/uploads/2025/08/d08HqqeBQSwN8i8MEvpsZ8Cb438-200x300.jpg", videoLink: "https://mega.nz/embed/OgdFBT7R#OG2XlCNKdUAQB0FmNm8U4-dfgqI8VhlDcajCQ0TMZyg" },
        
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
        { name: "မဟူရာရုပ်ရှင်ရုံ (နေတိုး)", image: "https://i.ytimg.com/vi/IdeH-gD3jHw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDydZr-LqUWkYYeBsERvvNLeR2vzg", videoLink: "https://www.youtube.com/embed/IdeH-gD3jHw"},
        { name: "မိုးမခဓားသမား(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/hidxwHpKAOI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCfFCSGtlsbq8amZnpz8PavHzWS9A", videoLink: "https://www.youtube.com/embed/hidxwHpKAOI?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "ရှိုးမထုတ်တဲ့ဖိုးရှုပ်(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/AXG-1PMRUow/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAw0f0JPuEeE9vq9ImtqLYu54Toyg", videoLink: "https://www.youtube.com/embed/AXG-1PMRUow?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "ဘမောင်ကိုဘောင်မခတ်နဲ့(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/iMEkp-ygo3M/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLD7cdIvhRZSBv_3wxWUr2cLl_HbCA", videoLink: "https://www.youtube.com/embed/iMEkp-ygo3M?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "ဗိုလ်တကာ့ဗိုလ်(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/QIU_qczgluk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAaG5Jqsww86KEQsW1xoBehy2W6NQ", videoLink: "https://www.youtube.com/embed/QIU_qczgluk?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "ဗန်ဒိုစံညိုနှင့်ရှောင်လင်သိုင်:ရာဇာ(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/LsCTgD-ojOM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAi69jMJ1UTboeMf0nSETkQ2_xWsw", videoLink: "https://www.youtube.com/embed/LsCTgD-ojOM?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "မဟာဘီလူး(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/3MJLqDcsfRU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDrGALNJBOnAFydp7GlHYnpAt2E1Q", videoLink: "https://www.youtube.com/embed/3MJLqDcsfRU?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "ဒဏ်ရာ(နေထူးနိုင်)", image: "https://i.ytimg.com/vi/pmUyU6LwizE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCFeMzBBzqWFeoGUiljzPYgWeIiTA", videoLink: "https://www.youtube.com/embed/pmUyU6LwizE?list=PL3IBGpSJCCYDkgEaFgfBawBzaqFcQstW-"},
        { name: "မိုးပေါ်ခုန်တက်ကလိုက်ချင်တယ်(နေတိုး)", image: "https://i.ytimg.com/vi/ghtn30mz8jY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDJz5yFH53r_O0kdFYhKe-9WHlWkw", videoLink: "https://www.youtube.com/embed/ghtn30mz8jY?list=PLkQrCHWyqYFlxbGMVqwfl4opvbkATpCu7"},
        { name: "ဒီကောင်ဘယ်သူတုန်း(နေတိုး)", image: "https://i.ytimg.com/vi/e4oetvhOSgI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB68mt_aWu4C02ZaW8KFDXyoW7Gsg", videoLink: "https://www.youtube.com/embed/e4oetvhOSgI?list=PLkQrCHWyqYFlxbGMVqwfl4opvbkATpCu7"},
        { name: "တာတေကြီး(နေတိုး)", image: "https://i.ytimg.com/vi/3fQUxZgFD9U/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBMe2zmuLrJsKHhbVkZkw-AOKVweQ", videoLink: "https://www.youtube.com/embed/3fQUxZgFD9U?list=PLkQrCHWyqYFlxbGMVqwfl4opvbkATpCu7"},
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
    
    //  Tab စာရင်း (မြန်မာ ပါဝင်သည်) 
    const categories = ["Action", "Bollywood", "Drama", "မြန်မာ", "Adult", "Cartoon"];
    let currentCategory = "Action"; // Default အနေဖြင့် Action ကို စတင်ပြသမည်
    
    //  Category Name ကို သက်ဆိုင်ရာ Video Array နှင့် တွဲပေးသည် 
    const categoryMap = {
        "Action": actionVideos,
        "Bollywood": bollywoodVideos,
        "Drama": dramaVideos,
        "မြန်မာ": myanmarVideos, // မြန်မာ Array ကို တွဲပေးလိုက်သည်
        "Adult": adultVideos,
        "Cartoon": cartoonVideos,
    };

// --- Gallery Items များကို ဖန်တီးသည် ---
    
    /
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

    /
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
