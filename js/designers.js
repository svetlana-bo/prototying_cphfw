const designerSlide = document.querySelector('.designer-slide');
const designerImages = document.querySelectorAll('.designer-slide > div');

//buttons
const dragbtns = document.querySelectorAll('.drag-container');

//counter
let counter = 1;
const size = designerImages[0].clientHeight; 

designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
/* CSS is string only therefore needs ' */

//listeners
dragbtns.forEach(dragbtn => {
    dragbtn.addEventListener('click', ()=>{
        if(counter <= 0) return;
        designerSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
    });
});

designerSlide.addEventListener('transitionend', () => {
    if(designerImages[counter].id === 'lastclone'){
        designerSlide.style.transition = "none";
        counter = designerImages.height - 2;
        designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
    if(designerImages[counter].id === 'firstclone'){
        designerSlide.style.transition = "none";
        counter = designerImages.length - counter;
        designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
});

/* Making height responsive - Function is called every time window is resized */
window.addEventListener('resize', () => {
    const newSize = window.innerHeight;
    designerSlide.style.transform = 'translateY(' + (-newSize * counter) + 'px)';
});

/* const designerSlide = document.querySelector('.designer-slide');
const designerImages = document.querySelectorAll('.designer-slide > div');

//buttons
const dragbtns = document.querySelectorAll('.drag-container');

//counter
let counter = 1;
const size = designerImages[0].clientHeight; 

designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

//listeners
let startY; // Starting Y position of the touch
let endY;   // Ending Y position of the touch


    // Start tracking the touch
    document.addEventListener('touchstart', (event) => {
        startY = e.touches[0].clientY;
    });

    // Track the movement (dragging)
    document.addEventListener('touchmove', (event) => {
        endY = e.touches[0].clientY;
    });

    // When touch ends, check if it's a downward drag
    document.addEventListener('touchend', () => {
        const distance = endY - startY;
        if (distance < -20) {  // swipe up threshold
            designerSlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
        } else if (distance > 20) {  // swipe down threshold
            designerSlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
        }
    }); */

