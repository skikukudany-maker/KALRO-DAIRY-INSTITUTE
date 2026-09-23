/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


/* =========================
   PRODUCT FILTER
========================= */

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================
   WHATSAPP ENQUIRY
========================= */

function enquire(product) {

    const phone = "+254762016271";

    const message =
        `Hello, I am interested in the ${product}. Please provide more information about availability and price.`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* =========================
   BREED ADVISOR
========================= */

function recommendBreed() {

    const goal =
        document.getElementById("goal").value;

    const climate =
        document.getElementById("climate").value;

    const result =
        document.getElementById("recommendation");


    let recommendation = "";


    if (
        goal === "milk" &&
        climate === "highland"
    ) {

        recommendation =
            "Recommended: Friesian. " +
            "This breed is suitable when the primary goal " +
            "is high milk production in favourable highland conditions.";

    }


    else if (
        goal === "milk" &&
        climate === "lowland"
    ) {

        recommendation =
            "Recommended: Jersey or suitable Jersey crosses. " +
            "Consider local climate, feed availability and management.";

    }


    else if (
        climate === "asal"
    ) {

        recommendation =
            "Recommended: Sahiwal or Sahiwal crosses. " +
            "These animals can be suitable for hotter and " +
            "more challenging environments.";

    }


    else if (
        goal === "dual"
    ) {

        recommendation =
            "Recommended: Fleckvieh or another suitable " +
            "dual-purpose breed.";

    }


    else {

        recommendation =
            "Consider Friesian, Jersey, Sahiwal crosses " +
            "or Fleckvieh depending on your farm conditions.";

    }


    result.innerHTML =
        recommendation;

}


/* =========================
   CONTACT FORM
========================= */

function sendEnquiry(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const interest =
        document.getElementById("interest").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        `Hello, my name is ${name}.
        
Phone: ${phone}

I am interested in: ${interest}

Message:
${message}`;


    const whatsappURL =
        `https://wa.me/+254762016271?text=` +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

}