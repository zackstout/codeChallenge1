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
  $('body').append('<div class="add"></div>');
  $('body').children().last().append('<p>' + count +'</p>');
  $('body').children().last().append('<button id="swap">Swap</button>');
  $('body').children().last().append('<button id="delete">Delete</button>');
  
}
