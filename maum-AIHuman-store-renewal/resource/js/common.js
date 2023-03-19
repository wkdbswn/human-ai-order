let workSelected, toolsSelected, idx, cntHeight, scrollPx, scrollFooter, footerHeight;
const orderJob = document.querySelector(".order_summary .job");
const orderWho = document.querySelector(".order_summary .who");
const orderWork = document.querySelector(".order_summary .work");
const orderDisplay = document.querySelector(".order_summary .display");
const jobList = document.querySelectorAll(".job .job_cnt.list li");
const jobShow = document.querySelectorAll(".job_cnt .box");
const whoList = document.querySelectorAll(".who .who_cnt.list li");
const whoShow = document.querySelectorAll(".who .who_cnt .box");
const whoImg = document.querySelectorAll(".who .who_cnt:last-child li img");
const btnNext = document.querySelectorAll(".btn_next");
const cntShow = document.querySelectorAll(".order_step_area > .cont");
const displaySelectList = document.querySelectorAll(".order_step_area .display ul li")
const jobSelected = document.querySelectorAll(".order_step_area .job .btn_select");
const whoSelected = document.querySelectorAll(".order_step_area .who .btn_select");
const workSelect = document.querySelectorAll(".order_step_area .work .btn_check");
const displaySelected = document.querySelectorAll(".order_step_area .display .btn_select");
const workSelectList = document.querySelectorAll(".work ul li");
const toolsSelectList = document.querySelectorAll(".tools ul li");
const btnWorkCheckbox = document.querySelectorAll(".work .btn_check");
const btnToolsCheckbox = document.querySelectorAll(".tools .btn_check");
const btnClose = document.querySelector(".order_cnt.summary .btn_close");
const aiOrder = document.querySelector(".order_cnt.summary");
const btnAgree = document.querySelector(".rd_cont");
const btnAgreeArea = document.querySelector(".rd_cont label");
const btnAgreeCheckbox = document.querySelector(".rd_cont input");
const btnBack = document.querySelector(".btn_back");
const orderSummary = document.querySelector(".order_summary");
const btnOrderSummary = document.querySelector(".order_summary .btn_order");
const makeAiHuman = document.querySelector(".make_aiHuman");
const btnMakeAiHuman = document.querySelector(".make_aiHuman .btn_order");
const btnSummary = document.querySelector(".btn_summary");
const btnMail = document.querySelector(".btn_mail");
const btnTop = document.querySelector(".btn_top");
const floatArea = document.querySelector(".float_area");
const footer = document.querySelector("#footerLanding");
const elBody = document.querySelector("body");
// const btnUser = document.querySelector(".btn_ico.user");
// const btnLang = document.querySelector(".btn_ico.lang");
// const btnMenu = document.querySelector(".btn_ico.app");
// const boxUser = document.querySelector(".maumUI .maum_sta .maum_etc .nav>li .lstBox.user");
// const boxLang = document.querySelector(".maumUI .maum_sta .maum_etc .nav>li .lstBox.language");
// const boxMenu = document.querySelector(".maumUI .maum_sta .maum_etc .nav>li .appBox");

// function gnbToggle(a,b,c,d){
//     a.addEventListener("click",function(){
//         b.classList.toggle("active");
//         c.classList.remove("active");
//         d.classList.remove("active");
//     })
// }
// gnbToggle(btnUser,boxUser,boxLang,boxMenu);
// gnbToggle(btnLang,boxLang,boxUser,boxMenu);
// gnbToggle(btnMenu,boxMenu,boxUser,boxLang);


// forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

