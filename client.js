console.log('js');

$(document).ready(f1);

function f1() {
  console.log('jq');
  $('#btn').append('<button id="gen">Generate</button>');
  $('#btn').on('click', '#gen', generateDiv);
  $('body').on('click', '#swap', swapColor);
  $('body').on('click', '#delete', deleteDiv);
}

var count = 0, count2 = 0;

function generateDiv() {
  count += 1;
  $('body').append('<div class="add"></div>');
  $('body').children().last().append('<p>' + count +'</p>');
  $('body').children().last().append('<button id="swap">Swap</button>');
  $('body').children().last().append('<button id="delete">Delete</button>');
}

function swapColor() {
  count2 += 1;
  if (count2 % 2 === 1){
    $(this).parent().css('background-color', 'yellow');
  } else {
    $(this).parent().css('background-color', 'red');
  }
}

function deleteDiv() {
  $(this).parent().remove();
}
