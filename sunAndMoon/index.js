window.addEventListener("mousemove", function(e) {
  console.log(e);

  let precenttag = 100 - (e.clientX / window.innerWidth) * 100;
  document.querySelector(".sun").style.clipPath = `inset(0 ${precenttag}% 0 0)`;

  // let precenttag = (e.clientX / window.innerWidth) * 100;
  // document.querySelector(
  //   ".sun"
  // ).style.clipPath = `polygon(0 0, ${precenttag}% 0, ${precenttag}% 100%, 0% 100%)`;
});
