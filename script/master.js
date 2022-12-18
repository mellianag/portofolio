
if (screen.width >= 1100){
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    focusableNodes : 'div'
} );
}
else{
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',  
    focusableNodes : 'div'
} );
}


const imageUrl = [
    "artwork/slide1.jpg",
    "artwork/slide2.jpg",
    "artwork/slide3.jpg",
    "artwork/slide4.jpg",
    "artwork/slide5.jpg",
    "artwork/slide6.jpg",
];

const imageDescription = [
    "Product Photography on skincare using house item",
    "Brochure Design on Cimory Yogurt using Adobe Photoshop",
    "Poster Product Design using Adobe Illustrator ",
    "Thematic Packaging Design for muslim wear using Adobe Illustrator and Adobe Photoshop",
    "Indonesia Folklore Photography ( Telaga Warna )",
    "3D Room using Blender",
]

let modal = document.getElementById('modal');
let modalBg = document.getElementById('modal-bg');

let slide1 = document.getElementById('slide-1');
let slide2 = document.getElementById('slide-2');
let slide3 = document.getElementById('slide-3');
let slide4 = document.getElementById('slide-4');
let slide5 = document.getElementById('slide-5');
let slide6 = document.getElementById('slide-6');

slide1.onclick = ()=>setSlider(0);
slide2.onclick = ()=>setSlider(1);
slide3.onclick = ()=>setSlider(2);
slide4.onclick = ()=>setSlider(3);
slide5.onclick = ()=>setSlider(4);
slide6.onclick = ()=>setSlider(5);



splide.mount();

function setSlider(index){
    let desc = document.getElementById('modal-desc');
    let img = document.getElementById('modal-img');

    desc.innerHTML = imageDescription[index];
    img.src = imageUrl[index];


    


    modal.style.display = 'block';
}


let modalBtn = document.getElementById('modal-btn');
modalBtn.onclick = function(){




    modal.style.display = 'none';
}