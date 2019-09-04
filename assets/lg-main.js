$(document).ready(function () {
  $('#s-lg-index-owner-btn').find('a').html("BY AUTHOR");  //Changing By Owner to By Author
  $('#s-lg-index-group-btn').find('a').html("BY CAMPUS LOCATION");  //Changing By Group to By Campus Location
  //   $('.btn-default').html("Search");  //Changing Text of Search Button
  $('form.form-inline.pull-right').find('span').html("");  //Removing default Search text
  $('#ask-a-librarian').after("<div><a target='_blank' href='http://library.nyu.edu/forms/research/consultations.html'><button id='research-btn'><b>Schedule Research Consultation</b></button></a></div>");
  if (document.getElementById("s-lg-guide-search")) {
    document.getElementById("s-lg-guide-search").setAttribute("placeholder", "search subject guides");  //Changing Placeholder of Search Guides Box
  }
  if (document.getElementById("s-lg-guide-search-terms")) {
    document.getElementById("s-lg-guide-search-terms").setAttribute("placeholder", "enter your search here");  //Changing Placeholder of Guides Page Search Box
  }
});