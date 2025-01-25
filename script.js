/* -------------- Start of jQuery Document -------------- */

// <![CDATA[
    var colour = "white"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
    var sparkles = 50;
    
    /****************************
     * Tinkerbell Magic Sparkle *
     *(c)2005-11 mf2fm web-design*
     * http://www.mf2fm.com/rv *
     * DON'T EDIT BELOW THIS BOX *
     ****************************/
    
    var x = (ox = 400);
    var y = (oy = 300);
    var swide = 800;
    var shigh = 600;
    var sleft = (sdown = 0);
    var tiny = new Array();
    var star = new Array();
    var starv = new Array();
    var starx = new Array();
    var stary = new Array();
    var tinyx = new Array();
    var tinyy = new Array();
    var tinyv = new Array();
    
    window.onload = function () {
      if (document.getElementById) {
        var i, rats, rlef, rdow;
        for (var i = 0; i < sparkles; i++) {
          var rats = createDiv(3, 3);
          rats.style.visibility = "hidden";
          document.body.appendChild((tiny[i] = rats));
          starv[i] = 0;
          tinyv[i] = 0;
          var rats = createDiv(5, 5);
          rats.style.backgroundColor = "transparent";
          rats.style.visibility = "hidden";
          var rlef = createDiv(1, 5);
          var rdow = createDiv(5, 1);
          rats.appendChild(rlef);
          rats.appendChild(rdow);
          rlef.style.top = "2px";
          rlef.style.left = "0px";
          rdow.style.top = "0px";
          rdow.style.left = "2px";
          document.body.appendChild((star[i] = rats));
        }
    
        set_width();
        sparkle();
      }
    };
    
    function sparkle() {
      var c;
      if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++)
          if (!starv[c]) {
            star[c].style.left = (starx[c] = x) + "px";
            star[c].style.top = (stary[c] = y) + "px";
            star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
            star[c].childNodes[0].style.backgroundColor = star[
              c
            ].childNodes[1].style.backgroundColor =
              colour == "random" ? newColour() : colour;
    
            star[c].style.visibility = "visible";
            starv[c] = 50;
            break;
          }
      }
      for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout("sparkle()", 40);
    }
    
    function update_star(i) {
      if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < shigh + sdown && starx[i] > 0) {
          star[i].style.top = stary[i] + "px";
          starx[i] += ((i % 5) - 2) / 5;
          star[i].style.left = starx[i] + "px";
        } else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
          return;
        }
      } else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible";
      }
    }
    
    function update_tiny(i) {
      if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
    
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < shigh + sdown && tinyx[i] > 0) {
          tiny[i].style.top = tinyy[i] + "px";
          tinyx[i] += ((i % 5) - 2) / 5;
          tiny[i].style.left = tinyx[i] + "px";
        } else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
          return;
        }
      } else tiny[i].style.visibility = "hidden";
    }
    
    document.onmousemove = mouse;
    function mouse(e) {
      set_scroll();
      y = e ? e.pageY : event.y + sdown;
      x = e ? e.pageX : event.x + sleft;
    }
    
    function set_scroll() {
      if (typeof self.pageYOffset == "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
      } else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
      } else if (
        document.documentElement &&
        (document.documentElement.scrollTop || document.documentElement.scrollLeft)
      ) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
      } else {
        sdown = 0;
        sleft = 0;
      }
    }
    
    window.onresize = set_width;
    function set_width() {
      if (typeof self.innerWidth == "number") {
        swide = self.innerWidth;
        shigh = self.innerHeight;
      } else if (document.documentElement && document.documentElement.clientWidth) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
      } else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
      }
    }
    
    function createDiv(height, width) {
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = height + "px";
      div.style.width = width + "px";
      div.style.overflow = "hidden";
      return div;
    }
    
    function newColour() {
      var c = new Array();
      c[0] = 255;
      c[1] = Math.floor(Math.random() * 256);
      c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
      c.sort(function () {
        return 0.5 - Math.random();
      });
      return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")";
    }
    
    // ]]>
    

$(document).ready(function () {

    // Fullpage Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // this is the Open Source free license
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows
        navigation: true, // comment out or remove to remove nav arrows
        controlArrows: true, // this takes off the arrows for slides

    });

  AOS.init();

  


    /* -------------- Hamburger Menu Event for Smaller Devices -------------- */


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


  /* -------------- Landing Page MoveToSection Buttons -------------- */

    function moveToSection(number) {
        fullpage_api.moveTo(number);
    };

    $("#shopNowBtn").click(function () {
        moveToSection(3);
    });

    $("#registerBtn").click(function () {
        moveToSection(2);
    })




