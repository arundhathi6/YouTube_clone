let product_main = document.getElementById("product_main");

let key="AIzaSyBeBOlBeIowyQVCj5-2lUgnrZLu8UqbJHk";
import nav from "./nav.js";
console.log(nav());
document.getElementById("nav_bar").innerHTML = nav();

let search_button = document.getElementById("search_button")

search_button.addEventListener("click", buttonFn )

function buttonFn() {
    let search_input = document.getElementById("search_input").value;
    let url1 = `https://youtube.googleapis.com/youtube/v3/search?q=${search_input}&key=${key}&type=video&maxResults=10&part=snippet`;

    
    enterSearch1(url1);

}

let enterSearch1 =(url) =>{

        
    fetch(url).then(res => {
         return res.json()
    })
        .then((res)=>{
            console.log("inside then",res)
            appendDataFn(res.items)
        })
    
       
      
    }

//let user = JSON.parse(localStorage.getItem("data"));
// if (user) {
//     document.getElementById("signup").textContent = user.name;

//     let proimg1 = document.getElementById("profile_img");
//     proimg1.textContent = user.name[0];
//     proimg1.style.textTransform = "uppercase";
//     proimg1.style.paddingLeft = "13px";
//     // proimg1.style.fontSize="20px"
    
// } 
function appendDataFn(data) {
 product_main.innerHTML=null
  console.log(data);
  data.map((el) => {
    let div1 = document.createElement("div");
      div1.setAttribute("class", "div_one");
      div1.setAttribute("class", "div1class")
      if (el.id.videoId) {
        var el = {
            id: el.id.videoId,
            snippet: el.snippet
        }
          
    } else {
        var el = {
            id: el.id,
            snippet: el.snippet
        }
    }
      div1.addEventListener("click", () => {
         
          div1Fn(el)


      })

    let img1 = document.createElement("img");
    // img1.src = el.src.portrait;
    img1.src = el.snippet.thumbnails.medium.url;

    div1.append(img1);
    product_main.append(div1);
  });
}

async function imgurFn() {
  let res = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,id&chart=mostPopular&maxResults=60&regionCode=IN&key=AIzaSyBeBOlBeIowyQVCj5-2lUgnrZLu8UqbJHk"
  );
  let data = await res.json();
 
    //for (let i = 1; i < 2; i++){
        appendDataFn(data.items);
    //}

}
function div1Fn(el) {
    
    console.log(el);
  
    localStorage.setItem("display", JSON.stringify(el));
    window.location.href="display.html";
}

function signupFn() {
    window.location.href="signup.html";
}
imgurFn();
