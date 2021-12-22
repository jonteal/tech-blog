const hb = require('handlebars');

hb.registerHelper('format_date', function(date) {
      date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();

      return month + "/" + day + "/" + year;

});

hb.registerHelper("log", function(something) {
  console.log(something);
});