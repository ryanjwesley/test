!function(){
    function e(){
        window.addEventListener("message",function(e){
            var t=e[e.message?"message":"data"];
            if("close"===t)document.querySelector(".jobber-dialog-overlay").classList.add("jobber-hidden");
            else if("scrolltop"===t)document.querySelector(".jobber-dialog-overlay").scrollTo(0,0);
            else if("recaptcha-setup"===t);
            else{
                var r=document.querySelector("iframe.jobber-work-request");
                r.parentElement.style.height=t,
                r.style.height=t
            }
        },
        !1)
    }
    function t(){
            responseElement=c.response.documentElement,responseElement.querySelector("iframe.jobber-work-request").addEventListener("load",function(){
                e(),
                r(),
                this.style.visibility="visible"
            });
            var t=responseElement.querySelector("iframe");
            l.insertAdjacentElement("beforeend",t)
        }
    function r(){
            for(var e=document.querySelectorAll(".jobber-spinner"),
            t=0;
            t<e.length;t++)e[t].classList.remove("jobber-spinner")
        }
    function n(){
            if(200==c.status)t();else{r();
                var e=document.querySelector(".jobber-inline-work-request"),
                n=document.createElement("div");
                n.classList.add("jobber-flash","jobber-flash--error");
                var o=document.createElement("p");
                o.innerHTML="<strong>Something went wrong</strong>";
                var s=document.createElement("p");
                s.innerText="Form is currently unavailable",
                n.appendChild(o),
                n.appendChild(s),
                e.appendChild(n)
            }
        }var o;
        document.currentScript=document.currentScript||(o=document.getElementsByTagName("script"))[o.length-1];
        var s=document.currentScript.getAttribute("clienthub_id"),
        i=document.currentScript.getAttribute("form_url"),
        l=document.getElementById(s);
        l.classList.add("jobber-inline-work-request"),
        l.classList.add("jobber-spinner");
        var c=new XMLHttpRequest;
        c.addEventListener("loadend",n),
        c.open("GET",i,!0),
        c.setRequestHeader("Accept","text/html"),
        c.responseType="document",
        c.send()
    }();