// 기존 펑션
setTimeout(function() {
    setTimeout(function(){
        $(".bookathon").fadeOut(1500);
    }, 1000);
    setTimeout(function(){
        $(".intro").remove();
        $("#contents").fadeIn(2000);
    }, 2000);
}, 900);
function modalOpen(){
    $(".btn_modal_open").on("click", function () {
        var popupId = "." + $(this).attr("data-popup")+".modal_popup";
        
        $("body").css('overflow', 'hidden');
        $("body").find(popupId).wrap('<div class="modal_wrap"></div>');
        $("body").find(popupId).before('<div class="dim"></div>');

        //modal popup close
        $(".btn_md_close").off('click').on("click", function () {
            $("body").css("overflow","");
            $(".dim").fadeOut(800).remove();
            $("body").find(popupId).unwrap();
        });
    });
}
$(function(){
    $(".left img").animate({
        top:"50%",
        right:"-513px"
    }, 1200, "easeOutQuint");
    $(".right img").animate({
        bottom:"50%",
        left:"-513px"
    }, 1600, "easeOutQuint");
    
    $(".left").delay(1600).animate({
        right:"200%"
    }, 4000, "easeOutQuint");
    $(".right").delay(1600).animate({
        left:"200%"
    }, 4000, "easeOutQuint");

    modalOpen();
})
const wrapOffset = $('#wrap').offset();
if ($(document).scrollTop() > wrapOffset.top) {
    $('#wrap').addClass('transform');
} else {
    $('#wrap').removeClass('transform');
}
$(window).scroll(function() {
    const scrollLocate = $(window).scrollTop();
    $('.maumUI.transform .maum_sta').css('left', 0 - $(this).scrollLeft());
    if ($(document).scrollTop() > wrapOffset.top) {
        $('#wrap').addClass('transform');
    } else {
        $('#wrap').removeClass('transform');
    }
    if (scrollLocate > 50) {
        $('#header').addClass('transform');
    }
    if (scrollLocate < 50) {
        $('#header').removeClass('transform');
    }
});

//class control event
//remove all class
function removeClassAll(element){
    element.forEach(function(v){
        v.classList.remove("active");
    })
}
//remove one class
function removeClass(element){
    element.classList.remove("active");
}
//add class
function addClass(element){
    element.classList.add("active");
}
//toggle class
function toggleClass(element){
    element.classList.toggle("active");
}

//job
jobList.forEach(function(v,k){
    v.addEventListener("click",function(){
        removeClassAll(jobList);
        removeClassAll(jobShow);
        toggleClass(v);
        addClass(jobShow[k]);
        addClass(btnNext[0]);
        orderJob.innerHTML = "<p>" +  jobSelected[k].value + "</p>";
    })
})

//who
whoList.forEach(function(v,k){
    v.addEventListener("click",function(){
        removeClassAll(whoImg);
        removeClassAll(whoShow);
        toggleClass(whoImg[k]);
        addClass(whoShow[k]);
        addClass(btnNext[1]);
        orderWho.innerHTML ="<p>" + whoSelected[k].value + "</p>";
    })
})

//work
workSelectList.forEach(function(v,k){
    v.addEventListener("click",function(){
        toggleClass(v);
        toggleClass(btnWorkCheckbox[k]);
        addClass(btnNext[2]);
        workSelected = document.querySelectorAll(".work ul li.active");
        if( v.classList.contains("active") ){
            btnWorkCheckbox[k].checked = true;
        } else {
            btnWorkCheckbox[k].checked = false;
        }
    })
})

//display
displaySelectList.forEach(function(v,k){
    v.addEventListener("click",function(){
        displaySelected.forEach(function(v){
            v.checked = false;
        })
        removeClassAll(displaySelectList);
        addClass(btnNext[3]);
        addClass(v);
        displaySelected[k].checked = true;
        orderDisplay.innerHTML = "<p>" + displaySelected[k].value + "</p>";
    })
})

//tools
toolsSelectList.forEach(function(v,k){
    v.addEventListener("click",function(){
        toggleClass(v);
        toggleClass(btnToolsCheckbox[k]);
        toolsSelected = document.querySelectorAll(".tools ul li.active");
        if( v.classList.contains("active") ){
            btnToolsCheckbox[k].checked = true;
        } else {
            btnToolsCheckbox[k].checked = false;
        }
    })
})

//next step button event
btnNext.forEach(function(v,k){
    v.addEventListener("click",function(){
        idx = k + 1;
        cntHeight = cntShow[idx].offsetTop;
        $('html, body').animate({
            scrollTop: $(".order_step_area > .cont:eq(" + idx + ")").offset().top - 60
        }, 300);
        addClass(cntShow[idx]);
        v.classList.add("select");
    })
})

btnNext[2].addEventListener("click",function(){
    workSelect.forEach(function(v,k){
        if( workSelect[k].checked = true ){
            orderWork.innerHTML += "<p>" + workSelect[k].value + "</p>";
        }
    })
})

