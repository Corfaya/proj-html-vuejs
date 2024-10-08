const listItems = [
    {
        item: "Home",
        dropdownItems: [
            {
                text: "MaxCoach Education",
                badge: true
            },
            {
                text: "Course Portal",
                badge: false
            },
            {
                text: "Distant Learning",
                badge: true
            },
            {
                text: "Multimedia Pedagogy",
                badge: false
            },
            {
                text: "Modern Schooling",
                badge: false
            },
            {
                text: "Remote Training",
                badge: false
            },
            {
                text: "Health Coaching",
                badge: true
            }
        ]
    },
    {
        item: "Pages",
        dropdownItems: [
            {
                text: "Start Here",
                badge: false
            },
            {
                text: "Success Story",
                badge: true
            },
            {
                text: "About me",
                badge: false
            },
            {
                text: "Contact me",
                badge: false
            },
            {
                text: "Privacy Policy",
                badge: false
            },
            {
                text: "Terms of Service",
                badge: false
            }
        ]
    },
    {
        item: "Courses",
        dropdownItems: [
            {
                text: "Course Grid 01",
                badge: false
            },
            {
                text: "Course Grid 02",
                badge: false
            },
            {
                text: "Course Grid 03",
                badge: true
            },
            {
                text: "Checkout",
                badge: false
            }
        ]
    },
    {
        item: "Features",
        dropdownItems: [
            {
                text: "Events",
                badge: false
            },
            {
                text: "Zoom Meetings",
                badge: false
            }
        ]
    },
    {
        item: "Blog",
        dropdownItems: [
            {
                text: "Blog Grid",
                badge: false
            },
            {
                text: "Blog Masonry",
                badge: false
            },
            {
                text: "Blog Classic",
                badge: false
            },
            {
                text: "Blog List",
                badge: false
            }
        ]
    },
    {
        item: "Shop",
        dropdownItems: [
            {
                text: "Shop Left Sidebar",
                badge: false
            },
            {
                text: "Shop Right Sidebar",
                badge: false
            },
            {
                text: "Cart",
                badge: false
            },
            {
                text: "Wishlist",
                badge: false
            },
            {
                text: "Single Product",
                badge: false
            }
        ]
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

const offers = [
    {
        imgBoxClasses: "d-flex my-5",
        src: "artist-box-image-01.png",
        alt: "Online courses image: leaf",
        h5: "Online Courses",
        paragraph: "Online art coaching now offers you a very powerful way to redesign your artist mind."
    },
    {
        imgBoxClasses: "d-flex my-5 pt-5",
        src: "artist-box-image-02.png",
        alt: "Online courses image: rainbow",
        h5: "One to One",
        paragraph: "Getting the necessary clarity about the current statee to help you improve your ability."
    },
    {
        imgBoxClasses: "d-flex my-5",
        src: "artist-box-image-03.png",
        alt: "Online courses image: rain",
        h5: "Anywhere",
        paragraph: "Access to valuable and portable program which allow you to setup and live anywhere you want."
    },
    {
        imgBoxClasses: "d-flex my-5 pt-5",
        src: "artist-box-image-04.png",
        alt: "Online courses image: eye",
        h5: "On Time",
        paragraph: "Punctuality is our top priority because it's an essential criteria to assess a program quality."
    }
]

const courses = [
    {
        src: "artist-course-08-480x480.jpg",
        alt: "Online Course 1",
        price: "$18.00",
        title: "The Acrylic Painting Academy",
        duration: 4,
        students: 50,
    },
    {
        src: "artist-course-07-480x480.jpg",
        alt: "Online Course 2",
        price: "$21.00",
        title: "Drawing and Shading: Complete Course",
        duration: 14,
        students: 50,
    },
    {
        src: "artist-course-06-480x480.jpg",
        alt: "Online Course 3",
        price: "$19.00",
        title: "The color Theory for Digital Artist",
        duration: 7,
        students: 50,
    },
    {
        src: "artist-course-05-480x480.jpg",
        alt: "Online Course 4",
        price: "$35.00",
        title: "Ultimate Guidee to Digital Sketching for Beginner",
        duration: 14,
        students: 50,
    },
    {
        src: "artist-course-04-480x480.jpg",
        alt: "Online Course 5",
        price: "$19.00",
        title: "Portrait Drawing The Smart Way",
        duration: 2,
        students: 50,
    },
    {
        src: "artist-course-03-480x480.jpg",
        alt: "Online Course 6",
        price: "$19.00",
        title: "Mastering Watercolor Painting from Beginner",
        duration: 9,
        students: 50,
    },
    {
        src: "artist-course-02-480x480.jpg",
        alt: "Online Course 7",
        price: "$25.00",
        title: "The Art & Sciencee of Drawing",
        duration: 4,
        students: 50,
    },
    {
        src: "artist-course-01-480x480.jpg",
        alt: "Online Course 8",
        price: "$22.00",
        title: "The Colored PencilDrawing Course",
        duration: 6,
        students: 50,
    }
]

const events1 = [
    {
        src: "artist-event-04-250x300.jpg",
        alt: "Evento 1",
        date: "NOV 22, 2020",
        title: "Storytelling Workshop",
        location: "Texas, US"
    },
    {
        src: "artist-event-03-250x300.jpg",
        alt: "Evento 2",
        date: "OCT 10, 2020",
        title: "Painting Art Contest 2020",
        location: "New York, US"
    }
]

const events2 = [
    {
        src: "artist-event-02-250x300.jpg",
        alt: "Evento 3",
        date: "NOV 23, 2020",
        title: "International Art Fair 2020",
        location: "Hamburg, Germany"
    },
    {
        src: "artist-event-01-250x300.jpg",
        alt: "Evento 4",
        date: "DEC 15, 2020",
        title: "Street Performance: Call for Artist",
        location: "Illinois, US"
    }
]

const testimonials = [
    {
        title: "High level of efficiency and scientific teaching methods",
        review: "I am free to learn at my  own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
        nameTestimonial: "Mina Hollace",
        role: "/ FreeLancer",
        src: "artist-testimonial-avatar-04.jpg",
    },
    {
        title: "Professional team of specialists and passionate mentors at reach",
        review: "I need to get a certification for English proficiency and MaxCoach is my best choise. Their tutors are smart and professional when dealing with students.",
        nameTestimonial: "Madley Pondor",
        role: "/ IT Specialist",
        src: "artist-testimonial-avatar-03.jpg",
    },
    {
        title: "The MaxCoach team works really hard to ensure high quality",
        review: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.",
        nameTestimonial: "Luvic Dubble",
        role: "/ Private Tutor",
        src: "artist-testimonial-avatar-02.jpg",
    },
    {
        title: "It's a choice of quality for people with special needs",
        review: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
        nameTestimonial: "Florence Themes",
        role: "/ Multimedia Admin",
        src: "artist-testimonial-avatar-01.jpg",
    }
]

const jumboIconsClass = ["fa-solid fa-ruler-combined", "fa-regular fa-life-ring", "fa-solid fa-book", "fa-solid fa-cart-shopping"]

export { listItems, listsFooter, socials, instagramPhotos, offers, courses, events1, events2, testimonials, jumboIconsClass }