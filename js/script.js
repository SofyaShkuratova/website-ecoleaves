function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "cont") {
      x.className += " responsive";
      console.log("added");
    } else {
      x.className = "cont";
    }
  }