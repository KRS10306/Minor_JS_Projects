const miliseconds = document.getElementById('second-hand')
let millisec_count = new Date().getMilliseconds()

const seconds = document.getElementById('second-hand')
let sec_count = (new Date().getSeconds())*6 + (millisec_count/1000)
// let sec_count = 0

const minutes = document.getElementById('minute-hand')
let minutes_count = (((new Date().getMinutes())*6) + ((sec_count)/60))

const hours = document.getElementById('hour-hand')
let hours_count = ((((new Date().getHours())%12)*30) + (minutes_count/12))


seconds.style.transform = `translate(-50%, 0) rotate(${sec_count}deg)`;
minutes.style.transform = `translate(-50%, 0) rotate(${minutes_count}deg)`;
hours.style.transform = `translate(-50%, 0) rotate(${hours_count}deg)`;
console.log(new Date().getSeconds())
console.log(new Date().getMinutes())
console.log(new Date().getHours())


setInterval(() => {
    sec_count = (sec_count + 0.2) % 360;
    seconds.style.transform = `translate(-50%, 0) rotate(${sec_count}deg)`;
}, (1000/30));

setInterval(() => {
    minutes_count = (minutes_count + 0.2) % 360;
    minutes.style.transform = `translate(-50%, 0) rotate(${minutes_count}deg)`;
    // console.log(sec_count)
    // console.log(minutes_count)
    // console.log(hours_count)
}, 2000);

setInterval(() => {
    hours_count = (hours_count + 0.2) % 360;
    hours.style.transform = `translate(-50%, 0) rotate(${hours_count}deg)`;
}, 288000);





//GMT
let london = new Date().toGMTString()

// london[17]

console.log(london)
let ti_h = ''

for (let i = 17; i <= 18 ; i++) {
        ti_h += london[i]
}
let t_h = parseInt(ti_h)
console.log(t_h)

let ti_m = ''
for (let i = 20; i <= 21 ; i++) {
    ti_m += london[i]
}
let t_m = parseInt(ti_m)
console.log(t_m)

let ti_s = ''
for (let i = 23; i <= 24 ; i++) {
    ti_s += london[i]
}
let t_s = parseInt(ti_s)
console.log(t_s)