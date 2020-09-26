const Burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlink');

Burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

  
function transition() { 
    let images = document.getElementsByClassName("bounce"); 
       // Set opacity of all images to 1
    for (let i = 0; i < images.length; ++i) { 
        images[i].style.opacity = 1; 
    } 
    //stores the z-index of top most image 
    let topImage = 1; 
    //stores the index of the current image
    let current = images.length - 1; 

    setInterval(changeImage, 4000); 
    //Function to transitions from one image to other 
    async function changeImage() { 
      // Stores index of next image 
        let nextImage = (1 + current) % images.length; 
       /* Doing this next line make sure that the image below 
               the current image is nextImage*/
        images[current].style.zIndex = topImage + 1; 
        images[nextImage].style.zIndex = topImage; 

        await imageTransition(); 
         // Set the z-index of current image to top 
        images[current].style.zIndex = topImage; 
          // Set the z-index of nextImage to top+1 
        images[nextImage].style.zIndex = topImage + 1; 

        topImage = topImage + 1; 
        
        images[current].style.opacity = 1; 
        
        current = nextImage; 

    } 

    function imageTransition() { 
        return new Promise(function(resolve, reject) { 
            let fade = 0.01; 

            let id = setInterval(changeOpacity, 10); 

            function changeOpacity() { 
                images[current].style.opacity -= fade; 
                if (images[current].style.opacity <= 0) { 
                    clearInterval(id); 
                    resolve(); 
                } 
            } 

        }) 
    } 
}
    
    transition(); 