//video
const btnVideoShow = document.querySelectorAll(".btn_video");
const btnVideoClose = document.querySelector(".video_area .video_cnt button");
const videoArea = document.querySelector(".video_area");
const videoPlayer = document.querySelector(".video_area video");
const videoList = [
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/jsr_sample_1bedfaf7-7d13-4913-a11d-eb71613d5adf.mp4?v=1637894559",
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/ysm_sample.mp4?v=1637894598",
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/lcj_sample2.mp4?v=1637841857",
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/sje_sample1.mp4?v=1637841525",
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/mks_sample.mp4?v=1637839693",
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/pcm_sample1.mp4?v=1637842380",
    "https://cdn.shopify.com/s/files/1/0558/8588/9699/files/yys_sample.mp4?v=1637839937"
];

btnVideoClose.addEventListener("click",function(){
    removeClass(videoArea);
    videoPlayer.pause();
})
btnVideoShow.forEach(function(v,k){
    v.addEventListener("click",function(){
        addClass(videoArea);
        videoPlayer.src = videoList[k];
    })
})

//float item event
btnClose.addEventListener("click",function(){
    removeClass(aiOrder);
    addClass(floatArea);
    if( winSize > 1440 ){
        btnSummary.style.cssText = "visibility:visible; display:inline;";         
        // btnSummary.setAttribute("style", "visibility:visible; display:inline;");
        console.log(btnSummary.style.cssText);
    } else if( winSize <= 1440 ){
        btnMail.style.cssText="visibility:visible";
        btnTop.style.cssText="visibility:visible";
        btnSummary.style.cssText = "visibility:visible; display:inline;"; 
        btnSummaryImg.src="./resource/img/ico_write.svg";
    }
    if( winSize <= 1024 ){
        btnSummary.style.cssText="visibility:visible; display:inline;";
        btnTop.style.cssText="visibility:hidden";
        btnMail.style.cssText="visibility:hidden";
        $('body').off('scroll touchmove mousewheel');
        $('body').css({overflow:'auto'});
        elBody.classList.remove("active");
    }
    btnSummaryImg.src="./resource/img/ico_write.svg";
})
const btnSummaryImg = document.querySelector(".btn_summary img");
btnOrderSummary.addEventListener("click",function(){
    removeClass(orderSummary);
    removeClass(floatArea);
    addClass(makeAiHuman);
})
btnBack.addEventListener("click",function(){
    addClass(orderSummary);
    removeClass(makeAiHuman);
})
if( aiOrder.classList.contains("active") ){
    btnSummary.style.cssText="visibility:hidden";
    addClass(floatArea);
    btnSummaryImg.src="./resource/img/ico_write.svg";
} else {
    btnSummary.style.cssText="visibility:visible";
    removeClass(floatArea);
}
let winSize = window.innerWidth;
btnSummary.addEventListener("click",function(){
    addClass(aiOrder);
    addClass(orderSummary);
    removeClass(makeAiHuman);
    if( winSize > 1440 ){
        btnSummary.style.cssText="visibility:hidden";
        btnSummary.style.cssText="display:none";
    } else if( winSize <= 1440 ){
        btnSummary.style.cssText="visibility:visible; display:block;";
        btnTop.style.cssText="visibility:hidden";
        btnMail.style.cssText="visibility:hidden";
        btnSummaryImg.src="./resource/img/ico_write_popup_open.svg";
    }
    if( winSize <= 1024 ){
        btnSummary.style.cssText="visibility:hidden; display:inline;";
        $('body').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        $('body').css({overflow:'hidden'});
        elBody.classList.add("active");
        aiOrder.style.cssText = "position:fixed";
        aiOrder.style.top = 60 + "px";
    }
    removeClass(floatArea);
})

//resize window event
window.addEventListener("resize",function(){
    winSize = window.innerWidth;
    if( winSize > 1440 ){
        aiOrder.classList.add("active");
        if(aiOrder.classList.contains("active")){
            aiOrder.classList.add("active");
            btnSummary.style.cssText="visibility:hidden; display:none;";
            btnTop.style.cssText="visibility:visible";
            btnMail.style.cssText="visibility:visible";
        }else{
            aiOrder.classList.remove("active");
            btnSummary.style.cssText="visibility:visible";
            btnSummary.style.cssText="display:block";
            btnTop.style.cssText="visibility:visible";
            btnMail.style.cssText="visibility:visible";
        }
    }
    if( winSize <= 1440 ){
        if(aiOrder.classList.contains("active")){
            aiOrder.classList.add("active");
            addClass(orderSummary);
            btnSummary.style.cssText="visibility:visible; display:block; ;";
            btnSummaryImg.src="./resource/img/ico_write_popup_open.svg";
            btnTop.style.cssText="visibility:hidden";
            btnMail.style.cssText="visibility:hidden";
            removeClass(floatArea);
        }else{
            aiOrder.classList.remove("active");
            btnSummary.style.cssText="visibility:visible; display:inline;";
            btnSummaryImg.src="./resource/img/ico_write.svg";
            btnTop.style.cssText="visibility:visible";
            btnMail.style.cssText="visibility:visible";
        }
    }
    if( winSize <= 1024 ){
        btnTop.style.cssText="visibility:hidden";
        btnMail.style.cssText="visibility:hidden";
        if(aiOrder.classList.contains("active")){
            aiOrder.classList.add("active");
            btnSummary.style.cssText="visibility:hidden";
            btnSummary.style.cssText="display:none";
        }else{
            aiOrder.classList.remove("active");
            btnSummary.style.cssText="visibility:visible; display:inline";
        }
    }
})

