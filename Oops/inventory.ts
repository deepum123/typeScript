/***************************************************************************************************
 * Execution :  cmd > tsc inventory.ts && node inventory.js
 * purpose   :  Create a JSON file having Inventory Details for Rice, Pulses 
 *              and Wheats with properties name, weight, price per kg
 * 
 * 
 * @description 
 * @file     :  inventory.ts
 * @overview :  I/P -> read in JSON File 
 *              Logic -> Get JSON Object in Java or NSDictionary in iOS.Create Inventory Object from JSON. Calculate the value for every Inventory. 
 *              O/P -> Create the JSON from Inventory Object and output the JSON String 2 
 * @module   :  inventory.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :   08/6/2019
 * 
 **********************************************************************************************************/





var nameRestriction = /[a-z]/ig
import * as readline from 'readline-sync'
const filestream = require('fs');

//define the class for maintain the inventary details

class inventary {
    pname: string
    weight: number
    price: number
    totalprice: number
    constructor(pname: string, weight: number, price: number, totalprice: number) {
        this.pname = pname;
        this.weight = weight;
        this.price = price;
        this.totalprice = totalprice

    }
}
// define class as name for customer name perpose
class name {
    customerName: string
    constructor(customerName: string) {
        this.customerName = customerName
    }
}
var obj = {
    Details: [] as any
}
var totallprice = 0;
var pricekg = [20, 40, 60]
console.log("..........wlecome...........")
console.log();



function entry() {
    try {
        var customerName = readline.question("enter the user name")

        console.log();
        var nn = new name(customerName);
        if (nameRestriction.test(customerName) == false) {
            console.log("invalid city name")
            throw Error
        }
        obj.Details.push(nn)
    } catch (err) {
        console.log(err)
        entry()
    }
}

//customer methods for given option to customer for enter to perchage or exits 

function costomer() {
    console.log("1.>purchage..\n.any digits for.> exit")
    console.log();
    try {
        var choice = parseInt(readline.question("enter your choice please"))
        if (nameRestriction.test(String(choice)) == true )
         {
            console.log("invalid choice")
            throw Error
        }
        switch (choice) {
            case 1: purchage();
                break;
            default: exit();
            break
        }
    } 
    catch (err) {
        console.log("plz re enter the field value")
        costomer()
    }
}
entry()
costomer()

// purchage function for purchage the rice suagr and oil

function purchage() 
{
    console.log("what do you want");
    var arr = ["rice", "sugar", "oil"]
    console.log("1.>rice......2>sugar....3>oil")
    console.log();
    try {
        var pname = parseInt(readline.question(" choice correct"))
        if (nameRestriction.test(String(pname)) == true || pname > 3 || pname < 0) {
            console.log("invalid pname name")
            throw Error
        }
        var kg = parseInt(readline.question("how many kgs you want"))
        console.log()

        if (nameRestriction.test(String(kg)) == true || kg < 0) {
            console.log("invalid kg")
            throw Error
        }
        console.log(arr[pname - 1] + "per kg is" + pricekg[pname - 1] + "....")
        console.log();

        console.log(arr[pname - 1] + " for" + kg + "kg is" + pricekg[pname - 1] * kg + "....")
        var price = (pricekg[pname - 1] * kg)
        var price1 = price;

        totallprice = totallprice + price1

        var cls = new inventary(arr[pname - 1], kg , price1, totallprice)
        //data.push(cls);
        obj.Details.push(cls)
    

        var jst = JSON.stringify(obj)
        // writefile function is used to add the data to the json file
        filestream.writeFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/inventory.json', jst)
    }
    catch (err) {
        console.log("error" + err);
        purchage()
    }
    option()
}


// viewcart  function is used for read the data from json file

function viewcart() {

    var data = filestream.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/inventory.json')
    var data1 = JSON.parse(data)
    console.log(data1)
    option()
}

// this option methos is used to purchage again or billing or view tha cart

function option() {
    console.log("do you want continue ...?")
    console.log(" press 1.>to purchage again 2.>to go viewcart  any digits for.> billing");
    console.log();
    try {
        var opt = parseInt(readline.question("enter your choice"))
        if (nameRestriction.test(String(opt)) == true) {
            console.log("invalid opt enter correct option ")
            throw Error
        }
        switch (opt) {
            case 1:
                purchage();
                break;
            case 2:
                viewcart()
                break;
            default:
                bill();
                break;
        }
    }
    catch (err) {
        console.log("error plz re enter the option " + err);
        option();

    }
}

function bill()
 {
    var data = filestream.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/inventory.json')
    var data1 = JSON.parse(data)
    console.log(data1)
}

function exit() 
{
    console.log('..........................visit again.............')
    process.exit();
}







