$(document).ready(function(){
$.getJSON('team.json', function(data){
            var output = '<div class="row pb-5 mb-4">';
            var count = 1;
			  $.each(data, function(key, val){
			   output += '<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">';
               output += '<div class="card rounded shadow-sm border-0">';
               output += '<div class="card-body p-1">';
               output += '<div class="'+ val.code +' px-5 py-4 text-center card-img-top"><img src="'+ val.photo +'" alt="..." width="130" class="rounded-circle mb-2 img-thumbnail d-block mx-auto">';
               output += '<h6 class="text-white mb-0">' + val.name + '</h6>';
               output += '</div>';
               output += '<div class="p-4 d-flex justify-content-center">';
               
               output += '<ul class="list-inline mb-0">';
               
                output += '<li class="list-inline-item">'; 
               output += '<small class="text-muted">' + val.title +'</small>';
               output += '</li>';   
               
               output += '<li class="list-inline-item">';             
               output += '<small class="text-muted">License : ' + val.license +'</small>';
               output += '</li>';
           
               output += '</ul>';
               
               output += '</div>';
               output += '<div class="row">';
               output += '<div class="col-8 col-sm-6"></div>';
               output += '<div class="col-8 col-sm-6"><small class="text-muted"><a href="#" data-toggle="modal" data-target="#'+ val.id +'">Read More</a></small></div>';
               output += '</div>';
               

               output += '</div>';
               output += '</div>';
               output += '</div>';
				output += '<div class="modal fade" id="'+ val.id + '" tabindex="-1">';
                output += '<div class="modal-dialog modal-dialog-scrollable">';
                output += '<div class="modal-content">';
                output += '<div class="modal-header">';
                output += '<h5 class="modal-title" id="exampleModalLabel">' + val.name +'</h5>';
                output += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
                output += '<span aria-hidden="true">&times;</span>';
                output += '</button>';
                output += '</div>';
                output += '<div class="modal-body">';
                   output += '<div class="container-fluid">';
                         output += '<div class="row">';
                               output += '<div class="col-md-12">';
          output += '<img src="'+ val.photo +'" alt="..." width="130" class="rounded-circle mb-2 img-thumbnail d-block mx-auto">';
                               output += '</div>';    
                                   output += '<p>'+ val.bio + '</p>';
                                 output += '<div class="embed-responsive embed-responsive-16by9">';
  output += '<iframe class="embed-responsive-item" src="'+val.video +'" allowfullscreen></iframe>';
                                         output += '</div>';
                         output += '</div>';
                   output += '</div>';
                output += '</div>';
                output += '<div class="modal-footer">';
                output += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
				if(count%4 == 0){
					output += '</div><div class="row pb-5 mb-4">';
				  }
				  count++;
			  });

			  $('#filter-team').html(output);  	
  	
});
  });