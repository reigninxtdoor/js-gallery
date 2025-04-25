const repoList=document.querySelector(".repo-list");
const galleryButton=document.querySelector("view.repos");
const filterInput=document.querySelector(".filtered-repos")
const divInformation=document.querySelector(".overveiw");
const repoInfo=document.querySelector(".repos");
const repoData=document.querySelector(".repo-data");
const backToGallery=document.querySelector("back-to-gallery-button")


// this is where profile information will appear
const username="reigninxtdoor";
const profile=async function(){
    const git =await fetch(`" https://api.github.com"/${username}`)
}
const gituser=await.git.json(reigninxtdoor);
console.log(data);
const userData =function(gitUser){
   const div=document.createElement("div");
   div.classList.add("user-info");
   div.innerHTML=`  <figure>
      <img alt="user avatar" src=${gitUser.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${gitUser.name}</p>
      <p><strong>Bio:</strong> ${gitUser.bio}</p>
      <p><strong>Location:</strong> ${gitUser.location}</p>
      <p><strong>Number of public repos:</strong> ${gitUser.number-of-public-repos}</p>
    </div> `}
    overview.append(div);

    const fetchedRepos=async function(username){
      const repoList = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  const repoInput = await repoList.json();
  displayRepos(repoInput);
}
const displayRepos=function(repos){
  displayRepos.classList.add("repos")
  displayRepos.innerHTML=`<h3>${repos.name}</h3>`
  repoList.append(repoItem)

};
galleryButton.addEventListener("click",function(){
  displayRepos.classlist.remove("hide");
  galleryButton.classList.add("hide");

});
repoList.addEventListener("click",function(e){
 const repoName = e.target.innerText;
  if (e.target.matches("h3"));
  RepoInfo(repoName);
  });
  const fetchedName =async function(repoName){
    const grabInfo= await fetch (`https://api.github.com/repos/${username}/${repoName}`);
    const repoInfo=await res.json();
console.log(repoInfo);
const languageData=await fetchLanguages.json();
  }
const languages=[];
for(const language in languageData ){
  languages.push(language);
}
const fetchLanguages= await fetch(repoInfo.languages_url)
console.log(languageData);
const displayRepoInfo =function(repoInfo,languages){
  const divTwo=document.createElement("div2");
  divTwo.classList.add("repo-data")
  divTwo.innerHTML=`<h3>Name: ${}</h3>
    <p>Description: ${}</p>
    <p>Default Branch: ${}</p>
    <p>Languages: ${languages.join(", ")}</p>
    <a class="visit" href="${}" target="_blank" rel="noreferrer noopener">View Repo on GitHub!</a>`
    repoData.append(divTwo);

console.log(languages);

  };
backToGallery.addEventListener("click",function(){
 repoInfo.classList.remove("hide");
  repoData.classList.add("hide");
  backToGallery.classList.add("hide");

})
filterInput.addEventListener("input",function(e){
  const repoLowerText = repo.innerText.toLowerCase();
  if (repoLowerText.includes(searchLowerText)) {
    repo.classList.remove("hide");
  } else {
    repo.classList.add("hide");
  }
});