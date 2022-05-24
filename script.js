//-- variables --\\

const print = console.log
const $ = x => document.querySelector(x)
const $$ = x => document.querySelectorAll(x)
//const rellax = new Rellax(".headline")


//-- startup --\\

fixHeight()
observeSections()



//-- functions --\\

function fixHeight()
{
    requestAnimationFrame(fixHeight)
    $(".headline").style.height = window.innerHeight + "px"
    $("h1").style.paddingTop = (window.innerHeight * 0.3) + "px"
}


function observeSections()
{
    const observer = new IntersectionObserver(function(entries)
    {
       entries[0].isIntersecting ? entries[0].target.classList.add("show") : entries[0].target.classList.remove("show")
    }, { threshold: 0.5 })

    $$(".headline, article").forEach(function(i)
    {
        observer.observe(i)
    });
}
