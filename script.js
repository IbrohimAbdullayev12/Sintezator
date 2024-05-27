let target_note_id = ""


document.addEventListener('keydown', function(event) {
    if (event.key.length == 1) {
        
        clc_note_snd = new Audio('sounds/sintezator/'+event.key+'.mp3');
        if(event.key=="h" || event.key=="j" || event.key=="b" || event.key=="n"  || event.key=="m"){
            clc_note_snd = new Audio('sounds/sintezator/'+event.key+'.wav');
        }
        clc_note_snd.play()

        target_note_id = document.getElementById("button_" + event.key)
        if(target_note_id.className=="majorkey"){
            target_note_id.style.backgroundColor = 'lightgray';
            target_note_id.style.borderBottom = '1px solid black';
        }
        else if(target_note_id.className=="minorkey"){
            target_note_id.style.backgroundColor = 'gray';
            target_note_id.style.borderBottom = '1px solid black';
        }
        console.log(event.key)
    } else {
        console.log('Can not do this =(')
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key.length == 1) {
        target_note_id = document.getElementById("button_" + event.key)
        
        if(target_note_id.className=="majorkey"){
            target_note_id.style.backgroundColor = 'white';
            target_note_id.style.borderBottom = '10px solid #242424';
        }
        else if(target_note_id.className=="minorkey"){
            target_note_id.style.backgroundColor = 'black';
            target_note_id.style.borderBottom = '10px solid lightgray';
        }
        console.log(event.key + "!")
    } else {
        console.log('Can not do this =(')
    }
});

function playClcSnd() {

    target_note_id = event.target.id;

    console.log(target_note_id[2])
    clc_note_snd = new Audio('sounds/sintezator/'+target_note_id[7]+'.mp3');
    if(target_note_id[7]=="h" || target_note_id[7]=="j" || target_note_id[7]=="b" || target_note_id[7]=="n"  || target_note_id[7]=="m"){
        clc_note_snd = new Audio('sounds/sintezator/'+target_note_id[7]+'.wav');
    }
    clc_note_snd.play()

    if(target_note_id.className=="majorkey"){
        target_note_id.style.backgroundColor = 'lightgray';
        target_note_id.style.borderBottom = '1px solid black';
    }
    else if(target_note_id.className=="minorkey"){
        target_note_id.style.backgroundColor = 'gray';
        target_note_id.style.borderBottom = '1px solid black';
    }
}