/* -------------- Data Array of Products -------------- */

    const jewelleryCards = [

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
            description: 'Invest in quality jewellery staples from the Jewellery Supreme Waterproof Collection!'
        },
        {
            id: 6,
            name: 'Gold Stainless Steel Heart FOB Flat Chain Necklace',
            price: '$34.00',
            category: 'Necklaces',
            finish: 'Gold',
            images: ['img/necklaces/heart-gold.webp', 'img/necklaces/heart-gold(2).webp', 'img/necklaces/heart-gold(3).webp'],
            description: 'Invest in quality jewellery staples from the Jewellery Supreme Waterproof Collection!'
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
            description: 'Invest in quality jewellery staples from the Jewellery Supreme Sterling Silver Collection.'
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


/* -------------- Modal Functions -------------- */


    // Define a global variable to hold the Swiper instance
    let mySwiper;

    // Modal Functions
    function openModal(content) {
        $('#productModal .modal-body').html(content);
        $('#productModal').fadeIn();
        $('body').addClass('no-scroll'); // Prevent background scrolling

         // Initialize Swiper inside modal
         new Swiper('.modal-images', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    function closeModal() {
        $('#productModal').fadeOut();
        $('body').removeClass('no-scroll'); // Allow background scrolling
    }

    $(document).on('click', '.product-image', function () {
        const productId = $(this).closest('.product-card').data('id');
        const product = jewelleryCards.find(item => item.id === productId);
        const modalContent = `  
        <div class="swiper modal-images"> 
            <div class="swiper-wrapper">
                ${product.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${product.name}"></div>`).join('')}
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="modal-details">
        <h2>${product.name}</h2>
        <h4>${product.finish} | ${product.category}</h4>
        <h3>${product.price}</h3>
        <p>${product.description}</p>
        <div class="other-details">
        <button><i class="fa-solid fa-bag-shopping"></i> Add To Cart </button>
        </div>
        </div>
    `;
        openModal(modalContent);
    });


    // Modal Close Button
    $(document).on('click', '.close', closeModal);
    $(window).on('click', function (event) {
        if ($(event.target).is('#productModal')) {
            closeModal();
        }
    });

    /* -------------- Filter and Sorting Functions -------------- */


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

    /* -------------- Dynamic Creation of Product Cards -------------- */


    function allProducts(jewelleryCards) {
        return `
        <div class="product-card" data-id="${jewelleryCards.id}"> 
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

            <div class="other-details">
            <h4>${jewelleryCards.price}</h4>
            <button> <i class="fa-solid fa-bag-shopping"></i> </button>
            </div>
        </div>
    </div>
    `;
    }

    function generateProductCards(jewelleryCards) {
        const container = $("#allCards");
        container.empty(); // Clear previous content
        jewelleryCards.forEach(jewelleryCards => {
            const cardHTML = allProducts(jewelleryCards);
            container.append(cardHTML);
        });

        // Initialize Swiper here
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // this allow user to click the dots
            },
        });
    }

    // Call the function to generate product cards
    generateProductCards(jewelleryCards);


  /* -------------- User Input Functions -------------- */

    // Set up a variable to track the user:
    let user;

    // Click on the SubmitButton
    $('#submitButton').click(function (event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form validation:
        const usernameRegex = /^[a-zA-Z0-9_]{3,10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Get input values:
        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();

        console.log(username + password + email);

        // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            $('#formMessage').html(`<p>'Invalid username. Must be 3-10 characters long and contain only letters, numbers, and underscores.'</p>`);
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

            // This will clear the input fields when user clicks submit
            $('#username').val('');
            $('#email').val('');
            $('#password').val('');
        }
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log("Log In");
        } else {
            console.log(user);
            $('#userContainer').html(`<p> Welcome, <span id="loggedInUser">${user}</span>! </p> <img src="img/profile-pic.webp" alt="pfp" id="pfp">`)
            $('#logInMessage').html(`Thank you, <span id="loggedInUser">${user}</span> for signing up!`);
            event.preventDefault(); // stop the page from refreshing when clicking submit button
        }
    };

    checkForLoggedInUser(); // because no value is assigned to user it treats as false

}); 
/* -------------- End of jQuery Document -------------- */