var page = 0;

const getApi = (pages) => {
    if(pages===0) pages=0
  return fetch("https://rickandmortyapi.com/api/character/?page="+pages)
    .then((res) => res.json())
    .then((res) => {
        drawData(res.results)
        events()
    });
};

const nextFunction =()=>{
console.log(this.page++)
getApi(this.page++)
}

const prevFunction =()=>{

getApi(this.page--)
}

const events = () =>{
    let buttonPrev = document.getElementById('prev')
    let buttonNext = document.getElementById('next')

buttonNext.addEventListener('click',nextFunction)
buttonPrev.addEventListener('click',prevFunction)


}

const drawData = (movies) => {
  const options = ["Home", "Option 1", "Option 2", "Option3"];

  let navbar = React.createElement(
    "ul",
    { id: "navbar", className: "navbar" },
    options.map((option, i) => React.createElement("li", { key: i }, option))
  );

  let main = React.createElement(
    "div",
    null,
    React.createElement(
        'div',{className:'controls'},
        React.createElement('button',{id:"prev",className:"prev"},'prev'),
        React.createElement('button',{id:"next",className:"next"},'next')

    ),
    React.createElement(
      "main",
      { className: "main", id: "main" },
      movies.map((movie, i) =>
        React.createElement(
          "div",
          { key: i, className: "card" },
          React.createElement(
            "div",
            null,
            React.createElement("img", { src: movie.image })
          ),
          React.createElement("div", { className: "card-text" }, movie.name)
        )
      )
    )
  );

  let footer = React.createElement(
    "footer",
    { className: "footer", id: "footer" },
    React.createElement("div", { key: "footerComponent" }, "Create by andvar")
  );

  ReactDOM.render([navbar, main, footer], document.getElementById("root"));
};




getApi(this.page);




