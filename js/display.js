import nav from "../js/nav.js";
console.log(nav());
document.getElementById("nav_bar").innerHTML = nav();
let user = JSON.parse(localStorage.getItem("data"));
  let key = "AIzaSyBeBOlBeIowyQVCj5-2lUgnrZLu8UqbJHk";
 

  let search_button = document.getElementById("search_button");

  search_button.addEventListener("click", buttonFn);

  function buttonFn() {
    let search_input = document.getElementById("search_input").value;
    let url1 = `https://youtube.googleapis.com/youtube/v3/search?q=${search_input}&key=${key}&type=video&maxResults=10&part=snippet`;

    enterSearch1(url1);

    // console.log(search_input);
  }

  let enterSearch1 = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("inside then", res);
        appendDataFn(res.items);
      });
  };

//   if (user) {
//     document.getElementById("signup").textContent = user.name;

//     let proimg1 = document.getElementById("profile_img");
//     proimg1.textContent = user.name[0];
//     proimg1.style.textTransform = "uppercase";
//     proimg1.style.paddingLeft = "13px";
    
//   }

  let video_data = JSON.parse(localStorage.getItem("display"));
  // console.log("vvvvvvv",video_data)
  console.log("video_data:", video_data);
  let video_div = document.getElementById("video_details");
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${video_data.id}`;//get from youtube copy past
  iframe.width = "96%";
  iframe.height = "600px";
  iframe.setAttribute("allowfullscreen", true);
  let title = document.createElement("h2");
  title.innerText = video_data.snippet.title;
  let channel_title = document.createElement("span");
  channel_title.innerText =`channel: ${video_data.snippet.channelTitle}`;
  channel_title.style.backgroundColor="rgb(56,215,171)"
  channel_title.style.color="white"
  let publishedAt = document.createElement("span");
  publishedAt.innerText =`publishedAt: ${video_data.snippet.publishedAt}`;
  publishedAt.style.backgroundColor="red"
  publishedAt.style.color="white"

  
video_div.append(title,channel_title,publishedAt,iframe);

function  show_overflows(data){
  console.log("inside",data)
  let videos_overflow = document.getElementById("videos_overflow");
  data.map((el)=>{

  var main_div1 = document.createElement("div")
  main_div1.setAttribute("id","mainDiv")

var small_div1 = document.createElement("div")
  small_div1.setAttribute("id","smallDiv")
  let img1 = document.createElement("img");
  img1.src = el.snippet.thumbnails.medium.url;
  img1.style.width="100%";
  img1.style.height = "100%";
  small_div1.append(img1)
  var big_div1 = document.createElement("div");
  big_div1.setAttribute("id","bigDiv")
  var desc = document.createElement("p")
  desc.innerText = el.snippet.title;
  desc.style.color="black";
  big_div1.append(desc)
  main_div1.append(small_div1,big_div1)
  videos_overflow.append(main_div1)
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
    main_div1.addEventListener("click", () => {
         
      div1Fn(el)


      })

  })


}

function div1Fn(el) {
    
    console.log(el)
   
    
    localStorage.setItem("display", JSON.stringify(el))
    window.location.href="display.html"
}

async function video_flows() {
  let res = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,id&chart=mostPopular&maxResults=60&regionCode=IN&key=AIzaSyBeBOlBeIowyQVCj5-2lUgnrZLu8UqbJHk"
  );
  let data = await res.json();
  show_overflows(data.items)
 
}
video_flows()
