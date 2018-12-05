
    document.addEventListener("DOMContentLoaded", function (e) {
      document.querySelector("#textform").addEventListener("submit", function (e) {
        e.preventDefault();
        let textEl = document.querySelector("input[name=textname]");
        fetch(`https://favqs.com/api/quotes?filter=${textEl.value}`,
          {
            headers: {
              'Authorization': 'Token token="a5f0402f8048dab207cc82db6b557776"'
            }
          })
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) {
            // console.log(JSON.stringify(myJson));
            myJson.quotes.forEach(quote => {
              let elString = `<li onclick="what(this)" class="list-group-item">${quote.body}</li>`;
              let div = document.createElement('li');
              div.innerHTML = elString.trim();
              document.querySelector('.list-group').appendChild(div.firstChild);
            });
          });
      })
    
    })
    function what(e) {
      //remove active
      let ul = document.querySelector("#quote-list");
      let items = ul.getElementsByTagName("li");
      for (var i = 0; i < items.length; ++i) {
        items[i].classList.remove("active");
        // do something with items[i], which is a <li> element
      }
    
      e.classList.add("active");
      responsiveVoice.speak(e.innerText);
    }
        
