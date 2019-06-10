"use strict";
/***************************************************************************************************
 * Execution :  cmd > stockReport.ts
 * purpose   : Write a program to read in Stock Names, Number of Share, Share Price.
 *            Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *
 * @description
 * @file     :  stockReport.ts
 * @overview :  I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
 *              Logic -> Calculate the value of each stock and the total value
 *              O/P -> Print the Stock Report.
 * @module   :  stockReport.ts >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  08/6/2019
 *
 **********************************************************************************************************/
exports.__esModule = true;
var nameRestriction = /[a-z]/ig;
var filestream = require('fs');
var readline = require("readline-sync");
var stockk = /** @class */ (function () {
    function stockk(StockNames, NumberofShare, SharePrice, totalprice) {
        this.StockNames = StockNames;
        this.NumberofShare = NumberofShare;
        this.SharePrice = SharePrice;
        this.totalprice = totalprice;
    }
    return stockk;
}());
var obj = {
    stock: []
};
function user() {
    try {
        var stock = parseInt(readline.question('how many stocks you want'));
        if (nameRestriction.test(String(stock)) == true || stock < 0) {
            console.log("invalid stock name");
            throw Error;
        }
        Store(stock);
    }
    catch (err) {
        console.log(err + "plz re enter the stock name");
        user();
    }
}
user();
function Store(stock) {
    try {
        var c = 0;
        while (c < stock) {
            var StockNames = readline.question('enter the stock name ');
            if (nameRestriction.test(StockNames) == false) {
                console.log("invalid StockName");
                throw Error;
            }
            var NumberofShare = parseInt(readline.question('enter the numberof shares'));
            if (nameRestriction.test(String(NumberofShare)) == true || NumberofShare < 0) {
                console.log("invalid plz enter the digits  ");
                throw Error;
            }
            var SharePrice = parseInt(readline.question('enter the share price '));
            if (nameRestriction.test(String(SharePrice)) == true || SharePrice < 0) {
                console.log("invalid plz enter the digits  ");
                throw Error;
            }
            console.log();
            var totalshareprice = NumberofShare * SharePrice;
            var st = new stockk(StockNames, NumberofShare, SharePrice, totalshareprice);
            // data.push(st)
            var r = readfile();
            r.push(st);
            //  obj.stock.push(st)
            writefile(r);
            console.log(" data added");
            c++;
        }
    }
    catch (err) {
        console.log(err);
        console.log("error occured plz re enter the details");
        console.log();
        Store(stock);
    }
}
// writefile function is used to add the data to the json file
function writefile(data) {
    var data1 = JSON.stringify(data);
    filestream.writeFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/stockReport.json', data1);
}
// readfile function is used for read the data from json file
function readfile() {
    var data2 = filestream.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/stockReport.json');
    var data3 = JSON.parse(data2);
    console.log(data3);
    return data3;
}
// option function for print out the data stored in the json file or exit from the process
function option() {
    try {
        var choice = parseInt(readline.question('enter the 1 for print out and any digits  for exit'));
        if (nameRestriction.test(String(choice)) == true) {
            console.log("invalid opt enter correct option ");
            throw Error;
        }
        switch (choice) {
            case 1:
                printout();
                break;
            default:
                exit();
                break;
        }
    }
    catch (err) {
        console.log(err + "invalid .... plz enter the digits ");
        option();
    }
}
option();
// print out mthod for print out the all stocks in the json file
function printout() {
    readfile();
}
function exit() {
    console.log("................visit again.................");
    process.exit();
}
