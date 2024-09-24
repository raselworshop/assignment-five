function updateTime(){
    const now = new Date();

    const year = now.getFullYear();
    const month= (now.getMonth()+1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes=now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    return {
        date: `${year}-${month}-${day}`,
        time: `${hours}:${minutes}:${second}`
    };
}
setInterval(updateTime, 1000);


