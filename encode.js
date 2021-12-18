

function encode() {
  var shift = parseInt(document.getElementById("shift").value);
  var text = document.getElementById("text").value;
  let x = []; //empty array to hold output
  var output = document.getElementById("output");

  if (shift < 26 && shift > -26) {
    //only shift if the shift number is (-26,26)
    for (var i = 0; i < text.length; i++) {
      if (
        (text.charCodeAt(i) <= 122 && text.charCodeAt(i) >= 97) ||
        (text.charCodeAt(i) <= 90 && text.charCodeAt(i) >= 65)
      ) {
        //checks that the input is a letter, only shift if the input is a letter
        x[i] = text.charCodeAt(i) + shift;
        //shifts
        if (x[i] > 122) {
          //if the shifted charcode is greater than the charcode for z, loop back to the beginning of the alphabet
          x[i] -= 26;
        } else if (
          x[i] < 97 &&
          text.charCodeAt(i) >= 97 &&
          text.charCodeAt(i) <= 122
        ) {
          //if the shifted character isn't a lowercase letter like the input
          x[i] += 26;
        } else if (
          x[i] > 90 &&
          text.charCodeAt(i) >= 65 &&
          text.charCodeAt(i) <= 90
        ) {
          //if the shifted character isn't a capital letter, if the shifted charcode is greater than the charcode for Z
          x[i] -= 26;
        } else if (
          x[i] < 65 &&
          text.charCodeAt(i) >= 65 &&
          text.charCodeAt(i) <= 90
        ) {
          //if the shifted character is not a capital letter, if the shifted charcode is less than the charcode for A
          x[i] += 26;
        }
      } else {
        //if the input isn't a letter, don't shift it
        x[i] = text.charCodeAt(i);
      }
    }

    var ea = document.getElementsByTagName("p")[3]; //this is the first p element after the description ones

    //creates a heading for the encoded text
    var ec = document.createElement(`h1`);
    ec.id = "eh";
    ec.innerText = "Encoded Text:";
    document.body.insertBefore(ec, ea);

    var encstring = String.fromCharCode.apply(null, x);
    var p = document.createElement(`div`);
    p.innerText = encstring;
    p.id = "enctext";
    document.body.insertBefore(p, ea);
  } else {
    //if the shift is not within -26 to 26, then don't shift create an error message pushed to the DOM
    var pf = document.createElement("p");
    pf.innerText = "Error: shift must be between -26 and 26.";
    // document.body.appendChild(pf);
    output.appendChild(pf);
  }
}
