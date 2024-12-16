  
    let a1;
    let b1;
    let c1;
    let d1;
    

    let a2;
    let b2;
    let c2;
    let d2;

  
    let a3;
    let b3;
    let c3;
    let d3;
    

    let a4;
    let b4;
    let c4;
    let d4;
  
    let a5;
    let b5;
    let c5;
    let d5;
    

    let a6;
    let b6;
    let c6;
    let d6;

  
    let a7;
    let b7;
    let c7;
    let d7;
    

    let a8;
    let b8;
    let c8;
    let d8;









    document.getElementById("submitButton").onclick = function(){
    
        a1 = document.getElementById("aTextBox1").value;
        b1 = a1.toLowerCase();
        c1 = b1.trim();
    
        a2 = document.getElementById("aTextBox2").value;
        b2 = a2.toLowerCase();
        c2 = b2.trim();

        a3 = document.getElementById("aTextBox3").value;
        b3 = a3.toLowerCase();
        c3 = b3.trim();

        a4 = document.getElementById("aTextBox4").value;
        b4 = a4.toLowerCase();
        c4 = b4.trim();
    
        a5 = document.getElementById("aTextBox5").value;
        b5 = a5.toLowerCase();
        c5 = b5.trim();

        a6 = document.getElementById("aTextBox6").value;
        b6 = a6.toLowerCase();
        c6 = b6.trim();
    
        a7 = document.getElementById("aTextBox7").value;
        b7 = a7.toLowerCase();
        c7 = b7.trim();

        a8 = document.getElementById("aTextBox8").value;
        b8 = a8.toLowerCase();
        c8 = b8.trim();
        
    
        
        var d1 = "allais";
        var d2 = "allais";
        var d3 = "allait";
        var d4 = "allait";
        var d5 = "allions";
        var d6 = "alliez";
        var d7 = "allaient";
        var d8 = "allaient";

      
    


        
        if (c1==d1 && c2==d2 && c3==d3 && c4==d4 && c5==d5 && c6==d6 && c7==d7 && c8==d8){
                /*document.getElementById("cLabel2").innerHTML = true;*/
                document.getElementById("correct_answer").style.display = "inline";
                document.getElementById("false_answer").style.display = "none";

        }
        else{
           /* document.getElementById("cLabel2").innerHTML = false;*/
           document.getElementById("correct_answer").style.display = "none";
           document.getElementById("false_answer").style.display = "inline";


    
        }    
    }
        
        

/*Drop Down Function*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function dropDownFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
