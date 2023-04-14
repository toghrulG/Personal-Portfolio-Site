var web_white = document.getElementById("web_white");
var web_black = document.getElementById("web_black");
var front_white = document.getElementById("front_white");
var front_black = document.getElementById("front_black");
var img = document.getElementById("img");
var center = document.getElementById("center");
var btn = document.getElementById("btn");
var cursor = document.getElementById("cursor");


// Text onmouseenter & onmouseleave
window.addEventListener("load", () => {
    web_black.style.display = "block";
    web_black.style.visibility = "visible";
});

center.onmouseenter = () => {
    web_black.style.display = "block";
    front_black.style.display = "none";
    web_white.style.zIndex = "2";
    web_black.style.zIndex = "-1";
    img.style.zIndex = "-1";
    front_white.style.zIndex = "-1";
    // web_black.style.opacity = "1";
}

web_white.onmouseenter = () => {
    web_black.style.display = "block";
    front_black.style.display = "none";
    web_white.style.zIndex = "2";
    web_black.style.zIndex = "-1";
    img.style.zIndex = "-1";
    front_white.style.zIndex = "-1";
    web_black.style.opacity = "1";
    // web_white.style.opacity = "0";
    // web_white.style.opacity = "0"; // Opaklık değeri ayarlanıyor
    // setTimeout(() => {
    //     web_white.style.opacity = "1"; // 1 saniye sonra opaklık eski değerine döndürülüyor
    // }, 450);
    // web_black.style.opacity = "0"; // Opaklık değeri ayarlanıyor
    // setTimeout(() => {
    //     web_black.style.opacity = "1"; // 1 saniye sonra opaklık eski değerine döndürülüyor
    // }, 450);
}
web_white.onmouseleave = () => {
    web_black.style.display = "none";
    front_black.style.display = "block";
    web_white.style.zIndex = "-1";
    img.style.zIndex = "1";
    btn.style.zIndex = "1";
    front_white.style.zIndex = "2";
    web_black.style.opacity = "0";
    // web_white.style.opacity = "1";
}

front_white.onmouseenter = () => {
    web_black.style.display = "none";
    front_black.style.display = "block";
    web_white.style.zIndex = "-2";
    web_black.style.zIndex = "-1";
    img.style.zIndex = "1";
    front_white.style.zIndex = "2";
    front_black.style.zIndex = "1";
    btn.style.zIndex = "2";
    front_black.style.opacity = "1";
    web_black.style.opacity = "0";
}
front_white.onmouseleave = () => {
    web_black.style.display = "block";
    front_black.style.display = "none";
    web_white.style.zIndex = "2";
    img.style.zIndex = "1";
    web_black.style.zIndex = "1";
    front_white.style.zIndex = "-1";
    front_black.style.zIndex = "-1";
    front_black.style.opacity = "0";
    // web_black.style.opacity = "1";
};


// Image / Mousemove

center.addEventListener("mousemove", e => {
    const rect = center.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    const targetX = e.clientX - rect.left;
    const targetY = e.clientY - rect.top;

    let deltaX = (targetX - imgRect.left) * 0.05;
    const deltaYTop = (targetY - imgRect.top) * 0.05;
    const deltaYBottom = (targetY - imgRect.bottom) * 0.05;

    let deltaY = deltaYTop;
    if (deltaYTop > 0 && deltaYBottom > 0) {
        deltaY = Math.max(deltaYTop, deltaYBottom);
    } else if (deltaYBottom > 0) {
        deltaY = deltaYBottom;
    }

    if (imgRect.left + deltaX < rect.left) {
        deltaX = rect.left - imgRect.left;
    } else if (imgRect.right + deltaX > rect.right) {
        deltaX = rect.right - imgRect.right;
    }

    if (imgRect.top + deltaY < rect.top) {
        deltaY = rect.top - imgRect.top;
    } else if (imgRect.bottom + deltaY > rect.bottom) {
        deltaY = rect.bottom - imgRect.bottom;
    }

    img.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

// Cursor Pointer

var circleCursor = document.querySelector(".circle-cursor");
var circle = circleCursor.querySelector("span");

circleCursor.addEventListener("mouseenter", function() {
    circle.style.display = "block";
});

circleCursor.addEventListener("mousemove", function(e) {
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
});

circleCursor.addEventListener("mouseleave", function() {
    circle.style.display = "none";

});
btn.addEventListener("mouseenter", function() {
    circle.style.display = "none";
});
btn.addEventListener("mouseleave", function() {
    circle.style.display = "block";
});
img.addEventListener("mouseenter", function() {
    circle.style.display = "none";
});
img.addEventListener("mouseleave", function() {
    circle.style.display = "block";
});
circle.innerHTML = '<i class="fa-solid fa-code"></i>';



// Responsive Navbar
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ?
        'fa-solid fa-xmark' :
        'fa-solid fa-bars'
}

// center.addEventListener('mousemove', function(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// })


// let container = document.querySelector(".center-container");

// container.addEventListener("mouseenter", function(e) {
//     let circle = document.createElement("div");
//     circle.style.position = "absolute";
//     circle.style.borderRadius = "50%";
//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.backgroundColor = "red";
//     circle.style.zIndex = "999";
//     container.appendChild(circle);

//     container.addEventListener("mousemove", function(e) {
//         let x = e.clientX - container.offsetLeft - (circle.offsetWidth / 2);
//         let y = e.clientY - container.offsetTop - (circle.offsetHeight / 2);
//         circle.style.left = x + "px";
//         circle.style.top = y + "px";
//     });
// });
// container.addEventListener("mouseleave", function(e) {
//     let circle = document.querySelector(".circle");
//     if (circle) {
//         container.removeChild(circle);
//     }
// });