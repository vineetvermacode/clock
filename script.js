setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotaion=30*htime+mtime/2;
    mrotaion=6*mtime;
    srotaion=6*stime;
    hour.style.transform=`rotate(${hrotaion}deg)`;
    minute.style.transform=`rotate(${mrotaion}deg)`;
    second.style.transform=`rotate(${srotaion}deg)`;
    hrs.innerHTML=htime>12?(""+htime-12):(""+htime);
    min.innerHTML=(mtime<10?"0":"")+mtime;
    sec.innerHTML=(stime<10?"0":"")+stime;
},1000);