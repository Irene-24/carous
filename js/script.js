let slider;
const interval = 5000;

const left = document.querySelector( '.chevron-left-wrapper' );
const right = document.querySelector( '.chevron-right-wrapper' );
const movingContainer = document.querySelector( '.images-container-flex' );
const purple = document.querySelector( '.show-section' );
let trans = 0;
const closeBtn = document.querySelector( '.close-btn-wrapper i' );
const show = Array.from( document.querySelectorAll( '.show-flex' ) );

$( document ).ready( function ()
{
    slider = $( '#autoWidth' ).lightSlider( {
        autoWidth: true,
        loop: true,
        auto: true,
        speed: 1000,
        pause: interval,
        onSliderLoad: function ()
        {
            $( '#autoWidth' ).removeClass( 'cS-hidden' );
        },
        onBeforeSlide: function ()
        {
            const activeSlideDiv = document.querySelector( "#autoWidth .active div" );

            activeSlideDiv.classList.remove( "selected" );
        }
        ,
        onAfterSlide: highlightSlides,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            }
        ]
    } );

    function highlightSlides ()
    {
        document.querySelectorAll( "#autoWidth .imgshow-container" ).forEach( active => active.classList.remove( "selected" ) );
        const activeSlideDiv = document.querySelector( "#autoWidth .active div" );

        activeSlideDiv.classList.add( "selected" );
        show.forEach( section => section.classList.add( 'd-none' ) );

        const index = activeSlideDiv.getAttribute( "data-index" );
        show[ index ].classList.remove( 'd-none' );

        //for some reason it keeps skipping the first card (probz due to the cloning stuff)
        //this forces it to highlight the current card
        document.querySelector( `[data-index="${ index }"]` ).classList.add( "selected" );
    }

    //highlight first slide on page load
    document.querySelector( "#autoWidth .lslide.active div" ).classList.add( "selected" );


    //moved this so that the cloned elements will also be selected
    const selectContainer = Array.from( document.querySelectorAll( '.imgshow-container' ) );


    show.forEach( item =>
    {
        item.classList.add( 'd-none' );
    } );

    closeBtn.addEventListener( 'click', () =>
    {
        purple.style.display = 'none';
        const filtered = selectContainer.filter( item => item.classList.contains( 'selected' ) );
        filtered[ 0 ].classList.remove( 'selected' );
    } );


    show[ 0 ].classList.remove( 'd-none' );

    //should be active as soon as page loads 
    //purple.style.display = 'none';

    selectContainer.forEach( sel =>
    {
        const index = +sel.getAttribute( "data-index" );
        sel.addEventListener( 'click', e =>
        {
            slider.goToSlide( index + 1 );

            purple.style.display = 'block';

            const filtSecond = show.filter( item => !item.classList.contains( 'd-none' ) );
            filtSecond[ 0 ].classList.add( 'd-none' );
            sel.classList.add( 'selected' );
            show[ index ].classList.remove( 'd-none' );


        } );
    } );

} );

