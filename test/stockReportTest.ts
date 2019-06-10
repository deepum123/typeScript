
var expect = require('chai').expect;

var fs=require('fs')
let json=fs.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/stockReport.json')
let jss=JSON.parse(json)
console.log("stock report testing")
describe('stock report testing ',function(){
    it('numberof shares should be in numbers',function(){
     var i=0
     let result=jss[0].StockNames
     expect(result).to.be.a('string');
        
        })
        it('numberof shares should be in numbers',function(){

            var i=0
            let result=parseInt( jss[0].NumberofShare)
            expect(result).to.be.a('number');
               
               })
               it('numberof shares should be in numbers',function(){

                var i=0
                let result=parseInt( jss[0].SharePrice)
                expect(result).to.be.a('number');
                   
                   })
})