const designerSlide = document.querySelector('.designer-slide');
const designerImages = document.querySelectorAll('.designer-slide > div');

//buttons
const dragbtns = document.querySelectorAll('.drag-container');

//counter
let counter = 1;
const size = designerImages[0].clientHeight; 

designerSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

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



