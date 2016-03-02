$(document).ready(function(){
    $('#keyboard-upper-container').hide();
    $('#glyph-ok').hide();
    $('#glyph-remove').hide();

$(document).keydown(function(key){
    if (key.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})

$(document).keyup(function(key) {
    if (key.which == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();       
    }
    
});


$(document).keypress(function(key) {
    console.log(key.which);
    if (key.which == 32) {
        var space = document.getElementById('spaceBar');
        var removeSpace = function() {
            space.style.backgroundColor = 'white';
        };
        space.style.backgroundColor = 'red';
        setTimeout(removeSpace, 200);
    } else {
        

    var codeID = String.fromCharCode(key.which);
    var virtualKey = document.getElementById(codeID);
    var removeColor = function() {
        virtualKey.style.backgroundColor = 'white';
    };
    if (codeID === virtualKey.id) {
        virtualKey.style.backgroundColor = 'red';
    }
    setTimeout(removeColor, 200);
    }

});

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$('#words').append(sentences[0]);
$('#words-typed').append('<input></input>');



var letterArray =[];
$(document).keypress(function(key) {
    var letterTyped = String.fromCharCode(key.which);
    letterArray.push(letterTyped);
    var x = letterArray.length -1;
    var y = letterArray.length - 49;
    var z = letterArray.length - 97;
    var a = letterArray.length - 145;
    console.log(letterArray.length);
   
    
    // var moveBlock = function () {
    //     var pixels = String(x * 17.5);
    //     $('#block').css('margin-left', pixels.concat('px'));
    // };
    // var blockBack = function() {
    //     var pixels = String(x/17.5);
    //     $('#block').css('margin-left', pixels.concat('px'));
    // }
    
    switch (x) {
        case 46:
            $('#words2').append(sentences[1]);
            $('#words').hide();
            break;
        case 97:
            $('#words3').append(sentences[2]);
            $('#words2').hide();
            break;
        case 145:
            $('#words4').append(sentences[3]);
            $('#words3').hide();
            break;
        case 193:
            $('#words5').append(sentences[4]);
            $('#words4').hide();
            break;
    }
    
    var typedLetter = letterArray[x];
    switch (typedLetter) {
        case sentences[0].charAt(x):
            $('#glyph-ok').show();
            $('#glyph-remove').hide();
            break;
        case sentences[1].charAt(y):
            $('#glyph-ok').show();
            $('#glyph-remove').hide();
            break;
        case sentences[1].charAt(z):
            $('#glyph-ok').show();
            $('#glyph-remove').hide();
            break;
        case sentences[1].charAt(a):
            $('#glyph-ok').show();
            $('#glyph-remove').hide();
            break;
        default:
            $('#glyph-remove').show(); 
            $('#glyph-ok').hide();  
             
 
    }

    
        

    
        
    
    
 
});  

 


});



 























        
    


  













    
        

   
    

