const hb = require('handlebars');

// FORMAT DATE HELPER FOR HANDLEBARS
hb.registerHelper('format_date', function(date) {
      date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();

      return month + "/" + day + "/" + year;

});

// DEBUG TOOL FOR HANDLEBARS
hb.registerHelper("log", function(something) {
  console.log(something);
});