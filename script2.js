let liveTimestamp = document.querySelector('.unixEpoch .live-timestamp');
let liveTime = document.querySelector('.unixEpoch .live-time');

let userInputField = document.querySelector('.inputContainer #input')
let convertBtn = document.querySelector('.convertBtn button')
let copyButton = document.querySelector('.copyButton')

const output = document.querySelector('.output');
const table = document.querySelectorAll('.table-data');

// live timestamp
let secondsRN;

// convertNutton
let timestamp;
let relative;

// ------------section 2---------------
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')
const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


const output2 = document.querySelector('.output-2');
let convertBtn2 = document.querySelector('.convertBtn2 button')
const table2 = document.querySelectorAll('.table2-data');
const warning = document.querySelector('.warning')

let relative2;

console.log(output2);


function timestampCount(){
    let str = new Date()
    secondsRN = Math.floor(str.getTime() / 1000)
    liveTimestamp.innerText =  secondsRN;
    liveTime.innerText = new Date().toLocaleTimeString();
};

timestampCount();

// setInterval(()=>{
//     timestampCount();
// }, 1000)



copyButton.addEventListener('click', ()=>{
    navigator.clipboard.writeText(secondsRN);
    copyButton.children[0].innerText = 'Copied!'
    setTimeout(()=>{
        copyButton.children[0].innerText = 'Copy'
    }, 3000)
});



userInputField.addEventListener('focus', ()=>{
    userInputField.nextElementSibling.classList.remove('falseUserInput');
})

convertBtn.addEventListener('click', ()=>{

    if(userInputField.value){

        let liveMilliSec = Date.now().toString()
        let liveSec = parseInt(liveMilliSec / 1000).toString().length;
        let userInput = userInputField.value;

        if(userInput.length === liveMilliSec.length){
            timestamp = Number(userInput);
        } else if(userInput.length === liveSec){
            timestamp = Number(userInput) * 1000;
        } else {
            userInputField.nextElementSibling.classList.add('falseUserInput')
            return;
        }


        output.classList.remove('display-none');
    
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
    
        console.log("timestamp: ", timestamp);
        
        
        if(diff <= 1000){
            relative = `${diff} milli seconds ago`
        } else if(diff > 1000 && diff < 60000){
            console.log(diff);
            
            relative = `${Math.floor(diff / 1000)} seconds ago`
        } else if(diff >= 60000 && diff < 3600000){
            relative = `${Math.floor((diff / 1000) / 60)} minutes ago`   
        } else if( diff >= 3600000  &&  diff < 86400000){
            relative = `${Math.floor(((diff / 1000) / 60)/60)} hours ago`
        } else {
            relative = 'Tooo long ago'
        }
        table[3].innerText = relative;

    } else {
        userInputField.focus()
    }

})


convertBtn2.addEventListener('click', ()=>{
    
    if(year.value && month.value){

        if(
            !(year.value.length === 4 && 
            (month.value <= 12 && month.value > 0) &&
            (day.value > 0 && day.value <= 31)
        )){
            return
        }

        output2.classList.remove('display-none')


        let myDate = new Date(year.value , month.value - 1, day.value, hour.value, minutes.value, seconds.value )
        
        console.log(myDate.getTime());
        
        table2[0].innerText = myDate.getTime();
        table2[1].innerText = myDate.toUTCString();
        table2[2].innerText = myDate.toString()


        let diff2 = Math.floor((Date.now() - myDate.getTime()) / 1000);

        console.log(diff2);

        if(diff2 > 1 && diff2 < 60){
            relative2 = `${diff2} seconds ago`

        } else if(diff2 >= 60 && diff2 < 3600){
            relative2 = `${ Math.floor(diff2 / 60) } minutes ago`   

        } else if( diff2 >= 3600  &&  diff2 < 86400){
            relative2 = `${Math.floor(((diff2) / 60)/60)} hours ago`

        } else if(diff2 >= 86400 ){
            relative2 = 'Tooo long ago'
        }

        table2[3].innerText = relative2;

    } else {
        console.log('bye');
        
    }
    
})






