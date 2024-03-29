const titleClickHandler = function(event){
    const clickedElement = this;
    console.log("Link was clicked");
    console.log(event);
    
    /* remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}
const activeArticels = document.querySelectorAll('.article-active');
for(let activeArticle of activeArticels){
    activeArticle.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  console.log('clickedElement (with plus): ' + clickedElement);
  clickedElement.classList.add('active');


  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