function windowSizeCheck(){
    winSize = window.innerWidth;
    if( winSize > 1440 ){
        aiOrder.classList.add("active");
        if(aiOrder.classList.contains("active")){
            aiOrder.classList.add("active");
            btnSummary.style.cssText="visibility:hidden; display:none;";
            btnTop.style.cssText="visibility:visible";
            btnMail.style.cssText="visibility:visible";
        }else{
            aiOrder.classList.remove("active");
            btnSummary.style.cssText="visibility:visible";
            btnSummary.style.cssText="display:block";
            btnTop.style.cssText="visibility:visible";
            btnMail.style.cssText="visibility:visible";
        }
    }
    if( winSize <= 1440 ){
        aiOrder.classList.remove("active");
        if(aiOrder.classList.contains("active")){
            aiOrder.classList.add("active");
            btnSummary.style.cssText="visibility:visible; display:inline;";
            btnTop.style.cssText="visibility:hidden";
            btnMail.style.cssText="visibility:hidden";
        }else{
            aiOrder.classList.remove("active");
            btnSummary.style.cssText="visibility:visible; display:inline;";
            btnTop.style.cssText="visibility:visible";
            btnMail.style.cssText="visibility:visible";
        }
    }
    if( winSize <= 1024 ){
        aiOrder.classList.remove("active");
        btnTop.style.cssText="visibility:hidden";
        btnMail.style.cssText="visibility:hidden";
        if(aiOrder.classList.contains("active")){
            aiOrder.classList.add("active");
            btnSummary.style.cssText="visibility:hidden";
            btnSummary.style.cssText="display:none";
        }else{
            aiOrder.classList.remove("active");
            btnSummary.style.cssText="visibility:visible; display:inline";
        }
    }
}
windowSizeCheck();



window.addEventListener("scroll",function(){
    scrollPx = 630 - window.pageYOffset;
    scrollFooter = ( footer.offsetHeight - (document.body.scrollHeight - window.innerHeight - window.pageYOffset) ) - 60;
    footerHeight = document.body.scrollHeight - window.innerHeight - footer.offsetHeight;
    if( window.pageYOffset <= 570 ){
        aiOrder.style.top = scrollPx + "px";
    } else if( window.pageYOffset > 570 ){
        aiOrder.style.top = 60 + "px";
    }
    if( footerHeight <= window.pageYOffset ){
        aiOrder.style.top = "-" + scrollFooter + "px";
    }
    if( winSize < 1024 ){
        scrollPx = 448 - window.pageYOffset;
        if( window.pageYOffset <= 388 ){
            aiOrder.style.top = scrollPx + "px";
        } else if( window.pageYOffset > 388 ){
            aiOrder.style.top = 60 + "px";
        }
        if( footerHeight <= window.pageYOffset ){
            aiOrder.style.top = "-" + scrollFooter + "px";
        }
    }
    if( winSize < 768 ){
        aiOrder.style.top = 60 + "px";
        if( !aiOrder.classList.contains("active") ){
            if( footerHeight <= window.pageYOffset ){
                aiOrder.style.top = "-" + scrollFooter + "px";
            }
        }
    }
})
if( winSize < 768 ){
    aiOrder.style.top = 60 + "px";
}

btnAgreeArea.addEventListener("click",function(){
    if( btnAgree.classList.contains("checked") ){
        btnAgree.classList.remove("checked");
        btnAgreeCheckbox.checked = true;
    } else {
        btnAgree.classList.add("checked");
        btnAgreeCheckbox.checked = false;
    }
})
btnMail.addEventListener("click",function(){
    window.open('https://maum.ai/inquiry');
})
btnTop.addEventListener("click",function(){
    $('html, body').animate({scrollTop: '0'}, 300);
})

