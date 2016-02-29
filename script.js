$(document).ready(function(){
    $('#keyboard-upper-container').hide();


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
    var glyphOK = $('<span></span>').addClass('glyphicon glyphicon-ok');
    var glyphRemove =$('<span></span>').addClass('glyphicon glyphicon-remove');
    var letterTyped = String.fromCharCode(key.which);
    letterArray.push(letterTyped);
    console.log(letterArray);
    console.log(letterArray.length); 
    var x = letterArray.length -1;
    var y = letterArray.length - 49;
    if (letterArray[x] === sentences[0].charAt(x)) {
        console.log('match');
        $('.glyph-container').append(glyphOK);
    } else {
        $('.glyph-container').append(glyphRemove);
    }
    if (x == 48) {
        $('#words').hide(sentences[0]);
        $('#words2').append(sentences[1]);
    }

    
        
    
    
 
});  

 


});



 























        
    


  













    
        

   
    

