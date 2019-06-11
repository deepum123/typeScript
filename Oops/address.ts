/***************************************************************************************************
 * Execution :  cmd > tsc address.ts && node address.js
 * purpose   : User Interface for a Simple Address Book
 * 
 * 
 * @description 
 * @file     :  address.ts
 * @overview :  The software to be designed is a program that can be used to maintain an address book. An address book
                holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                phone number.
 *       
 * @module   :  address.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  08/06/2019
 * 
 **********************************************************************************************************/






import * as read from 'readline-sync'
   // Reg exp for validation of user inputs 
var nameRestriction = /[a-z]/ig


const filestream = require('fs')

//define the class name as addressss and properties for details of person

class addressss {
    firstname: string
    lastname: string
    idno: number

    state: string
    city: string
    zip: number
    phno: number
    constructor(firstname: string, lastname: string, idno: number, state: string, city: string, zip: number, phno: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idno = idno
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.phno = phno;
    }
}



function options() {
    try{
    console.log("enter 1..for add address..\n..2> edit the  existing address.\n..3>delete address..\n.4..sort...\n.any digits for..exit")
    var choice = parseInt(read.question('enter your choice '))
    if (nameRestriction.test(String(choice)) == true || choice < 0) {
        console.log("invalid choice ")
        throw Error
    }
    switch (choice) {
        case 1:
            addperson()
            //  options()
            break

        case 2: var idno: number = parseInt(read.question("enter your id number"))
            updateAddress(idno)
            break;

        case 3: deletee()
            break

        case 4: sort()
            break

        case 5:

            console.log("...........exit.............")
            process.exit()
            break
    }}
    catch(err){
        console.log("plz re enter the details")
    }
}

options()

// addperson methos is used to add new person to the address book 

function addperson() {

    try {
        var firstname: string = read.question('enter the first name')
        if (nameRestriction.test(firstname) == false ) {
            console.log("invalid first name")
            throw Error
        }
        var lastname: string = read.question('enter the last name')
        if (nameRestriction.test(lastname) == false ) {
            console.log("invalid second name")
            throw Error
        }
        var idno  = parseInt( read.question('enter the idno'))
        if (nameRestriction.test(String( idno)) === true) {
            console.log("invalid idno name")
            throw Error
        }
        console.log()

        console.log(".........residence details.........")
        var state: string = read.question('enter the state')
        if (nameRestriction.test(state) == false ) {
            console.log("invalid state name")
            throw Error
        }

        var city: string = read.question('enter the city name')
        if (nameRestriction.test(city) == false ) {
            console.log("invalid city name")
            throw Error
        }
        var zip = parseInt( read.question('enter the zip code plz'))

        if (nameRestriction.test(String( zip)) == true || String( zip).length!= 6) {
            console.log("invalid zip ")
            throw Error
        }

        var phno = parseInt( read.question('enter the phone number'))
        if (nameRestriction.test(String( phno) )== true ||String( phno).length!=10 ) {
            console.log("invalid phno ")
            throw Error
        }

        var address = new addressss(firstname, lastname, idno, state, city, zip, phno)
        //  console.log(address)
        var r = readfile()
        r.push(address)

        writefile(r)
    } catch (err) {
        console.log("plz re enter all the details again !!!!!!!!!!! ")
        addperson()
    }
}


//delete function is used to delete the particular person address from address book 

function deletee() {
    try {
        var idn =parseInt( read.question("enter the id number"))
        if (nameRestriction.test(String( idn)) === false) {
            console.log("invalid idno name")
            throw Error
        }

        var addressjson = readfile();

        var f = 0
        for (const key in addressjson) {
            if (addressjson[key].idno == idn)
                var f = 1;

            var index = addressjson.indexOf(idn)
            addressjson.splice(index, 1)


            writefile(addressjson);
        }

        if (f == 0) {
            console.log("your id is not present")
            deletee()
        }
    } catch (err) {
        console.log(err +" re enter the idno ")
        deletee()
    }
}

// sorting the address book data based on person idno 

function sort() {
    var addressjson = readfile();
    addressjson.sort(function (a: any, b: any) {
        return a.idno - b.idno
    })

    writefile(addressjson)
    console.log("your file is sorted")
}


// readfile function is used for read the data from json file

function readfile() {

    var data = filestream.readFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/adrressBook.json')
    var data1 = JSON.parse(data)
    console.log(data1)
    return data1
}

// writefile function is used to add the data to the json file

function writefile(data: any) {
    var data1 = JSON.stringify(data)
    filestream.writeFileSync('/home/admin1/Desktop/TypeScripttt/jsonFiles/adrressBook.json', data1)

}

//update method is used to update the address of particular person in the address book

function updateAddress(idno: number)
 {
    try{
    var data = readfile();
    for (let index = 0; index < data.length; index++) {

        if (idno == data[index].idno) {
            var value = parseInt(read.question("enter the 1>for change the state name \n 2>for change the city name \n 3>for change the zip code of city \n4>for change the phone number "))
            if (nameRestriction.test(String(value)) == true )
            {
               console.log("invalid choice")
               throw Error
           }


            switch (value) {
                case 1: updateState(index)
                    break;
                case 2: updateCity(index)
                    break;
                case 3: updateZip(index)
                    break;
                case 4: updatePhone(index)
                    break;

                default:
                    break;
            }
        }
    }
    }catch(err){
        console.log(" plz re enter the option")
    }
//updateState function is used to update the state name of particular person 
    function updateState(index: number) {
        var newstate = read.question('enter the new state name')
        data[index].state = newstate
        writefile(data)

    }
//updateCity function is used to update the city of perticular person
    function updateCity(index: number) {
        var city = read.question('enter the new city name')
        data[index].state = city
        writefile(data)

    }
    // updateZip function is used to update the zip code of the perticular person

    function updateZip(index: number) {
        var Zip = parseInt(read.question('enter the new Zip code'))
        data[index].state = Zip
        writefile(data)

    }
    //update function is used to update the phone number of perticular person
    
    function updatePhone(index: number) {
        var Phone = parseInt(read.question('enter the new phone number'))
        data[index].state = Phone
        writefile(data)

    }


}