//form check
// function maxLengthCheck(object){
//     if (object.value.length > object.maxLength){
//         object.value = object.value.slice(0, object.maxLength);
//     }    
// }
function email_check( email ) {    
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
}
btnMakeAiHuman.addEventListener("click", function(){
    var email = document.querySelector("input[type=email]").value;
    if( email == '' || email == 'undefined') return;
    if(! email_check(email) ) {
        alert("이메일 형식으로 적어주세요.")
        document.querySelector("input[type=email]").focus();
        return false;
    }
})


//page reload event
window.addEventListener("load",function(){
    $('html, body').animate({scrollTop:0}, 300);
})


//swiper event
var visualSwiper01 = new Swiper('.swiper-container.job01', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job01 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});
var visualSwiper02 = new Swiper('.swiper-container.job02', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job02 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});
var visualSwiper03 = new Swiper('.swiper-container.job03', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job03 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});
var visualSwiper04 = new Swiper('.swiper-container.job04', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job04 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});
var visualSwiper05 = new Swiper('.swiper-container.job05', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job05 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});
var visualSwiper06 = new Swiper('.swiper-container.job06', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job06 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});
var visualSwiper07 = new Swiper('.swiper-container.job07', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    pagination: {
        el: '.swiper-container.job07 .swiper-paging',
        type: 'bullets',
        clickable : true,
    },
    observer: true,
    observeParents: true,
    speed:1500,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
});

var jobListSwiper;
var whoListSwiper;
var displayListSwiper;
var toolsListSwiper;

if( winSize <= 768 && jobListSwiper == undefined ){
    jobListSwiper = new Swiper('.swiper-container.jobList', {
        slidesPerView: 3.14,
        spaceBetween: 10,
        loop: false,
        pagination: {
            el: '.swiper-container.jobList .page',
            type: 'bullets',
            clickable : true,
        },
    });
    whoListSwiper = new Swiper('.swiper-container.whoList', {
        slidesPerView: 2.6,
        spaceBetween: 10,
        loop: false,
    });
    displayListSwiper = new Swiper('.swiper-container.displayList', {
        slidesPerView: 3.5,
        spaceBetween: 10,
        loop: false,
        pagination: {
            el: '.swiper-container.displayList .page',
            type: 'bullets',
            clickable : true,
        },
    });
    toolsListSwiper = new Swiper('.swiper-container.toolsList', {
        slidesPerView: 3.5,
        spaceBetween: 10,
        loop: false,
        pagination: {
            el: '.swiper-container.toolsList .page',
            type: 'bullets',
            clickable : true,
        },
    });
}
if( winSize > 768 && jobListSwiper != undefined ){
    jobListSwiper.destroy();
    whoListSwiper.destroy();
    displayListSwiper.destroy();
    toolsListSwiper.destroy();
    jobListSwiper = undefined;
    whoListSwiper = undefined;
    displayListSwiper = undefined;
    toolsListSwiper = undefined;
}

window.addEventListener("resize",function(){
    winSize = window.innerWidth;
    if( winSize <= 768 && jobListSwiper == undefined ){
        jobListSwiper = new Swiper('.swiper-container.jobList', {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: false,
            pagination: {
                el: '.swiper-container.jobList .page',
                type: 'bullets',
                clickable : true,
            },
        });
        whoListSwiper = new Swiper('.swiper-container.whoList', {
            slidesPerView: 2.6,
            spaceBetween: 10,
            loop: false,
        });
        displayListSwiper = new Swiper('.swiper-container.displayList', {
            slidesPerView: 3.5,
            spaceBetween: 10,
            loop: false,
            pagination: {
                el: '.swiper-container.displayList .page',
                type: 'bullets',
                clickable : true,
            },
        });
        toolsListSwiper = new Swiper('.swiper-container.toolsList', {
            slidesPerView: 3.5,
            spaceBetween: 10,
            loop: false,
            pagination: {
                el: '.swiper-container.toolsList .page',
                type: 'bullets',
                clickable : true,
            },
        });
    }
    else if( winSize > 768 && jobListSwiper != undefined ){
        jobListSwiper.destroy();
        whoListSwiper.destroy();
        displayListSwiper.destroy();
        toolsListSwiper.destroy();
        jobListSwiper = undefined;
        whoListSwiper = undefined;
        displayListSwiper = undefined;
        toolsListSwiper = undefined;
    }
})