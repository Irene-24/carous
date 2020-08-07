// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

const left = document.querySelector('.chevron-left-wrapper');
const right = document.querySelector('.chevron-right-wrapper');
const movingContainer = document.querySelector('.images-container-flex');
const purple = document.querySelector('.show-section');
let trans = 0;
const close = document.querySelector('.close-btn-wrapper i');

const selectContainer = Array.from(document.querySelectorAll('.imgshow-container'));
const show = Array.from(document.querySelectorAll('.show-flex'));

show.forEach(item => {
    item.classList.add('d-none');
});

close.addEventListener('click', () => {
    purple.style.display = 'none';
    const filtered = selectContainer.filter(item => item.classList.contains('selected'));
    filtered[0].classList.remove('selected');
});
// selectContainer[0].classList.add('selected');
show[0].classList.remove('d-none');
purple.style.display = 'none';


selectContainer.forEach(sel => {
    let index = selectContainer.indexOf(sel);
    sel.addEventListener('click', e => {
        console.log(`shepe ${sel}`);
        purple.style.display = 'block';
        const filt = selectContainer.filter(item => item.classList.contains('selected'));
        if (filt.length === 0) {
            console.log('no-filt')
        }

        else {
            filt[0].classList.remove('selected');
        }
        const filtSecond = show.filter(item => !item.classList.contains('d-none'));
        filtSecond[0].classList.add('d-none');
        sel.classList.add('selected');
        show[index].classList.remove('d-none');
        
    });
});