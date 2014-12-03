django-bootstrap-form-horizontal
################################

This is set of form templates that implement a bootstrap "horizontal" style for
Django forms.  Handles all default field types, including a nice
`Pikaday <https://dbushell.github.io/Pikaday/>`_ wrapper for date time fields. 

Usage::

    {% include "bootstrap_form_horizontal.html" with form=myform %}

The template accepts the following context:

 - ``form``: The form to render.
 - ``submit``: The text for a submit button with class ``btn btn-primary``.  If not specified, no submit button is rendered.
 - ``wrap``: If not 0, will wrap form with ``<form method='post' action='' class='form-horizontal'>{% csrf_token %} ... </form>``. Default: ``True``  If you specify ``wrap=0``, the form will be rendered without wrapping, and you must provide your own ``class='form-horizontal'`` wrapper.
 - ``label_class``: The grid class(es) to use on label elements. Default: ``col-sm-4``.
 - ``field_class``: The grid class(es) to use on field elements. Default: ``col-sm-8``.

To render properly, you must include various css/js. For convenience, vendored
bootstrap is included here -- though you probably are already loading it in
your project if you're interested in this app::

    <!-- Bootstrap -->
    <link rel='stylesheet' type='text/css' href='{{ STATIC_URL }}bootstrap_form_horizontal/vendor/bootstrap/css/bootstrap.css' />
    <script type='text/javascript' src='{{ STATIC_URL }}bootstrap_form_horizontal/vendor/bootstrap/js/bootstrap.min.js'></script>

    <!-- Pikaday -->
    <link rel='stylesheet' type='text/css' href='{{ STATIC_URL }}bootstrap_form_horizontal/vendor/pikaday/css/pikaday.css' />
    <script type='text/javascript' src='{{ STATIC_URL }}bootstrap_form_horizontal/vendor/pikaday/pikaday.js'></script>
    <script type='text/javascript' src='{{ STATIC_URL }}bootstrap_form_horizontal/datewidgets.js'></script>

Examples
--------

Wrap with form, and include submit button::

    {% include "bootstrap_form_horizontal.html" with form=myform submit="Send it in" %}

Do your own form wrapping::

    <form method='post' class='form-horizontal' action='something'>{% csrf_token %}
        {% include "bootstrap_form_horizontal.html" with form=myform wrap=0 %}
        <input type='submit' value='Go!' />
    </form>

Change the responsive column classes::

    {% include "bootstrap_form_horizontal.html" with label_class='col-sm-2 col-xs-4' field_class='col-xs-10 col-sm-8' %}

Rolling your own form template?
 - ``_bootstrap_form_horizontal_field.html``: renders a single label/field pair.  Expects ``field`` as context; also accepts ``label_class`` and ``field_class`` as above.
 - ``_bootstrap_form_horizontal_non_field_errors.html``: Displays non-field errors wrapped in bootstrap error classes.  Expects ``form`` as context; accepts ``label_class`` and ``field_class``.

Source
------

File issues, download, etc. at https://github.com/yourcelf/django-bootstrap-form-horizontal.git.
