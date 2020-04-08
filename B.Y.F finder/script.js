



// BIRTH YEAR FINDER (WEB-APP)


// Pleasant_codes 2020


function calculate() {

    var number = document.getElementById("number").value;   // GET INPUT VALUE 

    if (number == " " || number == 0) {

        window.alert("Please input valid age!!");
        return;                                          // TO ALERT USER IF NO VALUE IS INPUTED 
        
    }

    var date = new Date().getFullYear(); 

    var birthyear = number - date;                //  TO CALCULATE DIFFERENCE BETWEEN CURRENT YEAR AND NUMBER INPUTED BY THE USER


    document.getElementById("year").style.display = "block"; 
    document.getElementById("year").innerHTML = "Your birth year is" +  birthyear;      // OUTPUT
}



document.getElementById("year").style.display = "none";                    // TO  ENSURE NO OUTPUT UNTIL AFTER CALCULATION

document.getElementById("button").onclick = function() {  calculate(); };