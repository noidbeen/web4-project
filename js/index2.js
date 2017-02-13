var count = 1;
$('#total').text(count);

$(document).ready(function() {
  
  //GET PRICE OF ITEM($185)
  var price = +$('#item').data('price');
  
  //INCREMENT / DECREMENT BUTTON
  // var count = 1;
  $('.amount').on('click', 'a', function(e) {
    e.preventDefault();
    if ($(this).hasClass('fa-plus')) {
      if (count < 10) {
        count++;
        $('#total').text(count);
      }
    } else if ($(this).hasClass('fa-minus')) {
      if (count > 1) {
        count--;
        $('#total').text(count);
      }
    }
  });
  
  //ADD TO CART BUTTON
  $('#item').on('click','.add-to-cart-btn',function(){
    
    //GET SRC VALUE OF THE IMAGE
    var itemImg = $(this).parent().find('img').prop('src');
    //GET TEXT OF THE ITEM
    var itemText = $(this).parent().find('h3').text();
    //UL
    var cartItemsUL = $('#cart-items');
    //CREATE NEW LI
    var li = $('<li></li>');
    //CREATE IMG ELEMENT AND ADD THE SRC VALUE
    var cartItemsImg = $('<img>').attr('src',itemImg);
    //NAME OF THE ITEM
    var cartItemsText = $('<span></span>').text(itemText);
    
    var cartItemsAmount = $('<span></span>').addClass('bold').text('total:');
    //MULTIPLY THE PRICE OF THE ITEM WITH THE QTY.
    var total = Math.floor(price * count);
    
    var cartItemsTotal = $('<span></span>').addClass('total').text('$'+total+'');
    
    $(cartItemsUL).append($(li));
    $(li).append($(cartItemsImg),$(cartItemsText),$(cartItemsAmount),$(cartItemsTotal));
    
    
    if($(cartItemsUL).children().length > 1){
      $(cartItemsUL).children().first().remove();
    }
    
    //POP UP NOTIFICATION
    var notify = $('<div></div>').addClass('pop-up').text('added to cart').fadeOut(2000);
    $(this).parent().append(notify);

    
  });
  
  
  //NAV BUTTON TOGGLE UL
  $('nav').on('click','button',function(){
    // $(this).parent().slideToggle();
    $(this).parent().find('#cart-items').toggleClass('open');
  });
});
