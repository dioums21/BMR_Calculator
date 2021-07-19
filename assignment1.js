function calculateBMR() {
    var Weight = document.getElementById("Weight").value;
    var Height = document.getElementById("Height").value;
    var Age = document.getElementById("Age").value;
    var Gender = document.getElementById("Gender").value;
    var BMR;
    var level;
    var level1 = document.getElementById("level1");
    var level2 = document.getElementById("level2");
    var level3 = document.getElementById("level3");
    var level4 = document.getElementById("level4");
    var level5 = document.getElementById("level5");
    if (Gender=="Male") {
        BMR = 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age);
    
    }
    else if (Gender=="Female") {
        BMR = 655.1 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age);
    
    }

    if (level1.checked || level2.checked) {
        level=BMR*1.53;
    
    }
    else if (level3.checked || level4.checked) {
        level=BMR*1.76;
    
    }
    else if (level5.checked) {
        level=BMR*2.55;
    
    }
  
    
    alert("Your BMR is " + BMR + " And your Calorie level is " + level);
 
    }
 
document.getElementById("submit").addEventListener("click", calculateBMR, false);
