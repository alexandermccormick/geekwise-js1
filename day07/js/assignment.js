// var charNum = document.getElementById('charNum');
// var keyNum = document.getElementById('keyNum');
// var type = document.getElementById('type');
// var label = document.getElementById('label');
// var btnHold = document.getElementById('btnHold');
// var holdLbl = document.getElementById('holdLbl');
// var btnLbl = document.getElementById('btnLbl');
// var btnPress = document.getElementById('btnPress');
// var checkHold = document.getElementById('checkHold');
// var btnBox = document.getElementById('btnBox');

window.addEventListener('keypress', function(e) {
    let boolKeys = [e.altKey, e.ctrlKey, e.metaKey, e.shiftKey];
    let boolKeysName = ['Alt', 'Ctrl', 'Meta', 'Shift', ];
    charNum.textContent = e.charCode;
    keyNum.textContent = e.keyCode;
    label.textContent = 'BUTTON PRESSED';
    // checkHold.classList.add('btn');
    // btnBox.classList.add('btn');
    if (e.charCode > 0) {
        type.textContent = 'Character Code';
    } else if (e.keyCode > 0) {
        type.textContent = 'Key Code';
    }

    btnPress.textContent = e.key;
    // let boolKeys = [e.altKey, e.ctrlKey, e.metaKey, e.shiftKey];
    for (var i = 0; i < boolKeys.length; i++) {
        console.log(boolKeys[i]);
        if (boolKeys[i] == true) {
            // let boolKeysName = ['Alt', 'Ctrl', 'Meta', 'Shift'];
            checkHold.style.display = 'block';
            console.log(boolKeysName[i]);
            console.log(btnHold);
            btnHold.textContent = boolKeysName[i];
            holdLbl.textContent = '(hold)';
        } else {
            checkHold.style.display = 'none';
        }
    }
});

// window.addEventListener('keydown', function(evt) {
//     let i = 0;
//     while ()
// });