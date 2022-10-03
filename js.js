

$(document).on('submit' , '#saveStudent' , function(e){
    e.preventDefault();
    formData = new FormData(this)
    formData.append('save_student' , true)
    // alert('hellow')
    $.ajax({
        type: "POST",
        url: "code.php",
        data:formData,
        processData:false,
        contentType:false,
        success: function (response) {
            // var res = jQuery.parseJSON(response)
            var res = $.parseJSON(response)
                if(res.status == 200)
                {
                    alert('Student Created Successfully')
                }
                else{
                    alert("Somthing Went Wrong")
                }
        }
    });

  
})
