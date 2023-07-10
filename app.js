const endDate = "16 March 2024 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000;
    
    // conversion
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60);


}
clock();             //initial call
setInterval(
    () => {
        clock();     //call every second
    },
    1000
)