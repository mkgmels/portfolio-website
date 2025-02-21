var tabLinks = Array.from(document.getElementsByClassName("tab-links"));
var tabContents = Array.from(document.getElementsByClassName("tab-contents"));
function opentab(tabname) {
  tabLinks.forEach((tablink) => {
    tablink.classList.remove("active-link");
  });

  tabContents.forEach((tabcontent) => {
    tabcontent.classList.remove("active-tab");
  });

  event.currentTarget.classList.add("active-link")
  let targetContent=document.getElementById(tabname)
  targetContent.classList.add("active-tab");
}
const menubtn=document.getElementsByClassName("fa-xmark");
const sidemenu = document.getElementById("sidemenu");
function openmenu(){
sidemenu.style.right="0";

}

function closemenu(){
  sidemenu.style.right="-150px";
  
  }



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxi97hjqd19UVNIWVtPa8rDfrSGFMLoQh7ZmE--zRzPMJ77G-5Z7gN3OgdhkJjBaDU5/exec'
  const form = document.forms['submit-to-google-sheet']
  const formMessage=document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        formMessage.innerText="Sent successfully"
      })
      .catch(error => console.error('Error!', error.message))
  })