const listItems = [
    {
        item: "Home",
        dropdown1: "Item",
        dropdown2: "Action",
        dropdown3: "Something else"
    },
    {
        item: "Pages",
        dropdown1: "Item",
        dropdown2: "Action",
        dropdown3: "Something else"
    },
    {
        item: "Courses",
        dropdown1: "Item",
        dropdown2: "Action",
        dropdown3: "Something else"
    },
    {
        item: "Features",
        dropdown1: "Item",
        dropdown2: "Action",
        dropdown3: "Something else"
    },
    {
        item: "Blog",
        dropdown1: "Item",
        dropdown2: "Action",
        dropdown3: "Something else"
    },
    {
        item: "Shop",
        dropdown1: "Item",
        dropdown2: "Action",
        dropdown3: "Something else"
    }
]

const listsFooter = [
    {
        title: "Explore",
        titleClass: "fw-bolder",
        col: "col-6 col-lg-2",
        list: [
            {
                paragraph: "Start here",
                href: "#"
            },
            {
                paragraph: "Success story",
                href: "#"
            },
            {
                paragraph: "Blog",
                href: "#"
            },
            {
                paragraph: "Courses",
                href: "#"
            },
            {
                paragraph: "Contact us",
                href: "#"
            }
        ]
    },
    {
        title: "Information",
        titleClass: "fw-bolder",
        col: "col-6 col-lg-2",
        list: [
            {
                paragraph: "Membership",
                href: "#"
            },
            {
                paragraph: "Purchase guide",
                href: "#"
            },
            {
                paragraph: "Privacy policy",
                href: "#"
            },
            {
                paragraph: "Terms of services",
                href: "#"
            }
        ]
    }    
]

const socials = [
    {
        url: "https://www.facebook.com/",
    class: "fa-brands fa-facebook-f"
    },
    {
        url: "https://x.com/home",
    class: "fa-brands fa-twitter"
    },
    {
        url: "https://www.instagram.com/",
    class: "fa-brands fa-instagram"
    },
    {
        url: "https://www.linkedin.com/",
    class: "fa-brands fa-linkedin"
    },
]

const instagramPhotos = [
    {
        path: "120084500_197897808368764_8114555493043279565_n.jpg",
        alt: "Instagram photo",
        class: "img-fluid",
    },
    {
        path: "120012142_177596140500760_8623485824101406058_n.jpg",
        alt: "Instagram photo",
        class: "img-fluid mx-3",
    },
    {
        path: "120099363_364334431619755_7198812647386067017_n.jpg",
        alt: "Instagram photo",
        class: "img-fluid d-none d-md-block",
    }
]

const jumboIconsClass = ["fa-solid fa-ruler-combined", "fa-regular fa-life-ring", "fa-solid fa-book", "fa-solid fa-cart-shopping"]

export { listItems, socials, listsFooter, instagramPhotos, jumboIconsClass }