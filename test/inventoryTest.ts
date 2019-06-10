/***************************************************************************************************
 * Execution :  cmd > testInventory.js
 * purpose   : testing the inventary.js file
 * 
 * 
 * @description 
 * @file     :  inventoryTest.ts
 * @overview :  I/P -> read in JSON File 
 *              Logic -> Get JSON Object in Java or NSDictionary in iOS.Create Inventory Object from JSON. Calculate the value for every Inventory. 
 *              O/P -> Create the JSON from Inventory Object and output the JSON String 2 
 * @module   :  inventory.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  10/6/2019
 * 
 **********************************************************************************************************/




const asserrt = require('chai').assert
var fs=require('fs')
let jsonn=fs.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/inventory.json')
let jsss=JSON.parse(jsonn)
describe('inventory testing', function () {
    it('customer name is should be in string format', function () {
        var i=0
        let result = jsss.Details[i].costumerName
        asserrt.isString(result)
    })
    it('weight should be in digits', function () {
    
        let result = jsss.Details[1].weight
        asserrt.isNumber(result)
    })
    it('price should be in digits', function () {
        var i=0
        let result = jsss.Details[1].price
        asserrt.isNumber(result)
    })
    it('totalprice should be in digits', function () {
        var i=0
        let result = jsss.Details[1].totalprice
        asserrt.isNumber(result)
    })
})
