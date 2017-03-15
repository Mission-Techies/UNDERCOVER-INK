var edunp_data_url = 'https://api.airtable.com/v0/appjToE5jzbSVq4c5/shopes?api_key=key5nqFTKwryMb86C';
var edunpHTML = '';
var edunpDiv = $('.Agency');
var renderedunpData = function(data) {
 data.records.forEach(function(program) {
   edunpHTML += '<h2>' + program.fields['shop name'] + '</h2>';
   edunpHTML += '<h2>' + program.fields['location'] + '</h2>';
   edunpHTML += '<h2>' + program.fields['contact info'] + '</h2>';
  //  console.log("program.fields.work.url")
  //  data.work['url'].forEach(function (program) {
  //    edunpHTML += '<a src="' + url + '"></a>"';
  //  })
  //  edunpHTML += program.fields['work'];
  //  if (program.fields['Email']) {
  //    edunpHTML += '<p>' + program.fields['Email'] + '</p>';
  //  };
  //  if (program.fields['Agency Contacts']) {
  //    edunpHTML += '<p>' + program.fields['Agency Contacts'] + '</p>';
  //  };
  //  edunpHTML += '<a href="' + program.fields['Adress'] + '">' + program.fields['Adress'] + '</a>';
   edunpHTML += '<hr />';
 });
 edunpDiv.html(edunpHTML);
};
function myFunction(x) {
   x.classList.toggle("change");
}
$.getJSON(edunp_data_url, renderedunpData);
