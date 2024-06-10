var message = document.getElementById("input");
var output = document.getElementById("output");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
var text = '';

document.getElementById("gen").addEventListener('click', function() {
  output.innerHTML = '';
  output2.innerHTML = '';
  text = input.value;

  output.innerHTML += "( "+text+" )\n";
  output.innerHTML += "    \\  (__)\n";
  output.innerHTML += "     \\ (oo)\\_______\n";
  output.innerHTML += "       (__)\\       )\\/\\\n";
  output.innerHTML += "            ||----w |\n";
  output.innerHTML += "            ||     ||";

  output2.innerHTML += "( "+text+" )\n";
  output2.innerHTML += "     \\   (__)\n";
  output2.innerHTML += "       \\ (oo)\\________\n";
  output2.innerHTML += "          (__)\\                )\\/\\\n";
  output2.innerHTML += "                | | - - - w |\n";
  output2.innerHTML += "                | |           | |";
});

document.getElementById('copy').addEventListener('click', function() {
  navigator.clipboard.writeText(output2.innerHTML)
  alert("copied")
});