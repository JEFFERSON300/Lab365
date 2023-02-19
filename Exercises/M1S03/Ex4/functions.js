
const d1 = '2023-02-12';

let varTime = setInterval(() => {
    const d = new Date();
    const d2 = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    if (d1==d2) {
        console.log("Feliz aniversário!");
    }
    else {
        const diffInMs = new Date(d2)-new Date(d1);
        const diffInDays = diffInMs/(1000*60*60*24);
        console.log(`Falta ${diffInDays} dias`);
    }
}, 2000);


