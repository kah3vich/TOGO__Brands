const boxes = document.querySelectorAll('.about__banner-i ')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// const obj__animation = {
//     elem__1: 7,
//     elem__2: 20,
//     elem__3: 30,
//     elem__4: 40,
//     elem__5: 50,
//     elem__6: 60,
//     elem__7: 70,
// }

// obj__animation.forEach((name_, height_) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: `#${name_}`,
//             start: "top center",
//             end: "bottom bottom",
//             markers: false,
//             scrub: true,
//             ease: Expo.easeOut
//         }
//     })
//     .to("#lines__p",  { height: `${height_}%` }, 0)
// })

// for (var key in obj__animation) {
//     console.log( "Ключ: " + key + " значение: " + obj__animation[key] );
// }

const obj = {
    elem__1: 7,
    elem__2: 20,
    elem__3: 35,
    elem__4: 50,
    elem__5: 63,
    elem__6: 78,
    elem__7: 100,
}

for (let key in obj) {
    if(obj.hasOwnProperty(key)){
        console.log(`${key} : ${obj[key]}`)
        gsap.timeline({
            scrollTrigger: {
                trigger: `#${key}`,
                start: "top center",
                end: "bottom bottom",
                markers: false,
                scrub: true,
                ease: Expo.easeOut
            }
        })
        .to("#lines__p",  { height: `${obj[key]}%` }, 0)
    }
}


// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#elem__2",
//         start: "top center",
//         end: "bottom bottom",
//         markers: true,
//         scrub: true,
//         ease: Expo.easeOut
//     }
// })
// .to("#lines__p",  { height: '20%' }, 0)



// let last_known_scroll_position = 0;
// let ticking = false;

// function doSomething(scroll_pos) {
//   console.log(1);
// }

// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

// const lines = document.getElementById('lines')
// const lines_ = document.getElementById('lines__p')

// window.addEventListener('scroll', checkLines)

// checkLines()

// function checkLines() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     // lines.forEach(line => {
//     const lineTop = lines.getBoundingClientRect().top
//     // console.log((lines.getBoundingClientRect().top));

//     var height = 0;

//     if (lineTop > triggerBottom) {
//         height += 10;
//         lines_.style.height = height + "%";
//         console.log(1);
//     } else {
//         lines_.style.height -= '10px';
//         console.log(2);
//     }
//     // })
// }

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }


// window.onscroll = function() {myFunction()};



// function myFunction() {
//     var winScroll = document.body.scrollTop || $('.about-banner').html().scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = ((winScroll / height) * 100) * 1.1;
//     document.getElementById("myBar").style.height = `${scrolled}%`
// }