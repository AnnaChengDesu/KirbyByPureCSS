! function() {
    function writeCode(code, fn) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        let id = setInterval(() => {
            n++;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id);
                fn && fn.call()
            }
        }, 2)
    }
    let code = `
    .kirby {
        position: relative;
        width: 250px;
        height: 250px;
        margin: 8px auto 0;
        z-index: 0;
    }
    
    .kirby .lfoot {
        position: absolute;
        left: -54px;
        transform: rotate(-10deg);
    }
    
    .kirby .lfoot .shoe {
        position: absolute;
        width: 91.66667px;
        height: 70.96774px;
        top: 185px;
        left: 10px;
        background: #e0005b;
        border-radius: 100% 0 0 0 / 100% 0 0 0;
        border: 5px solid #000;
        border-bottom: 0;
        border-right: 0;
    }
    
    .kirby .lfoot .shoe::before {
        position: absolute;
        content: '';
        width: 115px;
        height: 78.57143px;
        bottom: -32px;
        right: -33px;
        background: #e0005b;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        border: 5px solid #000;
        z-index: -1;
    }
    
    .kirby .lfoot .shoe::after {
        position: absolute;
        content: '';
        bottom: -11px;
        left: 35px;
        width: 110px;
        height: 55px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 55px;
        border-bottom: 17px solid #8b0036;
        transform: translateZ(1px) rotate(-79deg);
    }
    
    .kirby .lfoot .shoe .highlight {
        position: absolute;
        bottom: 10px;
        left: 8px;
        background: #ee8bb3;
        width: 10px;
        height: 15px;
        border-radius: 5px / 7px;
        transform: rotate(20deg);
    }
    
    
    /* 这是卡比的右脚~ */
    
    .kirby .rfoot {
        position: absolute;
        right: 61px;
        transform: rotate(10deg);
    }
    
    .kirby .rfoot .shoe {
        position: absolute;
        width: 91.66667px;
        height: 70.96774px;
        top: 165px;
        left: 10px;
        background: #e0005b;
        border-radius: 0% 100% 0% 0% / 0% 100% 0% 0%;
        border: 5px solid #000;
        border-bottom: 0;
        border-left: 0;
    }
    
    .kirby .rfoot .shoe::before {
        position: absolute;
        content: '';
        width: 115px;
        height: 78.57143px;
        bottom: -32px;
        right: -5px;
        background: #e0005b;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        border: 5px solid #000;
        z-index: -1;
    }
    
    .kirby .rfoot .shoe::after {
        position: absolute;
        content: '';
        bottom: -11px;
        left: -56px;
        width: 110px;
        height: 55px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 55px;
        border-bottom: 17px solid #8b0036;
        transform: translateZ(1px) rotate(79deg);
    }
    
    .kirby .rfoot .shoe .highlight {
        position: absolute;
        bottom: 10px;
        left: 68px;
        background: #ee8bb3;
        width: 10px;
        height: 15px;
        border-radius: 5px / 7px;
        transform: rotate(-20deg);
    }
    
    
    /* 下面开始画卡比的身体啦~ */
    
    .kirby .body {
        position: absolute;
        top: -3px;
        left: 6px;
        width: 240px;
        height: 240px;
        background: #000;
        border-radius: 100%;
    }
    
    
    /* 这是卡比的左手 */
    
    .kirby .body .larm {
        position: absolute;
        top: 85px;
        left: -35px;
        width: 60px;
        height: 54.54545px;
        background: #f3a5aa;
        border: 5px solid #000;
        border-right: none;
        border-bottom: none;
        border-radius: 100% 0 0 0 / 100% 0 0 0%;
    }
    
    .kirby .body .larm::before {
        position: absolute;
        content: '';
        bottom: -34px;
        right: -5px;
        width: 60px;
        height: 30px;
        background: #f3a5aa;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 30px;
        border: 5px solid #000;
        border-right: 0;
        border-top: 0;
    }
    
    .kirby .body .larm::after {
        content: "";
        position: absolute;
        bottom: -30px;
        left: 2px;
        width: 60px;
        height: 30px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        border-bottom: 15px solid #ee8bb3;
    }
    
    
    /* 这是卡比的右手 */
    
    .kirby .body .rarm {
        position: absolute;
        top: 85px;
        left: 210px;
        width: 60px;
        height: 54.54545px;
        background: #f3a5aa;
        border: 5px solid #000;
        border-left: none;
        border-bottom: none;
        border-radius: 0 100% 0 0 / 0 100% 0 0;
    }
    
    .kirby .body .rarm::before {
        position: absolute;
        content: '';
        bottom: -34px;
        right: -5px;
        width: 60px;
        height: 30px;
        background: #f3a5aa;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 40px;
        border: 5px solid #000;
        border-left: 0;
        border-top: 0;
    }
    
    .kirby .body .rarm::after {
        content: "";
        position: absolute;
        bottom: -30px;
        left: -7px;
        width: 60px;
        height: 30px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        border-bottom: 15px solid #ee8bb3;
    }
    
    .kirby .body .face {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 228px;
        height: 228px;
        background-color: #f3a5aa;
        border-radius: 100%;
    }
    
    
    /* 这是卡比的眼睛 */
    
    .kirby .body .face .eye {
        position: absolute;
        background-color: #000;
        width: 27px;
        height: 72px;
        border-radius: 60%;
    }
    
    .kirby .body .face .left {
        position: absolute;
        top: 45px;
        left: 72px;
    }
    
    .kirby .body .face .right {
        position: absolute;
        top: 45px;
        left: 126px;
    }
    
    .kirby .body .face .eye::before {
        content: "";
        position: absolute;
        top: 11px;
        left: 4px;
        background-color: #0076c0;
        width: 19px;
        height: 56px;
        border-radius: 0 0 80% 80%;
    }
    
    .kirby .body .face .eye::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 1px;
        background-color: #000;
        width: 25px;
        height: 50px;
        border-radius: 60%;
    }
    
    .kirby .body .face .eye .eyeball {
        position: absolute;
        top: 7px;
        left: 6px;
        background-color: #fff;
        width: 14px;
        height: 24px;
        border-radius: 50%;
        z-index: 1;
    }
    
    
    /* 这是卡比的嘴巴 */
    
    .kirby .body .face .lip {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translateX(-50%) translateY(-48%);
        width: 35px;
        height: 25px;
        border-radius: 0 0 35px 35px;
        border: 3px solid #000;
        border-color: transparent transparent #000 transparent;
    }
    
    .kirby .body .face .blush {
        position: absolute;
        width: 40px;
        height: 25px;
        background: #eb6896;
        border-radius: 40px / 25px;
    }
    
    .face .l {
        position: absolute;
        top: 50%;
        left: 70%;
    }
    
    .face .r {
        position: absolute;
        top: 50%;
        left: 10%;
    }
    
    .kirby .body .face .shade {
        position: absolute;
        bottom: 1px;
        right: 4px;
        width: 220px;
        height: 115px;
        border-bottom-left-radius: 102px;
        border-bottom-right-radius: 102px;
        border-bottom: 26px solid #eb6b8e;
        border-top: 0;
    }

    /* 铛铛铛！一只卡比就画好啦~ */
    `

    writeCode(code)
}.call()