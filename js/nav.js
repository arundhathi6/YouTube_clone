function nav() {
  
    return (` 
    <i id="menu" class="material-icons">menu</i>
    <div id="youtube_logo">
    <img
      width="100%"
      height="100%"
      src="../images/yt logo.png"
    />
  </div>
 
  <input id="search_input" type="text" placeholder="YouTube" />
  <span id="search_button" class=" search_btn"><i class="fas fa-search"></i></span>
  <span class="voice"><i class="fas fa-microphone"></i></span>

  <div id="font_icons">
  <i class="material-icons">videocam</i>
          <i class="material-icons">apps</i>
          <i class="material-icons">notifications</i>
          <i class="material-icons display-this">account_circle</i>
  </div>
 

 `)
}


export default nav;