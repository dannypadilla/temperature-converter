
// does a bit too much.... could separate more
/* takes input and returns calculated value as a formatted string */
function get_data() {
  user_input = document.getElementById("user_input");
  data = user_input // redundant...
  let selected_radio = loop_radio_list() // workaround, since forgot how to get checked radio

  let output = ""
  if (selected_radio == 0) { // hardcoded radio selection...
    output = to_fahrenheit_format(data.value)
  } else {
    output = to_celsius_format(data.value)
  }

  document.getElementById("result_data").innerHTML = output // update page
}


// hacked way for getting radio button selection......
function loop_radio_list() {
  const radio_list = ["far", "cel"] // hardcoded choices
  for (let i = 0; i < radio_list.length; i++) {
    let radio = document.getElementById(radio_list[i])
    if (radio.checked == true) {
      return radio.value
    }
  }
}


// formula from google
function to_fahrenheit_format(data) {
  let conversion = (data - 32) * (5/9);
  let concat_string = data + " F = " + conversion + " C";
  return concat_string
}

// formula from google
function to_celsius_format(data) {
  let conversion = (data * (9/5) ) + 32;
  let concat_string = data + " C = " + conversion + " F";
  return concat_string
}
