# functionize-minecraft-fishing-start
Start code for CS20 Functionize Minecraft Fishing Assignment

function catchFish() {
  if (character === "steve") {
    // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
    let randNum = Math.random();
    if (randNum < 0.7) {
      numCod++;
      codSpanEl.innerHTML = numCod;
      resultImgEl.src = "img/Raw-Cod.png";
    } else if (randNum < 0.9) {
      numSalmon++;
      salmonSpanEl.innerHTML = numSalmon;
      resultImgEl.src = "img/Raw-Salmon.png";
    } else if (randNum < 0.95) {
      numTropical++;
      tropicalSpanEl.innerHTML = numTropical;
      resultImgEl.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      pufferSpanEl.innerHTML = numPuffer;
      resultImgEl.src = "img/Pufferfish.png";
    }
  } else if (character === "alex") {
    // ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
    let randNum = Math.random();
    if (randNum < 0.1) {
      numCod++;
      codSpanEl.innerHTML = numCod;
      resultImgEl.src = "img/Raw-Cod.png";
    } else if (randNum < 0.2) {
      numSalmon++;
      salmonSpanEl.innerHTML = numSalmon;
      resultImgEl.src = "img/Raw-Salmon.png";
    } else if (randNum < 0.5) {
      numTropical++;
      tropicalSpanEl.innerHTML = numTropical;
      resultImgEl.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      pufferSpanEl.innerHTML = numPuffer;
      resultImgEl.src = "img/Pufferfish.png";
    }
  } else if (character === "villager") {
    // VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
    let randNum = Math.random();
    if (randNum < 0.25) {
      numCod++;
      codSpanEl.innerHTML = numCod;
      resultImgEl.src = "img/Raw-Cod.png";
    } else if (randNum < 0.5) {
      numSalmon++;
      salmonSpanEl.innerHTML = numSalmon;
      resultImgEl.src = "img/Raw-Salmon.png";
    } else if (randNum < 0.75) {
      numTropical++;
      tropicalSpanEl.innerHTML = numTropical;
      resultImgEl.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      pufferSpanEl.innerHTML = numPuffer;
      resultImgEl.src = "img/Pufferfish.png";
    }
  }
}
