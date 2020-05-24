$(document).ready(function () {
    
    jQuery.validator.addMethod("uploadFile", function (val, element) {
           var size = element.files[0].size;
           console.log(size);
           if (size > 1048576)// checks the file more than 1 MB
           {
               console.log("returning false");
               return false;
           } else {
               console.log("returning true");
               return true;
           }

     }, "File type error");  
    $("#career_frm").validate({        
        ignore: [],
        onfocusout: false,        
        rules: {
            candidatename: "required",
            emailaddress : {
                required: true,
                email : true
            },
            mobile: {
                required : true,
                number : true,
                minlength: 10,
                maxlength: 10
            },
            location : "required",
            category : "required",
            resume : {
                required: true,
                accept : 'docx|doc|pdf'
            }
        },
        messages: {
            candidatename: "Please enter your name",
            emailaddress : {
                required : "Please enter your email address",
                email : "Please enter a valid email address"
            },
            mobile:{
                required : "Please enter your mobile number",
                minlength: "Please enter a valid mobile number",
                maxlength: "Please enter a valid mobile number"                
            },
            category : "Please enter your category",
            location : "Please enter your location",
            resume : {
                required : "Please upload your resume",
                accept  : "Please upload pdf/doc/docx document"
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorElement: "div",
        /*wrapper: "div",*/
        errorPlacement: function(error, element) {
            offset = element.offset();              
            if ($(window).width() < 635) {               
               if("resume" == element.attr("name")) {
                   element.parent().after(error); 
                   $(window).resize();               
               } else {
                   element.after(error);
                   $(window).resize();               
               }
            } else {
                element.parent().parent().before(error);  
            }            
            error.addClass('errorBox');             
        }
    });
    
    $("#candidatename,#location").keypress(function (e) {
        if ((e.which >= 97 && e.which <= 122) || e.which == 32 || (e.which >= 65 && e.which <= 90)) {
            return true;
        } else {
            return false;
        }
    });
    
    $("#mobile").keypress(function (e) {        
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {      
            return false;
        }
    }); 

    /*
        *** Contact Form Validation
    */
    $("#contact_frm").validate({        
        ignore: [],
        onfocusout: false,        
        rules: {
            username: "required",
            emailaddress : {
                required: true,
                email : true
            },
            servCont : "required",
            location : "required",
            message : "required"
        },
        messages: {
            username : "Please enter your name",
            location : "Please select service type",
            location : "Please enter your location",
            emailaddress : {
                required : "Please enter your email address",
                email : "Please enter a valid email address"
            },            
            message : "Please enter your message",
            
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorElement: "div",
        /*wrapper: "div",*/
        errorPlacement: function(error, element) {
            offset = element.offset();              
            if ($(window).width() < 635) {               
               element.after(error);
               $(window).resize();
            } else {
                element.parent().parent().before(error);  
            }             
            error.addClass('errorBox');             
        }
    });    
    var regex = /https?:\/\/[\-A-Za-z0-9+&@#\/%?=~_|$!:,.;]*/g; //match urls


$('#message').on('input', function() {
    var textArea = $(this).val().match(regex); // search string
    if(textArea && textArea.length > allowed){
        return false;
   }else{
return true;    }
});
  
});

