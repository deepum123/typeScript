
/***************************************************************************************************
 * Execution :  cmd > deckOfCards.ts
 * purpose   : Write a Program ​DeckOfCards
 * 
 * 
 * @description 
 * @file     :   deckOfCards.ts
 * @overview :   To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") &
 *               Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace").
 *       
 * @module   :   DeckOfCards.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  08/6/2019
 * 
 **********************************************************************************************************/




 
 //  initialize  the suit and rank array with thier properties

    var suit = ["C", "D", "H", "S"]
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    var deck: string[] = []
    var n: number = suit.length * rank.length

    // for loop for make the pairing of suit and rank  and store in the deck array 
    for (let i = 0; i < suit.length; i++) 
    {
        for (let j = 0; j < rank.length; j++) 
            {
                deck.push(rank[j] + " " + suit[i] + " ")
            }
        }


 // this for loop is used for generate the random number and store the cards randomly in deck array

        for (let k = 0; k < n; k++)
         {
            var random = Math.floor((Math.random() * deck.length))
            var random2 = Math.floor((Math.random() * deck.length))
            var temp: any = deck[random]
            deck[k] = deck[random2]
            deck[random] = temp

        }



// this function is used to distribute the 9 cards to the 4 persons

        var arr: string[][] = [];
        for (let i: number = 0; i < 4; i++) 
        {
            arr.push([])     //arr[i]=[]//ALLcoordinates[i]=[];
            for (let j: number = 0; j < 9; j++)
             {

                arr[i][j] = deck[i + j]
            }

        }

        console.log(arr)
 
        // this is used for the displaying perpose

        var str = '';
        for (let n = 0; n < 4; n++)
         {
            var person = n + 1;
            str = str + ('[ person' + person + "] - [")
            for (let m = 0; m < 9; m++) 
            {
                var str = str + "    " + arr[n][m]

            }
            str = str + "]"
            console.log(str)
            str = ''
        }

    
    