
var survey_options = document.getElementById("survey_options");
var add_more_fields = document.getElementById("add_more_fields");
var remove_fields = document.getElementById("remove_fields");

add_more_fields.onclick = function () {
    var newFields = document.createElement("input")
    newFields.setAttribute("type", "text");
    newFields.setAttribute("name", "survey_options[]");
    newFields.setAttribute("class", "survey_options");
    newFields.setAttribute("siz", "50");
    newFields.setAttribute("placeholder", "Another Fields");

    survey_options.appendChild(newFields);
}

remove_fields.onclick = function () {
    var input_tags = survey_options.getElementsByTagName("input");
    if (input_tags.length > 2) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1])
    }
}