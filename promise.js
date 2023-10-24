// task 
// 5 deqiqeye kimi isleyen saniye olcen yazin. onluq eded olduqda qarsisina 0 elave edib console cixardin.
// vaxt sayimi kodun run olunandan sonra baslamalidi.
// hal-hazirda vaxt 19:10:05 dir. Sayim 10:05 den baslayib 15:05 de bitmelidir.

let limit=15
let t=0


let date=new Date
console.log(date.getHours(),":",date.getMinutes(),":",date.getSeconds())
let hour=date.getHours ()
let minute = date.getMinutes()
let second = date.getSeconds()
 let interval=setInterval( function()  {
    t++

    if (second < 59) {
        second +=1
    }
    else {
        minute +=1
        second =0
     }
     if(t===limit){
            clearInterval(interval);
        }
    console.log( hour + ":" + minute + ":" + second)
},1000)