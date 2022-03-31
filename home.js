// let header_center = document.getElementsByClassName("header")[0]
// header_center.onmouseenter = () => {
//     document.getElementsByClassName("header_center")[0].style.border = "2px #98CE00 solid"
// }
// header_center.onmouseout = () => {
//     document.getElementsByClassName("header_center")[0].style.border = "2px #F4F4F6 solid"
// }

const logo = document.getElementById("logo")
//console.log(logo)
logo.onmouseover = () => {show_go_on_green_button()}
logo.onmouseout = () => {hide_go_on_green_button()}

document.getElementById("project").onmouseover = () => {show_go_on_green_button()}
document.getElementById("project").onmouseout = () => {hide_go_on_green_button()}

document.getElementById("about").onmouseover = () => {show_go_on_green_button()}
document.getElementById("about").onmouseout = () => {hide_go_on_green_button()}

document.getElementById("contact").onmouseover = () => {show_go_on_green_button()}
document.getElementById("contact").onmouseout = () => {hide_go_on_green_button()}



document.getElementById("instagram").onmouseover = () => {show_go_on_green_button()}
document.getElementById("instagram").onmouseout = () => {hide_go_on_green_button()}

document.getElementById("linkedin").onmouseover = () => {show_go_on_green_button()}
document.getElementById("linkedin").onmouseout = () => {hide_go_on_green_button()}

document.getElementById("facebook").onmouseover = () => {show_go_on_green_button()}
document.getElementById("facebook").onmouseout = () => {hide_go_on_green_button()}

document.getElementById("github").onmouseover = () => {show_go_on_green_button()}
document.getElementById("github").onmouseout = () => {hide_go_on_green_button()}



document.getElementById("scrooll_doboz").onmouseover = () => {show_go_on_green_button()}
document.getElementById("scrooll_doboz").onmouseout = () => {hide_go_on_green_button()}

let nemtom = "☝"

document.getElementById("header_center").onmouseover = () => {
    document.getElementsByClassName("zöld_háttér")[0].children[0].style.color = "white"
    document.getElementsByClassName("zöld_háttér")[0].children[0].style.fontSize = '35px'
    document.getElementsByClassName("zöld_háttér")[0].style.backgroundColor = 'transparent'
    document.getElementsByClassName('ball')[0].style.backgroundColor = 'transparent'
    
    document.getElementsByClassName("zöld_háttér")[0].children[0].innerHTML = "☝"
    show_go_on_green_button()
    document.getElementsByClassName('ball')[0].style.border = "3px transparent solid"
}
document.getElementById("header_center").onmouseout = () => {
    hide_go_on_green_button()
    document.getElementsByClassName("zöld_háttér")[0].children[0].style.color = "white"
    document.getElementsByClassName("zöld_háttér")[0].children[0].style.fontSize = ''
    document.getElementsByClassName("zöld_háttér")[0].style.backgroundColor = '#98CE00'
    document.getElementsByClassName("zöld_háttér")[0].children[0].innerHTML = "Go!"
}


function show_go_on_green_button() {
    document.getElementsByClassName('zöld_háttér')[0].style.transform = "translateY(0%)"
    document.getElementsByClassName('ball')[0].style.border = "3px #98CE00 dashed"
} 
function hide_go_on_green_button() {
    document.getElementsByClassName('zöld_háttér')[0].style.transform = "translateY(100%)"
    document.getElementsByClassName('ball')[0].style.border = "3px #F4F4F6 solid"
    document.getElementsByClassName('ball')[0].style.backgroundColor = "#f4f4f62a"
} 

let x_cord = 0 
//let y_cord = 0

function isNegative(number) {
    return !Object.is(Math.abs(number), +number);
  }

// document.addEventListener("wheel", function(e) { 
//     if (isNegative(e.wheelDeltaY) == true && !(x_cord < 0)) {
//         x_cord -= 150
//         window.scrollTo(
//             {
//                 left: x_cord,
//                 behavior: 'smooth',
//             })
//     } else {
//         x_cord += 150
//         window.scrollTo(
//             {
//                 left: x_cord,
//                 behavior: 'smooth',
//             })
//     }
//     //console.log(e)
//     // document.getElementById("page-content").scrollLeft += 10
//     //console.log(document.getElementById("page-content").scrollLeft)
// })

let current_X = 0
let aim_X = 0
let sebesség = 0.02

let scrollLeft = 0

function animate_scroll(){

    scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    
    //console.log("window_scroll",scrollLeft)
    //console.log("aim_x",aim_X)
    
    //if (scrollLeft >= 0 || scrollLeft <= window.innerWidth){
        current_X += (aim_X - current_X) * sebesség
    //}

    window.scrollTo(
    {
        left: current_X*-1,
        //behavior: 'smooth',
    })

    //console.log("current",current_X*-1)
    //console.log("aim",aim_X)
    
    // if (isNegative(aimX) == true && !(aimX < 0)) {
    //     currentX -= 150
    //     window.scrollTo(
    //         {
    //             left: currentX,
    //             behavior: 'smooth',
    //         })
    // } else {
    //     currentX += 150
    //     window.scrollTo(
    //         {
    //             left: currentX,
    //             behavior: 'smooth',
    //         })
    // }

    requestAnimationFrame(animate_scroll)
}

animate_scroll()

// setInterval(() => {
//     let scrollFromLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
//     if(scrollFromLeft == 0){
//         current_X = 0
//     }
//     if (scrollFromLeft == window.innerWidth){
//         current_X = window.innerWidth*-1
//     }
//     console.log(scrollFromLeft)
// }, 100);

document.addEventListener("wheel", function check(event) { 

    //if (scrollLeft >= 0 || scrollLeft <= window.innerWidth){
        aim_X += event.wheelDeltaY
    //}

    if (scrollLeft == 0 && !(isNegative(event.wheelDeltaY))){
        aim_X = 0
        console.log(111)
        current_X = 0
    }
    if (scrollLeft == window.innerWidth && isNegative(event.wheelDeltaY) || scrollLeft*-1 > window.innerWidth) {
        aim_X = window.innerWidth
        aim_X = aim_X*-1
        console.log(222)
    }
})