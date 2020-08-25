console.log("Javascript loaded successfully for ImperialToMetric")

function convert(numeric, measurement, ingredient) {
    numeric = parseInt(numeric);
    String(measurement, ingredient);
    let numMeasure = 0;
    if (typeof numeric != 'number') {
    alert("Numeric value failed " + numeric);
    } else { 
    switch(measurement) {
        case "cupW":
            numMeasure = numeric * 125;
            measurement = "g";
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
        alert("Measurement failed - numeric: " + numeric + " - Measurement: " + measurement); // Probably end the program here if no unit of measurement to convert
        }
    }
    numMeasure = Math.round(numMeasure);
    if (measurement === "cupW") {
        switch(ingredient) {
                case "flour":               // FLOUR
                    break;
                case "cornflour":
                    break;
                case "breadcrumbs":
                    break;
                case "cheese":              // CHEESE
                case "grated cheese":
                case "grated cheddar":
                case "grated parmesan":
                    break;
                case "cream cheese":
                    break;
                case "sugar":               // SUGARS
                case "caster sugar":
                case "granulated sugar":
                    break;
                case "icing sugar":
                case "confectioner's sugar":
                    break;
                case "brown sugar":
                case "demerara sugar":
                    break;
                case "muscovado sugar":
                case "dark brown sugar":
                    break;
                case "butter":              // FATS
                case "margarine":
                    break;
                case "honey":               // SYRUPS
                case "molasses":
                case "treacle":
                case "syrup":
                case "golden syrup":
                    break;
                case "rice":                // RICE & GRAINS
                    break;
                case "cooked rice":
                    break;
                case "semolina":
                case "couscous":
                case "ground rice":
                    break;
                case "oats":
                case "rolled oats":
                    break;
                case "oatmeal":
                    break;
                case "raisins":         // DRIED FRUIT
                case "sultanas":
                case "prunes":
                    break;
                case "currants":
                    break;
                case "dried apricots":
                    break;
                case "glace cherries":
                    break;
                case "prawns":          // MEAT & FISH
                case "shrimp":
                    break;
                case "beef":
                case "lamb":
                case "pork":
                case "chicken":
                    break;
                case "nuts":            // NUTS
                case "chopped nuts":
                case "ground nuts":
                    break;
                case "hazelnuts":
                case "almonds":
                case "whole almonds":
                    break;
                case "walnuts":
                case "pecans":
                    break;
                case "flaked almonds":
                    break;
                case "lentils":         // PULSES
                case "split peas":
                    break;
                case "haricot beans":
                    break;
                case "kidney beans":
                    break;
                case "onion":           // VEGETABLES
                case "onions":
                    break;
                case "peas":
                case "sweetcorn":
                    break;
                case "cabbage":
                    break;
                case "beansprouts":
                    break;
                case "potatoes":
                    break;
                case "mashed potato":
                case "mashed potatoes":
                    break;
                case "tomatoes":
                    break;
                default: 
                alert("Failed to recognise ingredient")
        }
        
    }
    if (numMeasure > 1000) {
        numMeasure = numMeasure / 1000;
        if (measurement === ("g")) { 
            measurement = "kg";
        } else {
            measurement = "l";
        }
    }
    let finalIngredient = numMeasure + measurement + " " + ingredient;
    alert(finalIngredient);
    return finalIngredient;

}