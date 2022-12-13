let c= document.getElementById("cel");
let f= document.getElementById("fah");

c.addEventListener('input',function(){
        let cel=this.value;
        console.log(cel);
        let fah=(cel*9/5)+32;
        console.log(fah);
        f.value=fah;
        
});

f.addEventListener('input',function(){
        
});