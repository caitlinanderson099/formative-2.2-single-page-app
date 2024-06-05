// WITH JQUERY and FULL PAGE JS

// JUST BASE STUFF, ADAPT THIS LATER ON WHEN STARTING THE CODE

$(document).ready(function () {

    // Fullpage Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // this is the Open Source free license
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows
        // navigation: true, // comment out or remove to remove nav arrows
        controlArrows: true, // this takes off the arrows for slides

    });

    // fullpage_api.setAllowScrolling(false); // this prevents the scroll of the sections and slides, can't scroll either way can only use buttons

 /** --------- HAMBURGER MENU EVENT FOR RESPONSIVENESS ------------ */

    let openHam = $("#openHam");
    let closeHam = $("#closeHam");
    let navigationItems = $(".nav-items");

    const hamburgerEvent = (navigation, close, open) => {
        navigationItems.css("display", navigation);
        closeHam.css("display", close);
        openHam.css("display", open);
    }

    openHam.click(function () {
        hamburgerEvent("flex", "flex", "none");
    });

    closeHam.click(function () {
        hamburgerEvent("none", "none", "flex");
    });


   /** ----------- LANDING PAGE SECTION BUTTONS ------------ */
    function moveToSection(number) {
        fullpage_api.moveTo(number);
    };

    $("#shopNowBtn").click(function () {
        moveToSection(3);
    });

    $("#registerBtn").click(function () {
        moveToSection(2);
    })




    /** ------------- DATA ARRAY FOR PRODUCTS ------------- */

    const jewelleryCards = [
        // NECKLACES X3 FOR EACH FINISH (GOLD, STERLING SILVER, ROSE GOLD)


        // STERLING SILVER
        {
            id: 1,
            name: 'Sterling Silver Lotus Necklace',
            price: '$37.00',
            category: 'Necklaces',
            finish: 'Sterling Silver',
            images: ['img/necklaces/lotus-sterling-silver.webp', 'img/necklaces/lotus-sterling-silver(2).webp', 'img/necklaces/lotus-sterling-silver(3).webp'],
            description: 'This lovely necklace features a fine silver chain with a dainty lotus charm.'
        },
        {
            id: 2,
            name: 'Sterling Silver Vintage Cross Necklace',
            price: '$37.00',
            category: 'Necklaces',
            finish: 'Sterling Silver',
            images: ['img/necklaces/cross-sterling-silver.webp', 'img/necklaces/cross-sterling-silver(2).webp', 'img/necklaces/cross-sterling-silver(3).webp'],
            description: 'Invest in quality! This lovely necklace is made from genuine 925 sterling silver.'
        },
        {
            id: 3,
            name: 'Sterling Silver Pave Butterfly Necklace',
            price: '$45.00',
            category: 'Necklaces',
            finish: 'Sterling Silver',
            images: ['img/necklaces/butterfly-sterling-silver.webp', 'img/necklaces/butterfly-sterling-silver(2).webp', 'img/necklaces/butterfly-sterling-silver(3).webp'],
            description: 'Invest in quality with sterling-silver styles. This lovely necklace is made from genuine sterling silver.'
        },
        // GOLD
        {
            id: 4,
            name: 'Gold Cubic Zirconia Vine Necklace',
            price: '$29.00',
            category: 'Necklaces',
            finish: 'Gold',
            images: ['img/necklaces/vine-gold.webp', 'img/necklaces/vine-gold(2).webp', 'img/necklaces/vine-gold(3).webp'],
            description: 'This timeless chain necklace features a gorgeous, gold-toned chain. Chain Length 45cm'
        },
        {
            id: 5,
            name: 'Gold Plated Stainless Steel Open Oval Link Necklace',
            price: '$26.00',
            category: 'Necklaces',
            finish: 'Gold',
            images: ['img/necklaces/link-gold.webp', 'img/necklaces/link-gold(2).webp', 'img/necklaces/link-gold(3).webp'],
            description: 'Invest in quality jewellery staples from the Lovisa Waterproof Jewellery Collection!'
        },
        {
            id: 6,
            name: 'Gold Stainless Steel Heart FOB Flat Chain Necklace',
            price: '$34.00',
            category: 'Necklaces',
            finish: 'Gold',
            images: ['img/necklaces/heart-gold.webp', 'img/necklaces/heart-gold(2).webp', 'img/necklaces/heart-gold(3).webp'],
            description: 'Invest in quality jewellery staples from the Lovisa Waterproof Jewellery Collection!'
        },
        // ROSE GOLD
        {
            id: 7,
            name: 'Rose Gold Double Heart Necklace',
            price: '$6.00',
            category: 'Necklaces',
            finish: 'Rose Gold',
            images: ['img/necklaces/double-heart-rose-gold.webp', 'img/necklaces/double-heart-rose-gold(2).webp', 'img/necklaces/double-heart-rose-gold(3).webp'],
            description: 'For an ethereal addition to your stack, style this rose gold pendant necklace.'
        },
        {
            id: 8,
            name: 'Rose Gold Rose Link Necklace',
            price: '$8.00',
            category: 'Necklaces',
            finish: 'Rose Gold',
            images: ['img/necklaces/link-rose-gold.webp', 'img/necklaces/link-rose-gold(2).webp', 'img/necklaces/link-rose-gold(3).webp'],
            description: 'This layered necklace features a paperclip and curb style chain. Chain Length 43-45cm'
        },
        {
            id: 9,
            name: 'Rose Gold Cubic Zirconia Flower Vine Necklace',
            price: '$34.00',
            category: 'Necklaces',
            finish: 'Rose Gold',
            images: ['img/necklaces/flower-rose-gold.webp', 'img/necklaces/flower-rose-gold(2).webp', 'img/necklaces/flower-rose-gold(3).webp'],
            description: 'Dazzle with Cubic Zirconia!  Wear it for a formal finishing touch day or night'
        },

        // RINGS 

        // STERLING SILVER
        {
            id: 10,
            name: 'Sterling Silver Cubic Zirconia Adjustable Ring',
            price: '$37.00',
            category: 'Rings',
            finish: 'Sterling Silver',
            size: ['SM', 'ML'],
            images: ['img/rings/cubic-sterling-silver.webp', 'img/rings/cubic-sterling-silver(2).webp', 'img/rings/cubic-sterling-silver(3).webp'],
            description: 'Discover styles from our premium Sterling Silver Collection.'
        },
        {
            id: 11,
            name: 'Sterling Silver Swirl Detail Point Ring',
            price: '$34.00',
            category: 'Rings',
            finish: 'Sterling Silver',
            size: ['SM', 'ML'],
            images: ['img/rings/swirl-sterling-silver.webp', 'img/rings/swirl-sterling-silver(2).webp', 'img/rings/swirl-sterling-silver(3).webp'],
            description: 'Build a jewellery collection filled with life-long pieces from our Sterling Silver Collection.'
        },
        {
            id: 12,
            name: 'Platinum Sterling Silver Cubic Zirconia Pave Ring',
            price: '$40.00',
            category: 'Rings',
            finish: 'Sterling Silver',
            size: ['SM', 'ML'],
            images: ['img/rings/pave-sterling-silver.webp', 'img/rings/pave-sterling-silver(2).webp', 'img/rings/pave-sterling-silver(3).webp'],
            description: 'Build a jewellery collection filled with life-long pieces from our Sterling Silver Collection.'
        },
        // GOLD
        {
            id: 13,
            name: 'Gold Plated Oval Bezel Stacking Rings',
            price: '$31.00',
            category: 'Rings',
            finish: 'Gold',
            size: ['SM', 'ML'],
            images: ['img/rings/bezel-gold.webp', 'img/rings/bezel-gold(2).webp', 'img/rings/bezel-gold(3).webp'],
            description: 'For a glamorous addition to your signature stack, style this gold plated ring.'
        },
        {
            id: 14,
            name: 'Gold Plated Stainless Steel Signet Ring',
            price: '$26.00',
            category: 'Rings',
            finish: 'Gold',
            size: ['SM', 'ML'],
            images: ['img/rings/signet-gold.webp', 'img/rings/signet-gold(2).webp', 'img/rings/signet-gold(3).webp'],
            description: 'This timeless ring is plated with real gold and with delicate sunflowers.'
        },
        {
            id: 15,
            name: 'Gold Plated Wrapped Triple Stone Ring',
            price: '$23.00',
            category: 'Rings',
            finish: 'Gold',
            size: ['SM', 'ML'],
            images: ['img/rings/stone-gold.webp', 'img/rings/stone-gold(2).webp', 'img/rings/stone-gold(3).webp'],
            description: 'This dainty ring is plated with real gold for a touch of elegance.'
        },
        // ROSE GOLD
        {
            id: 16,
            name: 'Rose Gold Plated Floral Stone Stacking Ring Pack',
            price: '$31.00',
            category: 'Rings',
            finish: 'Rose Gold',
            size: ['SM', 'ML'],
            images: ['img/rings/stacking-rose-gold.webp', 'img/rings/stacking-rose-gold(2).webp', 'img/rings/stacking-rose-gold(3).webp'],
            description: 'This dainty ring pack contains two individual stacking rings, each designed with floral motifs.'
        },
        {
            id: 17,
            name: 'Rose Gold Cubic Zirconia Bow Ring',
            price: '$26.00',
            category: 'Rings',
            finish: 'Rose Gold',
            size: ['SM', 'ML'],
            images: ['img/rings/bow-rose-gold.webp', 'img/rings/bow-rose-gold(2).webp', 'img/rings/bow-rose-gold(3).webp'],
            description: 'Add a touch of warmth to your look with this rose gold stacking ring.'
        },
        {
            id: 18,
            name: 'Rose Gold Cat Eye Ring Stack Pack',
            price: '$23.00',
            category: 'Rings',
            finish: 'Rose Gold',
            size: ['SM', 'ML'],
            images: ['img/rings/cat-rose-gold.webp', 'img/rings/cat-rose-gold(2).webp', 'img/rings/cat-rose-gold(3).webp'],
            description: 'Mix them, match them, stack them!'
        },

        // EARRINGS

        // STERLING SILVER
        {
            id: 19,
            name: 'Sterling Silver Shell Charm Hoop Earrings',
            price: '$29.00',
            category: 'Earrings',
            finish: 'Sterling Silver',
            images: ['img/earrings/shell-sterling-silver.webp', 'img/earrings/shell-sterling-silver(2).webp', 'img/earrings/shell-sterling-silver(3).webp'],
            description: 'Invest in quality pieces made with sterling silver. These dainty hoops feature lovely shell charms.'
        },
        {
            id: 20,
            name: 'Sterling Silver Dangle Chain Ball Drop Earrings',
            price: '$45.00',
            category: 'Earrings',
            finish: 'Sterling Silver',
            images: ['img/earrings/chain-sterling-silver.webp', 'img/earrings/chain-sterling-silver(2).webp', 'img/earrings/chain-sterling-silver(3).webp'],
            description: 'Invest in quality jewellery staples from the Lovisa Sterling Silver Collection.'
        },
        {
            id: 21,
            name: 'Sterling Silver Cubic Zirconia Drop Earrings',
            price: '$31.00',
            category: 'Earrings',
            finish: 'Sterling Silver',
            images: ['img/earrings/moon-sterling-silver.webp', 'img/earrings/moon-sterling-silver(2).webp', 'img/earrings/moon-sterling-silver(3).webp'],
            description: 'For a signature addition to your stack, style these sterling silver studs.'
        },
        // GOLD
        {
            id: 22,
            name: 'Gold Plated Long Cubic Zirconia Drop Earrings',
            price: '$29.00',
            category: 'Earrings',
            finish: 'Gold',
            images: ['img/earrings/drop-gold.webp', 'img/earrings/drop-gold(2).webp', 'img/earrings/drop-gold(3).webp'],
            description: 'For a refined finish to your look, style these real gold plated drop earrings.'
        },
        {
            id: 23,
            name: 'Gold Alligator Drop Huggie Hoop Earrings',
            price: '$17.00',
            category: 'Earrings',
            finish: 'Gold',
            images: ['img/earrings/alligator-gold.webp', 'img/earrings/alligator-gold(2).webp', 'img/earrings/alligator-gold(3).webp'],
            description: 'Personalise your stack with these unique, gold-toned hoop earrings.'
        },
        {
            id: 24,
            name: 'Gold Pearl Bow Heart Drop Earrings',
            price: '$23.00',
            category: 'Earrings',
            finish: 'Gold',
            images: ['img/earrings/pearl-gold.webp', 'img/earrings/pearl-gold(2).webp', 'img/earrings/pearl-gold(3).webp'],
            description: 'For a decorative addition to your stack, style these gold-toned drop earrings.'
        },
        // ROSE GOLD
        {
            id: 25,
            name: 'Rose Gold Frosted Flower Drop Earrings',
            price: '$23.00',
            category: 'Earrings',
            finish: 'Rose Gold',
            images: ['img/earrings/frosted-rose-gold.webp', 'img/earrings/frosted-rose-gold(2).webp', 'img/earrings/frosted-rose-gold(3).webp'],
            description: 'Explore our range of timeless, standout pieces for any occasion!'
        },
        {
            id: 26,
            name: 'Rose Gold Twisted Multi Hoop Earring Pack',
            price: '$28.00',
            category: 'Earrings',
            finish: 'Rose Gold',
            images: ['img/earrings/twisted-rose-gold.webp', 'img/earrings/twisted-rose-gold(2).webp', 'img/earrings/twisted-rose-gold(3).webp'],
            description: 'This earring pack includes two pairs of earrings'
        },
        {
            id: 27,
            name: 'Rose Gold Cubic Zirconia Earring 6-Pack',
            price: '$34.00',
            category: 'Earrings',
            finish: 'Rose Gold',
            images: ['img/earrings/zirconia-rose-gold.webp', 'img/earrings/zirconia-rose-gold(2).webp', 'img/earrings/zirconia-rose-gold(3).webp'],
            description: 'Experiment with Jewellery Supreme jewellery and accessories!'
        }
    ] // END OF DATA ARRAY



