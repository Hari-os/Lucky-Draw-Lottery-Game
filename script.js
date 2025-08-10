const click_btn=document.getElementById("hello");
const shown_button=document.getElementById("number_shown");
const lotter_box=document.getElementById("lotter-box");
const tick=new Audio('winningSound.wav');//it is from mixkit website
const win=new Audio('tap.wav');//it is from mixkit website
const gifts=["Smartphone", "Gift Card", "Laptop", "Tablet", "Smartwatch", "Headphones", "Wireless Earbuds", "Bluetooth Speaker", "Power Bank", "Portable Charger", "Designer Handbag", "Wristwatch", "Sunglasses", "Perfume", "Luxury Candle", "Book Bundle", "Coffee Maker", "Gourmet Food Basket", "Wine and Cheese Set", "Spa Day", "Massage Chair", "Fitness Tracker", "Yoga Mat", "Personalized Journal", "Photo Album", "Customized Phone Case", "Gaming Console", "Virtual Reality Headset", "Drone", "Camera", "Binoculars", "Luxury Throw Blanket", "Premium Bedding Set", "High-Quality Cookware", "Kitchen Appliance", "Gourmet Cookbook", "Wine Bottle", "Champagne Flutes", "Art Print", "Customized Mug", "Scented Diffuser", "Essential Oil Set", "Aromatherapy Kit", "Cozy Slippers", "Plush Robe", "Soft Blanket", "Fitness Classes", "Personalized Water Bottle", "Bike Helmet", "Skateboard",
]
click_btn.addEventListener("click",function(){
    for(let i=1;i<=50;i++){
        document.getElementById(i).classList.remove("winning-box");
    }
    shown_button.textContent="please wait.....";
    // setTimeout(function(){ 
        // let random_number=Math.random()*50;
        // let floor_number=Math.floor(random_number)+1;
        // const gift_name=gifts[floor_number-1];
       
        // shown_button.textContent=floor_number;   
        // shown_button.textContent=`you got a number "${floor_number}" .you won the gift "${gift_name}"`; 
        // document.getElementById(floor_number).classList.add('winning-box');   
    // },5000);

    let secscount=0;
    const intervalId=setInterval(function(){
        tick.pause();
        tick.currentTime=0;
        tick.play();
        secscount++;
        const randomBox=Math.floor(Math.random()*50)+1;
        for(let i=1;i<50;i++){
            if(i===randomBox){
                document.getElementById(i).classList.add("highlighteBox");
            }else{
                document.getElementById(i).classList.remove("highlighteBox");
            }
        }
        if(secscount===5){
            let random_number=Math.random()*50;
            let floor_number=Math.floor(random_number)+1;
            const gift_name=gifts[floor_number-1];
            shown_button.textContent=floor_number;   
            shown_button.textContent=`you got a number "${floor_number}" .you won the gift "${gift_name}"`;
            document.getElementById(randomBox).classList.remove("highlighteBox"); 
            document.getElementById(floor_number).classList.add('winning-box');
            win.pause();
            win.currentTime=0;
            win.play(); 
            clearInterval(intervalId);
        }
    },1000);
    
});
 
gifts.forEach(function(value,i){
    // <div class="box">Smartphone</div>
    const element_box=`<div class="box" id=${i+1}>${i+1}. ${value}</div>`;
    lotter_box.insertAdjacentHTML("beforeend",element_box); 
});
