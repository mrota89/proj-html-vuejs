new Vue({
  el: '#app',
  data: {
    jumboIDX: 0,
    studentReviewIDX: 0,
    choiceLearningIDX: 0,
    coursesIDX: 0,
    plansIDX: 0,
    cartVisibility: false,
    buttonTopVisibility: true,
    productAdded: 0,
    menuNav:['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
    textJumbotron: [
      {
        title: 'Conteporary Ideas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        textButton: 'REGISTER NOW',
        imgBg: '9',
      },
      {
        title: 'Lesson Where You Want',
        text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
        textButton: 'FIND OUT',
        imgBg: '4',
      },
      {
        title: 'Top Teacher',
        text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        textButton: 'MORE INFO',
        imgBg: '10',
      }
    ],
    courses: [
      {
        icon: '-1',
        name: 'Languages'
      },
      {
        icon: '-2',
        name: 'Software'
      },
      {
        icon: '-3',
        name: 'Business'
      },
      {
        icon: '-4',
        name: 'Chemistry'
      },
      {
        icon: '-5',
        name: 'Science'
      },
      {
        icon: '-6',
        name: 'DIY&Craft'
      },
    ],
    studentsReview: [
      {
        studentImg: '2',
        review: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`,
        name: 'Joan Collins',
        grade: 'STUDENT'
      },
      {
        studentImg: '4',
        review: `"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`,
        name: 'Pina Sinalefe',
        grade: 'NEW GRADUATE'
      },
      {
        studentImg: '3',
        review: `"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"`,
        name: 'Herbert Ballerina',
        grade: 'TEACHER'
      },
    ],

    possibilitiesChoices: [
      {
        tabName: 'What We Do',
        title: 'Learning Possibilities',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        flagList: true,
        listItem: [
          'We enrich lives through learning.',
          'Maximizing potential through individual attention.',
          'The trusted name for specialized training.',
          'People teach. People learn. This is where they connect.'
        ],
        imgPath: '-4'
      },
      {
        tabName: 'Degree Programme',
        title: 'The Future Is Now',
        description: 'Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Duis aute irure dolor in reprehenderit.',
          'Esse cillum dolore eu fugiat nulla pariatur.',
          'Fugiat nulla pariatur lorem ipsum dolor sit amet ullamco.',
        ],
        imgPath: '-1'
      },
      {
        tabName: 'Career Achievements',
        title: 'Professionals Of Tomorrow',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet. ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        flagList: true,
        listItem: [
          'Ut enim ad minim veniam, quis nostrud exercitation.',
          'Duis aute irure dolor in reprehenderit in voluptate.',
          'Adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          'Incididunt ut labore et dolore magna aliqua.',
          'Ipsum dolor sit amet.'
        ],
        imgPath: '-2'
      },
      {
        tabName: 'Personal Management',
        title: 'Your Tutor. Your Way.',
        description: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Duis aute irure dolor in reprehenderit.',
          'Esse cillum dolore eu fugiat nulla pariatur.'
        ],
        imgPath: '-3'
      },
      {
        tabName: 'Steps To Success',
        title: 'Hit Your Goals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Ipsum dolor sit amet',
          'Duis aute irure dolor in reprehenderit in voluptate.',
          'Adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          'Duis aute irure dolor in reprehenderit.'
        ],
        imgPath: '-5'
      },
      {
        tabName: 'Knowledge Transfer',
        title: 'Learn By Doing',
        description: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Fugiat nulla pariatur lorem ipsum dolor sit amet ullamco.',
          'Duis aute irure dolor in reprehenderit.',
          'Esse cillum dolore eu fugiat nulla pariatur.',
        ],
        imgPath: '-6'
      },
    ],

    popularCourses: [
      {
        arrayCourses: [
          {
          img: '5',
          name: 'Android Developer',
          teacher: 'David Sanders',
          price: 'FREE',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          placeAvailable: '1',
          typeOfCourse: 'PROGRAMMING',
          },
          {
            img: '6',
            name: 'Web Designing',
            teacher: 'Jennifer Powell',
            price: 'FREE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'PROGRAMMING',
          },
          {
            img: '12',
            name: 'Financial Modelling',
            teacher: 'David Sanders',
            price: '$20',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'BUSINESS',
          }
        ]
      },

      {
        arrayCourses: [
          {
            img: '2',
            name: 'Business English',
            teacher: 'Preston Marshall',
            price: '30$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'LANGUAGES',
          },
          {
            img: '7',
            name: 'Social Computing',
            teacher: 'David Sanders',
            price: 'FREE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'PROGRAMMING',
          },
          {
            img: '11',
            name: 'Learn Spanish',
            teacher: 'Jennifer King',
            price: '30$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'LANGUAGES',
          }
        ]
      },

      {
        arrayCourses: [
          {
            img: '1',
            name: 'Basic Marketing',
            teacher: 'Edward Woodman',
            price: '20$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'PROGRAMMING',
          },
          {
            img:'3',
            name: 'Academic English',
            teacher: 'John Doe',
            price: 'FREE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'LANGUAGES',
          },
          {
            img: '9',
            name: 'Economics of Financial Markets',
            teacher: 'Mario Draghi',
            price: '30$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            placeAvailable: '1',
            typeOfCourse: 'BUSINESS',
          },
        ]
      },
    ],

    pricingPlanProperty: [
      'Number Of Courses',
      'Time', 'Web Designing',
      'Human-Centered Design',
      'Basic Marketing',
      'Python for Everybody',
      'Android Developer',
      'Business English'
    ],

    pricingPlan: [
      {
        img: 'h5-custom-icon-7',
        name: 'Standard',
        price: '$12',
        valueProperty: [
          2,
          '15 Days',
          true,
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        img: 'h5-custom-icon-8',
        name: 'Professional',
        price: '$59',
        valueProperty: [
          4,
          '30 Days',
          true,
          true,
          true,
          true,
          false,
          false
        ],
      },
      {
        img: 'h5-custom-icon-9',
        name: 'Advanced',
        price: '$88',
        valueProperty: [
          6,
          '30 Days',
          true,
          true,
          true,
          true,
          true,
          true
        ],
      }
    ],
    logoPartner: [
      'h5-client-1',
      'h5-client-2',
      'h5-client-3',
      'h5-client-5'
    ],
    supportLink: [
      'User dashboard',
      'Contact Us',
      'FAQ',
      'Course Offer',
      'Events'
    ]
  },

  mounted() {

    setInterval(() => {
      this.imgSliderJumbo();
      this.imgSliderReview();
      this.imgSliderPopCourse();
    }, 5000);
  },

  methods: {
    imageJumbo: function() {
      const icon = this.textJumbotron[this.jumboIDX].imgBg;
      const imageString = `img/course-${icon}-f-img.jpg`;
      return imageString;
    },

    imageStudent: function() {
      const icon = this.studentsReview[this.studentReviewIDX].studentImg;
      const imageString = `img/testimonials-standard-${icon}.png`;
      return imageString;
    },

    imagePossChoice: function() {
      const icon = this.possibilitiesChoices[this.choiceLearningIDX].imgPath;
      const imageString = `img/h3-custom-icon${icon}.png`;
      return imageString;
    },

    imagePopularCourses: function(index) {
      const icon = this.popularCourses[this.coursesIDX].arrayCourses[index].img;
      const imageString = `img/course-${icon}-f-img.jpg`;
      return imageString;
    },

    imageCourse: function(index) {
      const icon = this.courses[index].icon;
      const imageString = `img/h5-custom-icon${icon}.png`;
      return imageString;
    },

    imageTable: function(index) {
      const icon = this.pricingPlan[index].img;
      const imageString = `img/${icon}.png`;
      return imageString;
    },


    imagePartner: function(index) {
      const icon = this.logoPartner[index];
      const imageString = `img/${icon}.png`;
      return imageString;
    },

    imgSliderJumbo: function() {
      this.jumboIDX+= 1;
      if(this.jumboIDX === this.textJumbotron.length) {
        this.jumboIDX = 0;
      }
    },

    imgSliderReview: function() {
      this.studentReviewIDX+= 1;
      if(this.studentReviewIDX === this.studentsReview.length) {
        this.studentReviewIDX = 0;
      }
    },

    imgSliderPopCourse: function() {
      this.coursesIDX+= 1;
      if(this.coursesIDX === this.popularCourses.length) {
        this.coursesIDX = 0;
      }
    },

    classTab: function(index, idx, selected, notSelected) {
      if (index === idx) {
        return selected;
      } else {
        return notSelected;
      }
    },

    coloraPallino: function(index, idx) {
      if(index === idx) {
        return 'fas fa-circle active';
      } else {
        return 'fas fa-circle';
      }
    },

    topFunction: function() {
      document.documentElement.scrollTop = 0;
    },

    alertAddedProduct: function() {
      this.productAdded+= 1
      alert('Product added to cart.');
    }
  }
});//end vue app

Vue.config.devtools = true;
