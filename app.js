$(function(){
  $('span.filter').each(function(){
    $(this).click(function(){
      var $filter = $(this);
      var filter_type = $filter.attr('className').replace(/filter label ?/,'').replace(/s$/,'');
      var list = $filter.nextAll('ul.inbox');
      if(filter_type!=''){
        list.find('li.'+filter_type).show();
        list.find('li').not('li.'+filter_type).hide();
      }else{
        list.find('li').show();
      }
    });
  });
});
