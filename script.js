
let liveTimestamp = document.querySelector('.unixEpoch .live-timestamp');
let liveTime = document.querySelector('.unixEpoch .live-time');

let userInputField = document.querySelector('.inputContainer #input')
let convertBtn = document.querySelector('.convertBtn button')
let copyButton = document.querySelector('.copyButton')

const output = document.querySelector('.output');
const table = document.querySelectorAll('.table-data');

// live timestamp
let secondsRN;

// convert Button
let timestamp;
let relative;

setInterval(()=>{
    let str = new Date()
    secondsRN = Math.floor(str.getTime() / 1000)
    liveTimestamp.innerText =  secondsRN;
    liveTime.innerText = new Date().toLocaleTimeString();
}, 1000)

copyButton.addEventListener('click', ()=>{
    navigator.clipboard.writeText(secondsRN);
    copyButton.children[0].innerText = 'Copied!'
    setTimeout(()=>{
        copyButton.children[0].innerText = 'Copy'
    }, 3000)
});

//   

convertBtn.addEventListener('click', ()=>{

    if(userInputField.value){
        output.classList.remove('display-none');

        let liveMilliSec = Date.now().toString()
        let liveSec = parseInt(liveMilliSec / 1000).toString().length;
    
        let userInput = userInputField.value;
     
    
        if(userInput.length === liveMilliSec.length){
            timestamp = Number(userInput);
        } else if(userInput.length === liveSec){ 
            timestamp = Number(userInput) * 1000;
        }
    
        let myDate = new Date(timestamp);
        
        // format
        if(userInput.length === liveMilliSec.length){
            table[0].innerText = 'Milliseconds'
        } else if(userInput.length === liveSec){
            table[0].innerText = 'Seconds'
        } else {
            table[0].innerText = 'Format not supported'
        }
    
        // GMT
        console.log(myDate);
        
        table[1].innerText = myDate.toUTCString();
    
        // Your Time Zone
        table[2].innerText = myDate.toString();
    
        // Relative
        let diff = Date.now() - timestamp
    
        if(diff <= 1000){
            relative = `${diff} milli seconds ago`
        } else if(diff > 1000 && diff < 60000){
            relative = `${Math.trunc(diff / 1000)} seconds ago`
        } else if(diff >= 60000 && diff < 3600000){
            relative = `${Math.trunc((diff / 1000) / 60)} minutes ago`   
        } else if( diff >= 3600000  &&  diff < 86400000){
            relative = `${Math.trunc(((diff / 1000) / 60)/60)} hours ago`
        }    
        table[3].innerText = relative;

    } else {
        userInputField.focus()
    }


})





