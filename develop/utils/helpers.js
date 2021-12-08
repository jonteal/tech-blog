module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_time: (data) => {
      date = new Date();
      year = date.getFullYear();
      month = date.getMonth();
      day = date.getDate();

      return month + "/" + day + "/" + year;

    },
};