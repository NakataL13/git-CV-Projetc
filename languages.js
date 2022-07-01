
function createListItem(languages) {
    let str = '<li id="languages-" class="li-languages">' + languages + '</li>';
        return str;
    }
    
    function createList(listOfLanguages) {
        let str = '';
        for(let i = 0; i < listOfLanguages.length; i++) {
            str = str + createListItem(listOfLanguages[i], i);
        }
        return str;
    }
    
    let listOfLanguages = ["English - English World Academy/Certified/ - B2 + Upper Intermediate", "German - High School/Advanced Class/ - A2 - B1", "Russian - High School - A1 - A2"];
    let ulElement = document.getElementById('languages');
    
    function populateList() {
        let btnEl = document.querySelector(".btn")
        let closeBtn = document.querySelector(".close-btn")
        ulElement.innerHTML = createList(listOfLanguages);
        btnEl.addEventListener("click", function(){
            ulElement.classList.toggle("hide")
        })
        
    }


    
