const kits = ["crash","kick","snare","tom"];

const containerEl = document.querySelector(".container");

kits.forEach(kit=>{
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)"
  containerEl.appendChild(btnEl);
  const audioEL = document.createElement("audio");
  audioEL.src = "sounds/" + kit + ".mp3"
  containerEl.appendChild(audioEL);
  btnEl.addEventListener("click", ()=>{
    audioEL.play();
  })
  window.addEventListener("keydown", (event)=>{
    if(event.key === kit.slice(0,1)){
      audioEL.play()
      btnEl.style.transform = "scale(.9)";
      setTimeout(()=> {
        btnEl.style.transform = "scale(1)";
      }, 100);
    };
  })
});

