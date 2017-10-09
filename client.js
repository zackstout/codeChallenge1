console.log('js');

$(document).ready(f1);

function f1() {
  console.log('jq');
  $('#btn').append('<button id="gen">Generate</button>');
  $('#btn').on('click', '#gen', generateDiv);
}

function generateDiv(){
  $('body').append('<div class="add"></div>');

}
