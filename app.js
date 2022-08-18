const sectionOne = document.querySelector("#skills");
const sections = document.querySelectorAll('div');


const options = {
    root: null,
    threshold: 0,
    rootMargin: "-50%"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        entry.target.classList.toggle("circle");
    });
}, options);

sections.forEach(div => {
    observer.observe(div);
});