/** ------------ MODAL FUNCTIONS ------------ */


$(document).on('click', '.product-image', function () {
    const index = $(this).closest('.product-card').index();
    const selectedProduct = jewelleryCards[index];
    populateModal(selectedProduct);
    $('#detailsModal').show();
    console.log('working');
});

function populateModal(product) {
    const modalContent = `
    <div id="detailsModal">
    <div class="image-cont">
        <img src="img/jewellery-logo.webp" alt="">
        </div>
        <h2> ${product.name}</h2>
        <h4> ${product.finish} | ${product.category}</h4> 
        <h5> ${product.price}</h5>
        <p> ${product.description}</p>   
        </div>
    `;
    $('#detailsModal .modal-content').html(modalContent);
}

$('#closeModal').click(function() {
    $('#detailsModal').hide();
});







    /** ----------- FILTERING AND SORTING FUNCTIONS --------------- */

    // Add event listeners to filter and sorting elements
    $('#finish, #category').change(filterProducts);
    $('#price-low-to-high-btn').click(sortProductsLowToHigh);
    $('#price-high-to-low-btn').click(sortProductsHighToLow);
    $('#alphabetical-btn').click(sortProductsAlphabetical);

    // Filter products based on selected finish and category
    function filterProducts() {
        const selectedFinish = $('#finish').val();
        const selectedCategory = $('#category').val();

        const filteredProducts = jewelleryCards.filter(product => {
            return (!selectedFinish || product.finish === selectedFinish) &&
                (!selectedCategory || product.category === selectedCategory);
        });

        generateProductCards(filteredProducts);
    }

    // Sort products by price - low to high
    function sortProductsLowToHigh() {
        const sortedProducts = jewelleryCards.slice().sort((a, b) => {
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        });
        generateProductCards(sortedProducts);
    }

    // Sort products by price - high to low
    function sortProductsHighToLow() {
        const sortedProducts = jewelleryCards.slice().sort((a, b) => {
            return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        });
        generateProductCards(sortedProducts);
    }

    // Sort products alphabetically
    function sortProductsAlphabetical() {
        const sortedProducts = jewelleryCards.slice().sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        generateProductCards(sortedProducts);
    }



    /** ----------- DYNAMICALLY CREATING PRODUCT CARDS ------------- */

    function allProducts(jewelleryCards) {
        return `
        <div class="product-card"> 
        <div class="swiper-container"> <!-- Add this class -->
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide"> <img src="${jewelleryCards.images[0]}" alt="${jewelleryCards.name}" class="product-image"> </div>
                <div class="swiper-slide"> <img src="${jewelleryCards.images[1]}" alt="${jewelleryCards.name}" class="product-image"> </div>
                <div class="swiper-slide"> <img src="${jewelleryCards.images[2]}" alt="${jewelleryCards.name}" class="product-image"> </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>

    <div class="product-details">
        <h3>${jewelleryCards.name}</h3>
        <h5>${jewelleryCards.finish} | ${jewelleryCards.category}</h5>
        <p>${jewelleryCards.description}</p>

        <div class="other-details">
        <h4>${jewelleryCards.price}</h4>
        <button>  <i class="fa-solid fa-bag-shopping"></i>  </button>
    </div>
    </div>

    
    </div>
    `;
    }

    function generateProductCards(jewelleryCards) {
        const container = $("#allCards");
        container.empty(); // Clear previous content
        jewelleryCards.forEach(jewelleryCard => {
            const cardHTML = allProducts(jewelleryCard);
            container.append(cardHTML);
        });

        // Initialize Swiper here
        const swiper = new Swiper('.swiper', {
            direction: 'vertical',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // this allow user to click the dots
            },
        });
    }

    // Call the function to generate product cards
    generateProductCards(jewelleryCards);


    /** -------------- USER INPUT JAVASCRIPT ----------- */

    // Set up a variable to track the user:
    let user;

    // Click on the SubmitButton
    $('#submitButton').click(function (event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form validation:
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Get input values:
        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();

        console.log(username + password + email);

        // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            $('#formMessage').html(`<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`);
        } else if (!emailRegex.test(email)) {
            $('#formMessage').html(`<p>'Invalid email format.'</p>`);
        } else if (!passwordRegex.test(password)) {
            $('#formMessage').html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
        } else {
            // if passed all regex tests:
            $('#formMessage').html('');
            // set user equal to the username:
            user = username;
            console.log(user);
            // set the logged in user span to the user value:
            checkForLoggedInUser();
            // Move to slide 2 of section 1:
            fullpage_api.moveTo(1, 1); // go to slide #2
        }
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log("Log In");
        } else {
            console.log(user);
            $('#slide2').html(`<h2> Hey, <span id="loggedInUser">${user}</span> ! </h2>`)
        }
    };

    checkForLoggedInUser(); // because no value is assigned to user it treats as false



}); // END OF JAVASCRIPT