console.log('js');

$(document).ready(f1);

function f1() {
  console.log('jq');
  $('#btn').append('<button id="gen">Generate</button>');
  $('#btn').on('click', '#gen', generateDiv);
}

var count = 0;

function generateDiv(){
  count += 1;
  $('body').append('<div class="add"><p>' + count +
  '</p></div>');


}
