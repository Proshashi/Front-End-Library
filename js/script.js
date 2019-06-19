var copied_toast = document.querySelector('.copied_toast');
var spans = document.querySelectorAll('.template-group span');

function copyCode(element) {
  copy_code = element.innerHTML;
  var textArea = document.createElement("textarea");
  textArea.value = copy_code;
  document.body.appendChild(textArea);
  textArea.select();
  var successful = document.execCommand('copy');
  successful ? console.log('Copying text command was sucessful') : 'unsuccessful';
  document.body.removeChild(textArea);
}

function copiedToast() {
  copied_toast.style.animationName = "animate-toast";
  setTimeout(function () {
    copied_toast.style.animationName = copied_toast.style.animationName.replace("animate-toast", "");
  }, 1000);
}

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function () {
    copyCode(this);
    copiedToast();
  })
}

var login_copy_button = document.querySelector("#login_copy_button");
var login_field_code = document.querySelector(".login");
login_copy_button.addEventListener('click', function () {
  copyCode(login_field_code);
  copiedToast();
})

var card_copy_button = document.querySelector("#card_copy_button");
var card_field_code = document.querySelector(".template_card");
card_copy_button.addEventListener('click', function () {
  copyCode(card_field_code);
  copiedToast();
})