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





/** ------------- DATA ARRAY FOR PRODUCTS ------------- */

const jewelleryCards = [
    // NECKLACES X3 FOR EACH FINISH (GOLD, STERLING SILVER, ROSE GOLD)


    // STERLING SILVER
    {
        id: 1,
        name: 'Sterling Silver Lotus Necklace',
        price: '$37.00',
        category: 'Necklace',
        finish: 'Sterling Silver',
        images: ['img/necklaces/lotus-sterling-silver.webp', 'img/necklaces/lotus-sterling-silver(2).webp', 'img/necklaces/lotus-sterling-silver(3).webp'],
        description: 'Invest in sterling-silver accessories! This lovely necklace features a fine silver chain with a dainty lotus charm.'
    },
    {
        id: 2,
        name: 'Sterling Silver Vintage Cross Necklace',
        price: '$37.00',
        category: 'Necklace',
        finish: 'Sterling Silver',
        images: ['img/necklaces/cross-sterling-silver.webp', 'img/necklaces/cross-sterling-silver(2).webp', 'img/necklaces/cross-sterling-silver(3).webp'],
        description: 'Invest in quality! This lovely necklace is made from genuine 925 sterling silver. It features a classic design with a modern twist. Wear this pretty pendant daily for an elegant finishing touch'
    },
    {
        id: 3,
        name: 'Sterling Silver Pave Butterfly Necklace',
        price: '$45.00',
        category: 'Necklace',
        finish: 'Sterling Silver',
        images: ['img/necklaces/butterfly-sterling-silver.webp', 'img/necklaces/butterfly-sterling-silver(2).webp', 'img/necklaces/butterfly-sterling-silver(3).webp'],
        description: 'Invest in quality with sterling-silver styles. This lovely necklace is made from genuine sterling silver. It features a chic butterfly design that will never go out of style. Wear it on its own for a considered look, or stack it with other silver accessories.'
    },
    // GOLD
    {
        id: 4,
        name: 'Gold Cubic Zirconia Vine Necklace',
        price: '$29.00',
        category: 'Necklace',
        finish: 'Gold',
        images: ['img/necklaces/vine-gold.webp', 'img/necklaces/vine-gold(2).webp', 'img/necklaces/vine-gold(3).webp'],
        description: 'This timeless chain necklace features a gorgeous, gold-toned chain. This classic necklace features a cubic zirconia, vine design for an ethereal finish. Chain Length 45cm'
    },
    {
        id: 5,
        name: 'Gold Plated Stainless Steel Open Oval Link Necklace',
        price: '$26.00',
        category: 'Necklace',
        finish: 'Gold',
        images: ['img/necklaces/link-gold.webp', 'img/necklaces/link-gold(2).webp', 'img/necklaces/link-gold(3).webp'],
        description: 'Invest in quality jewellery staples from the Lovisa Waterproof Jewellery Collection! This Gold Plated Stainless Steel Open Oval Link Necklace is crafted from 100% stainless steel, making it highly resistant and durable for everyday wear.'
    },
    {
        id: 6,
        name: 'Gold Plated Stainless Steel Heart FOB Flat Chain Necklace',
        price: '$34.00',
        category: 'Necklace',
        finish: 'Gold',
        images: ['img/necklaces/heart-gold.webp', 'img/necklaces/heart-gold(2).webp', 'img/necklaces/heart-gold(3).webp'],
        description: 'Invest in quality jewellery staples from the Lovisa Waterproof Jewellery Collection! This Gold Plated Stainless Steel Heart FOB Flat Chain Necklace is crafted from 100% stainless steel, making it highly resistant and durable for everyday wear.'
    },
    // ROSE GOLD
    {
        id: 7,
        name: 'Rose Gold Dragonfly Cluster Diamante Pendant Necklace',
        price: '$28.00',
        category: 'Necklace',
        finish: 'Rose Gold',
        images: ['img/necklaces/dragonfly-rose-gold.webp', 'img/necklaces/dragonfly-rose-gold(2).webp'],
        description: 'For an ethereal addition to your stack, style this rose gold pendant necklace. This pendant features a dainty chain, adorned with a large diamante-encrusted butterfly pendant. Perfect for styling to parties and festivals! Chain Length 80cm x Pendant Width 6cm'
    },
    {
        id: 8,
        name: 'Rose Gold Curb & Cable Layered Necklace',
        price: '$6.00',
        category: 'Necklace',
        finish: 'Rose Gold',
        images: ['img/necklaces/layered-rose-gold.webp', 'img/necklaces/layered-rose-gold(2).webp'],
        description: 'This layered necklace features a paperclip and curb style chain, perfect for giving your outfit a modern feel. Chain Length 43-45cm'
    },
    {
        id: 9,
        name: 'Rose Gold Cubic Zirconia Flower Vine Necklace',
        price: '$34.00',
        category: 'Necklace',
        finish: 'Rose Gold',
        images: ['img/necklaces/flower-rose-gold.webp', 'img/necklaces/flower-rose-gold(2).webp', 'img/necklaces/flower-rose-gold(3).webp'],
        description: 'Dazzle with Cubic Zirconia! These stunning crystals have been engineered and cut to closely resemble the colour, depth and clarity of true diamonds! This necklace boasts a timeless design with a modern twist and features genuine crystal emebllishments. Wear it for a formal finishing touch day or night'
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
        description: 'For a timeless addition to your everyday stack, discover styles from our premium Sterling Silver Collection. Jewellery from our Sterling Silver Collection is crafted from genuine, 925 sterling silver. A tarnish-resistant and durable material, perfect for everyday wear.'
    },
    {
        id: 11,
        name: 'Sterling Silver Swirl Detail Point Ring',
        price: '$34.00',
        category: 'Rings',
        finish: 'Sterling Silver',
        size: ['SM', 'ML'],
        images: ['img/rings/swirl-sterling-silver.webp', 'img/rings/swirl-sterling-silver(2).webp', 'img/rings/swirl-sterling-silver(3).webp'],
        description: 'Build a jewellery collection filled with life-long pieces from our Sterling Silver Collection. Crafted with genuine, 925 sterling silver - so you never have to take yours off.'
    },
    {
        id: 12,
        name: 'Sterling Silver Braided Ring',
        price: '$34.00',
        category: 'Rings',
        finish: 'Sterling Silver',
        size: ['SM', 'ML'],
        images: ['img/rings/braided-sterling-silver.webp', 'img/rings/braided-sterling-silver(2).webp'],
        description: 'Build a jewellery collection filled with life-long pieces from our Sterling Silver Collection Crafted with genuine, 925 sterling silver - so you never have to take yours off.'
    },
    // GOLD
    {
        id: 13,
        name: 'Gold Plated Staggered Cubic Zirconia Band Ring',
        price: '$31.00',
        category: 'Rings',
        finish: 'Gold',
        size: ['SM', 'ML'],
        images: ['img/rings/staggered-gold.webp', 'img/rings/staggered-gold(2).webp'],
        description: 'For a glamorous addition to your signature stack, style this gold plated ring. This classic ring features a dainty band, encrusted with a cluster of staggered, cubic zirconia crystals for a touch of sparkle.'
    },
    {
        id: 14,
        name: 'Gold Plated Floral Signet Ring',
        price: '$26.00',
        category: 'Rings',
        finish: 'Gold',
        size: ['SM', 'ML'],
        images: ['img/rings/floral-gold.webp', 'img/rings/floral-gold(2).webp'],
        description: 'This timeless ring is plated with real gold and features a bold, signet ring design etched with delicate sunflowers.'
    },
    {
        id: 15,
        name: 'Gold Plated Mystical Oval Ring',
        price: '$26.00',
        category: 'Rings',
        finish: 'Gold',
        size: ['SM', 'ML'],
        images: ['img/rings/oval-gold.webp', 'img/rings/oval-gold(2).webp'],
        description: 'This dainty ring is plated with real gold and features an engagement-style design for a touch of elegance.'
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
        description: 'his dainty ring pack contains two individual stacking rings, each designed with floral motifs and encrusted with mini crystals for a touch of glamour.'
    },
    {
        id: 17,
        name: 'Rose Gold Cubic Zirconia Bow Ring',
        price: '$26.00',
        category: 'Rings',
        finish: 'Rose Gold',
        size: ['SM', 'ML'],
        images: ['img/rings/bow-rose-gold.webp', 'img/rings/bow-rose-gold(2).webp', 'img/rings/bow-rose-gold(3).webp'],
        description: 'Add a touch of warmth to your look with this rose gold stacking ring. This unique ring features a fine band, adorned with cubic zirconia encrusted bow for a touch of sparkle.'
    },
    {
        id: 18,
        name: 'Rose Gold Cat Eye Ring Stack Pack',
        price: '$23.00',
        category: 'Rings',
        finish: 'Rose Gold',
        size: ['SM', 'ML'],
        images: ['img/rings/cat-rose-gold.webp', 'img/rings/cat-rose-gold(2).webp', 'img/rings/cat-rose-gold(3).webp'],
        description: 'Mix them, match them, stack them! Our gorgeous rings are designed to be layered together for maximum impact. Stack this with others and get creative with colour and style. Ring it on!'
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
        description: 'Invest in quality pieces made with sterling silver. These dainty hoops feature lovely shell charms. Pretty and dianty, incorporate them into your daily edits.'
    },
    {
        id: 20,
        name: 'Sterling Silver Dangle Chain Ball Drop Earrings',
        price: '$45.00',
        category: 'Earrings',
        finish: 'Sterling Silver',
        images: ['img/earrings/chain-sterling-silver.webp', 'img/earrings/chain-sterling-silver(2).webp', 'img/earrings/chain-sterling-silver(3).webp'],
        description: 'Invest in quality jewellery staples from the Lovisa Sterling Silver Collection. Fill your jewellery box with timeless pieces that can be worn each and every day.'
    },
    {
        id: 21,
        name: 'Sterling Silver Cubic Zirconia Drop Stud Earrings',
        price: '$31.00',
        category: 'Earrings',
        finish: 'Sterling Silver',
        images: ['img/earrings/moon-sterling-silver.webp', 'img/earrings/moon-sterling-silver(2).webp', 'img/earrings/moon-sterling-silver(3).webp'],
        description: 'For a signature addition to your stack, style these sterling silver studs. These unique stud earrings feature a dainty moon motif, adorned with cubic zirconia crystals for a touch of glamour.'
    },
    // GOLD
    {
        id: 22,
        name: 'Gold Plated Long Winding Cubic Zirconia Drop Earrings',
        price: '$29.00',
        category: 'Earrings',
        finish: 'Gold',
        images: ['img/earrings/drop-gold.webp', 'img/earrings/drop-gold(2).webp', 'img/earrings/drop-gold(3).webp'],
        description: 'For a refined finish to your look, style these real gold plated drop earrings. These lovely drop earrings feature a winding, vine-inspired silhouette. Perfect for adding a touch of sparkle to your look!'
    },
    {
        id: 23,
        name: 'Gold Alligator Drop Huggie Hoop Earrings',
        price: '$17.00',
        category: 'Earrings',
        finish: 'Gold',
        images: ['img/earrings/alligator-gold.webp', 'img/earrings/alligator-gold(2).webp', 'img/earrings/alligator-gold(3).webp'],
        description: 'Personalise your stack with these unique, gold-toned hoop earrings. These hoops feature a gorgeous, gold-toned setting and playful alligator or crocodile design.'
    },
    {
        id: 24,
        name: 'Gold Pearl Bow Heart Drop Earrings',
        price: '$23.00',
        category: 'Earrings',
        finish: 'Gold',
        images: ['img/earrings/pearl-gold.webp', 'img/earrings/pearl-gold(2).webp', 'img/earrings/pearl-gold(3).webp'],
        description: 'For a decorative addition to your stack, style these gold-toned drop earrings. These unique statement earrings feature a heart-shaped silhouette, dotted with pearls and adorned with a black ribbon for a coquette-inspired finish.'
    },
     // ROSE GOLD
     {
        id: 25,
        name: 'Rose Gold Frosted Flower Drop Earrings',
        price: '$23.00',
        category: 'Earrings',
        finish: 'Rose Gold',
        images: ['img/earrings/frosted-rose-gold.webp', 'img/earrings/frosted-rose-gold(2).webp', 'img/earrings/frosted-rose-gold(3).webp'],
        description: 'Explore our range of timeless, standout pieces for any occasion! Whether you are looking for some new accent pieces to spice up your jewellery collection, or wanting to try a new trend - we have a little something for everyone.'
    },
    {
        id: 26,
        name: 'Rose Gold Twisted Multi Hoop Earring Pack',
        price: '$28.00',
        category: 'Earrings',
        finish: 'Rose Gold',
        images: ['img/earrings/twisted-rose-gold.webp', 'img/earrings/twisted-rose-gold(2).webp', 'img/earrings/twisted-rose-gold(3).webp'],
        description: 'Channel Old Hollywood Glamour with this duo of rose gold earrings. This earring pack includes two pairs of earrings, including diamante-encrusted drop earrings and a pair of adorning studs.'
    },
    {
        id: 27,
        name: 'Rose Gold Cubic Zirconia Earring 6-Pack',
        price: '$34.00',
        category: 'Earrings',
        finish: 'Rose Gold',
        images: ['img/earrings/zirconia-rose-gold.webp', 'img/earrings/zirconia-rose-gold(2).webp', 'img/earrings/zirconia-rose-gold(3).webp'],
        description: 'Experiment with Lovisa jewellery and accessories! Lovisa is a one-stop shop for on-trend earrings, necklaces, rings, bracelets & more. From classic essentials to statement pieces, Lovisa has something for everyone. Come on, get dressed to the nines!'
    }
] // END OF DATA ARRAY

// Set up a variable to track the user:
let user;

// Click on the SubmitButton
$('#submitButton').click(function(event) {
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


// function populateCards() {
//     const cardsContainer = $('#cards');

//     cardsContainer.empty();

//     $.each(jewelleryCards, function(index, item) {
//         let cardHtml = 
//         ` <div class="all-cards">
//         <div class="swiper">
//             <div class="swiper-wrapper">
//             <div class="swiper-slide"> 1 </div>
//             <div class="swiper-slide"> 2 </div>
//             <div class="swiper-slide"> 3 </div>
//             ...
//             </div>
//         <div class="swiper-pagination"></div>
//         </div>
//         <h3> ${jewelleryCards.name} </h3>
//         <h3> ${jewelleryCards.price} </h3>
//         <h4> ${jewelleryCards.category} </h4>

//         </div>
        
//         `;

//         cardsContainer.append(cardHtml);
//     });
// }

// populateCards();




// swiper intiialisation
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  });



}); // END OF JAVASCRIPT