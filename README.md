# Knockout custom binding for jQuery datepicker

This is a simple custom binding for implementing the datepicker plugin in Knockoutjs.

The binding will look like:

``` html
<input type="text" data-bind="datepicker: startDate, datepickerOptions: { numberOfMonths: 3 }" />
```

* You can pass every option from the jQuery UI datepicker api to the datepickerOptions.
* The binding works with one- and two-way-bindings.
* See the demo.html file for a working demo.

For more information have a look at this <a href="http://devangelist.de/knockout-custom-bindings-datepicker/">blog-post</a> (german).