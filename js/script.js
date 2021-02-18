new Vue({
  el: '#app',
  data: {
    menuNav:['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
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
  },

  methods: {
    imageCourse: function(index) {
      const icon = this.courses[index].icon;
      const imageString = `img/h5-custom-icon${icon}.png`;
      return imageString;
    }
  }

});//end vue app

Vue.config.devtools = true;
