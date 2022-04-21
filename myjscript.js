
// Javascript file

//Script for contact forms
  // form validation
  // function validate() {
  //   if(do)
  // }



// ============== Projects page ================ //
  // Javascript function to functionalize zoom image modal popup
  // Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementByClass('img1');
var modalImg = document.getElementByClass("img1");
var captionText = document.getElementByClass("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img1.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img1.className = "modal-content";
     }, 400);

 }

 onclick ="this.paused ? this.play() : this.pause();"
