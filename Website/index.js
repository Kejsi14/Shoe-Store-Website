const wrapper = document.querySelector(".sliderWrapper"); //kjo tregon te gjitha stilizimet e ksaj klase
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "airForce4.jpg",
            },
            {
                code: "darkblue",
                img: "blueAirForce.webp",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 220,
        colors: [
            {
                code: "red",
                img: "airjordan.jpg",
            },
            {
                code: "light blue",
                img: "blueAirJordan.webp",
            },
        ],
    },
    {
        id: 3,
        title: "Blazzers",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "blazers1.PNG",
            },
            {
                code: "green",
                img: "greenBlazera.webp",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 266,
        colors: [
            {
                code: "lightgray",
                img: "crater1.PNG",
            },
            {
                code: "black",
                img: "blackCrater.PNG",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 100,
        colors: [
            {
                code: "gray",
                img: "hippie.webp",
            },
            {
                code: "black",
                img: "blackHippie.jpg",
            },
        ],
    },
];

let choosenProduct = products[0] //kjo zgjedh productin e pare nga ato qe deklarova te product me lart qe esht air force

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color"); //kjo behet me All sps there are multiple color
const currentProductSizes = document.querySelectorAll(".size");  //and sizes

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{ //ne momentin qe shtyp nje item te navbar psh:JORDAN,do dali ne console qe kam klikuar elemntin 1.KAm 5 items dhe fillon numerimi nga indexi 0 pra 0 1 2 3 4
                                        //me kte qe sapo bera m posht kur shtyp psh JORDAN duhet te dali figura e akleteve Jordan
        //change the current slide                                
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]


        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title; //kjo ben qe ne monmentrin qe do shtyp psh hippie tek nav bari
                                                                //pak m posht te dali titulli "hippie".Vlen per cilido item qe do shtyp
        currentProductPrice.textContent = "$" + choosenProduct.price; //e njejta gje esht e ktu vtm se ktu do dali edhe cmimi i asaj aklete qe kam shtyp pervec emrit
                                                                //do dalin cmimet qe kam shenuar pak m lart,sepse me ate e kam lidhur me products
        currentProductImg.src = choosenProduct.colors[0].img;
        
        //assing new colors
        currentProductColors.forEach((color, index) => { //nk me punon si kod
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });                                                  
    });
});

currentProductColors.forEach((color, index)=>{ //kjo pjes kodi supozohet te ndyshoj ngjyren e imazhit ne momentin qe klikoj nje ngjyr
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{ //Jam tek numri i akletes.Ne momentin qe shtyp nje mase
                                            //kutia do mari ngjyr te zeze.Nese dua te shtyp nje mase tjeter
                                            //perseri kutia qe po shtyp do mari ngjyr t zeze,dhe kutia qe kisha shtypur ne fillim 
                                            //kthehet ne te bardhe.Kte gje ben ky bllok.Nuk i le te zeza kutit e shtypura
            size.style.backgroundColor = ""
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    } );
}); 


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{ /*Kto dy blloqe kodi
                                              jane kur shtyp butonin BUY NOW
                                              do dali inputi per te fur emer mbiemer etj */
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})