"use strict";
/***************************************************************************************************
 * Execution :  cmd > tsc regExp.ts && node regExp.js
 * purpose   :  Regular Expression Demonstration
 *
 *
 * @description
 * @file     :  regExp.ts
 * @overview :  Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system.
 *               your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
 *              Use Regex to replace name, full name, Mobile#, and Date with proper value
 * @module   :  regEXP.ts >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  08/6/2019
 *
 **********************************************************************************************************/
exports.__esModule = true;
var nameRestriction = /[a-z]/ig;
var numaricRestriction = /[0-9]/g;
var readline = require("readline-sync");
function regExpp() {
    try {
        var name_1 = readline.question("enter your name = ");
        if (nameRestriction.test(name_1) == false) {
            console.log("invalid  name");
            throw Error;
        }
        var fullname = readline.question('enter your full name = ');
        if (nameRestriction.test(fullname) == false) {
            console.log("invalid full name ");
            throw Error;
        }
        var mobile = readline.question("enter the mobile number = ");
        if (numaricRestriction.test(mobile) == false || (mobile.length != 10)) {
            console.log("invalid zip name");
            throw Error;
        }
        console.log();
        console.log(".....................");
        regExp(name_1, fullname, mobile);
    }
    catch (err) {
        console.log(err + "youb entered wrong data plz re enter the all details ");
        regExpp();
    }
}
regExpp();
function regExp(name, fullname, mobile) {
    var str = " Hello <<name>>, We have your full name as <<full name>> in our system.\n your contact number is 91-xxxxxxxxxx.\n Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016. ";
    str = str.replace('<<name>>', name);
    str = str.replace('<<full name>>', fullname);
    str = str.replace('xxxxxxxxxx', mobile);
    var date = new Date().toLocaleDateString();
    str = str.replace('01/01/2016', date);
    console.log(str);
}
