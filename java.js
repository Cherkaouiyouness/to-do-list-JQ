
$(document).ready(function(){
    $("button").click(function(){
         let parent = $("<div></div>")
         let newTask = $("<p></p>")
         let Btn = $("<button></button>")

        newTask.text($("#inputField").val())
        Btn.text("Delete")
         
        parent.append(newTask,Btn)
        $("#DisplayList").append(parent)
      

        Btn.click(function(){
        $(this).parent().remove();

    });
    });
   
  });



   
