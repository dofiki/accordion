//select all content box
const accordion = document.querySelectorAll(".cntbx");

//loop through all content box
for (let i=0; i<accordion.length; i++){
    //when each label is clicked
    accordion[i].children[0].addEventListener('click', function(){
        //content associated with that label is changed
        accordion[i].children[1].classList.toggle('active');
        accordion[i].children[0].children[1].classList.toggle('rotation')
    })
}