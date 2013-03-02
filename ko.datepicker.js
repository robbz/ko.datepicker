ko.bindingHandlers.datepicker = {
  init: function (element, valueAccessor, allBindingsAccessor) {
    var options = allBindingsAccessor().datepickerOptions || {};

    $(element)
      .datepicker(options)
      .bind("change", function () {
        ko.bindingHandlers.datepicker.updateValue(element, valueAccessor, allBindingsAccessor);
      });

    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $(element).datepicker("destroy");
    });
  },
  update: function (element, valueAccessor, allBindingsAccessor) {
    var value = ko.utils.unwrapObservable(valueAccessor());

    // If the date is coming from a Microsoft webservice.
    if (typeof value === "string" && value.indexOf('/Date(') === 0) {
      value = new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi, "$1")));
    }
    var currentDate = $(element).datepicker("getDate");

    // Check if the date has changed.
    if (value && value - currentDate !== 0) {
      $(element).datepicker("setDate", value);
    }
  },
  updateValue: function (element, valueAccessor, allBindingsAccessor) {
    var observable = valueAccessor(),
        dateValue = $(element).datepicker("getDate");

    // Two-way-binding means a writeable observable.
    if (ko.isWriteableObservable(observable)) {
      observable(dateValue);
      return;
    }
    if (allBindingsAccessor()._ko_property_writers) {
      allBindingsAccessor()._ko_property_writers.datepicker(dateValue);
    }
  }
};