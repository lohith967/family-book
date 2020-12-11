var names=[
    "lohith","madhulatha","umakanth","pavithra"
      ];  
      var i = 0;
function slide() {

  if (i == 4) 
   {
    i = 1; 
   } 
    document.getElementById("display_name").src= images[i]; 
 i++;
}