
var assertt=require('chai').assert
var fs=require('fs')
var jso=fs.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/adrressBook.json')
let js=JSON.parse(jso)
console.log(js[0])
console.log(js[0].firstname)
describe('addressbook testing testing ',function(){
    it('first name should be in string',function(){

     
     let result=js[0].firstname

        assertt.typeOf(result,'string')
        
        })
        it('idno should be in number format',function(){

          var i=0
          let result=parseInt( js[0].idno)
             assertt.isNumber(result)
             
             })
             it('state should be in string',function(){

               var i=0
               
               let result=js[0].state
               assertt.typeOf(result,'string')
                  
                  })
                  it('zip shouls be in number format',function(){

                     
                     let result=parseInt( js[0].zip)
                        assertt.isNumber(result)
                        
                        })




})
