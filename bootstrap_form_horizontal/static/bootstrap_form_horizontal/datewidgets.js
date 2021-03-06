$("[data-role='bootstrap-form-horizontal-date-time-widget']").each(function(i, el) {
  var parent = $(el);
  var dest = parent.find("[data-role='date-time']");
  var dateEl = parent.find("[data-role='date']");
  var hoursEl = parent.find("[data-role='hours']");
  var minutesEl = parent.find("[data-role='minutes']");
  var ampmEl = parent.find("[data-role='ampm']");
  new Pikaday({ field: dateEl[0], format: "YYYY-MM-DD" });
  parent.find("[type='date'], select").change(function() {
    console.log("CHANGEO");
    var date = dateEl.val();
    if (date) {
      var hours = parseInt(hoursEl.val(), 10)
      var minutes = parseInt(minutesEl.val(), 10)
      var pm = ampmEl.val() === "pm";
      if (!pm && hours === 12) {
        hours = 0;
      } else if (pm && hours !== 12) {
        hours += 12;
      }
      dest.val(
        date + " " +
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":00"
      );
    } else {
      dest.val("");
    }
  });
});

