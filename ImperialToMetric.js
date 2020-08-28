console.log("Javascript loaded successfully for ImperialToMetric")

function convert(numeric, measurement, ingredient) {
    String(measurement, ingredient);
    let numMeasure = 0;
    //if (typeof numeric != 'number') {
    //alert("Numeric value failed " + numeric);
    //} else 
    switch(measurement) {
        case "cupW":
            measurement = "cupW";
            break;
        case "cupV":
            numMeasure = numeric * 237;
            measurement = "ml";
            break;
        case "tbsp":
            numMeasure = numeric * 15;
            measurement = "g";
            break;
        case "oz":
            numMeasure = numeric * 28.35;
            measurement = "g";
            break;
        case "lb":
            numMeasure = numeric * 453.6;
            measurement = "g";
            break;
        case "g":
            numMeasure = numeric;
            break;
        case "kg":
            numMeasure = numeric;
            break;
        case "fl oz":
            numMeasure = numeric * 28.4;
            measurement = "ml";
            break;
        case "pt":
            numMeasure = numeric * 568.26;
            measurement = "ml";
            break;
        case "ml":
            numMeasure = numeric;
            break;
        case "l":
            numMeasure = numeric;
            break;
        default:
        alert("Measurement failed - numeric: " + numeric + " - Measurement: " + measurement);
        }
    numMeasure = Math.round(numMeasure);
    if (measurement === "cupW") { 
        measurement = "g"
        switch(ingredient) {
                case "flour":               // FLOUR
                    numMeasure = numeric * 135;
                    break;
                case "cornflour":
                    numMeasure = numeric * 120;
                    break;
                case "breadcrumbs":
                    numMeasure = numeric * 125;
                    break;
                case "cheese":              // CHEESE
                case "grated cheese":
                case "grated cheddar":
                case "grated parmesan":
                    numMeasure = numeric * 125;
                    break;
                case "cream cheese":
                    numMeasure = numeric * 225;
                    break;
                case "sugar":               // SUGARS
                case "caster sugar":
                case "granulated sugar":
                    numMeasure = numeric * 200;
                    break;
                case "icing sugar":
                case "confectioner's sugar":
                case "powdered sugar":
                case "dusting sugar":
                    numMeasure = numeric * 120;
                    break;
                case "light brown sugar":
                case "brown sugar":
                case "demerara sugar":
                    numMeasure = numeric * 200;
                    break;
                case "muscovado sugar":
                case "dark brown sugar":
                    numMeasure = numeric * 200;
                    break;
                case "butter":              // FATS
                case "margarine":
                    numMeasure = numeric * 225;
                    break;
                case "honey":               // SYRUPS
                case "molasses":
                case "treacle":
                case "syrup":
                case "golden syrup":
                    numMeasure = numeric * 340;
                    break;
                case "uncooked rice":
                case "raw rice":
                case "rice":                // RICE & GRAINS
                    numMeasure = numeric * 200;
                    break;
                case "cooked rice":
                    numMeasure = numeric * 195;
                    break;
                case "semolina":
                case "couscous":
                case "ground rice":
                    numMeasure = numeric * 165;
                    break;
                case "oats":
                case "rolled oats":
                    numMeasure = numeric * 90;
                    break;
                case "oatmeal":
                    numMeasure = numeric * 130;
                    break;
                case "raisins":         // DRIED FRUIT
                    numMeasure = numeric * 145;
                    break;
                case "sultanas":
                    numMeasure = numeric * 170;
                    break;
                case "prunes":
                    numMeasure = numeric * 175;
                    break;
                case "currants":
                    numMeasure = numeric * 144;
                    break;
                case "dried apricots":
                    numMeasure = numeric * 190;
                    break;
                case "glace cherries":
                    numMeasure = numeric * 210;
                    break;
                case "prawns":          // MEAT & FISH
                    numMeasure = numeric * 100;
                    break;     
                case "shrimp":
                    numMeasure = numeric * 100;
                    break;
                case "nuts":         // NUTS
                numMeasure = numeric * 140;
                    break;           
                case "chopped nuts":
                case "ground nuts":
                    numMeasure = numeric * 100;
                    break;
                case "ground almonds":
                    numMeasure = numeric * 100;
                    break;
                case "hazelnuts":
                    numMeasure = numeric * 130;
                    break;
                case "almonds":
                case "whole almonds":
                    numMeasure = numeric * 150;
                    break;
                case "walnuts":
                case "pecans":
                    numMeasure = numeric * 115;
                    break;
                case "flaked almonds":
                case "slivered almonds":
                    numMeasure = numeric * 85;
                    break;
                case "lentils":         // PULSES
                case "split peas":
                    numMeasure = numeric * 225;
                    break;
                case "haricot beans":
                    numMeasure = numeric * 200;
                    break;
                case "kidney beans":
                    numMeasure = numeric * 185; // note all pulses dried
                    break;
                case "onion":           // VEGETABLES
                case "onions":
                    numMeasure = numeric * 150;
                    break;
                case "peas":
                    numMeasure = numeric * 130;
                    break;
                case "sweetcorn":
                    numMeasure = numeric * 175;
                    break;
                case "shredded cabbage":
                case "chopped cabbage":
                case "cabbage":
                    numMeasure = numeric * 80;
                    break;
                case "beansprouts":
                    numMeasure = numeric * 60;
                    break;
                case "potatoes":
                case "raw potato":
                case "diced potato":
                    numMeasure = numeric * 150;
                    break;
                case "mashed potato":
                case "mashed potatoes":
                    numMeasure = numeric * 250;
                    break;
                case "tomatoes":
                case "tomato":
                    numMeasure = numeric * 200;
                    break;
                default:
                numMeasure = numeric * 150
                alert("Failed to recognise ingredient, conversion likely inaccurate (used default: 1 cup = 150g)")
        }
        
    }
    if (numMeasure > 999) {
        numMeasure = numMeasure / 1000;
        if (measurement === ("g")) { 
            measurement = "kg";
        } else {
            measurement = "l";
        }
    }
    let finalIngredient = numMeasure + measurement + " " + ingredient;

    let close = document.getElementsByClassName("close")
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {                         // Make 'x' button delete (practically copy pasted from https://www.w3schools.com/howto/howto_js_todolist.asp)
            let div = this.parentElement;                       
            div.style.display = "none";
        }
    }
    
    let li = document.createElement("li");              //
    let t = document.createTextNode(finalIngredient);        //      Add ingredient to recipe compiler.
    li.appendChild(t);                                  //
    document.getElementById("recipe").appendChild(li);  //

    document.getElementById("numeric").value = "";        //        Reset 'numeric' and 'ingredient' values on HTML form.
    document.getElementById("ingredient").value = "";      //

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
        }
    } 
    
    
}
    
    
    
    
    
    
    
    
    
    //let myNodeList = document.getElementsByTagName("recipe");       //
    //let i;                                                      //
    //for (i = 0; i < myNodeList.length; i++) {
        //let span = document.createElement("SPAN");              //  Creation of 'x' delete button (practically copy pasted from https://www.w3schools.com/howto/howto_js_todolist.asp)
        //let txt = document.createTextNode("\u00D7");
        //span.className = "close";                               //  MAKES EXTRA 'x' BUTTON AFTER EVERY ENTRY FOR UNKNOWN REASON
        //span.appendChild(txt);                                  //
        //myNodeList[i].appendChild(span);
    //}


    //
    //alert(finalIngredient);
