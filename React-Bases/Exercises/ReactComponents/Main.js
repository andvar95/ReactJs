/* ============================API / EVENTS==========================*/

var page = 0;
var show = false;

const nextFunction = () => {
  getApi(window.page++);
};

const prevFunction = () => {
  getApi(window.page--);
};

const openModal= () =>{
     window.show = true
     return(
       <Modal show={window.show} />
     )

}

const events = () => {
  let buttonPrev = document.getElementById("prev");
  let buttonNext = document.getElementById("next");
  let modal = document.getElementById("textModal");

  buttonNext.addEventListener("click", nextFunction);
  buttonPrev.addEventListener("click", prevFunction);
  modal.addEventListener("click",openModal)
};

const getApi = (pages) => {
  if (pages < 0) pages = 0;
  return fetch("https://rickandmortyapi.com/api/character/?page=" + pages)
    .then((res) => res.json())
    .then((res) => {
      draw(res.results);
      events();
    });
};

/* =====================COMPONENTES=======================*/

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Option 1</a>
      </li>
      <li>
        <a>Option 2</a>
      </li>
      <span className="spacer"></span>
      <li className="dropdown">
          <a className="UserField">User</a>
      </li>
    </ul>
  );
}

function Modal(props){
  const classModal = windows.show? 'display-block':'display-none'
  console.log(classModal)
  return(
    <div className={classModal}>
      <h1>Modal</h1>
    </div>
  )

}

function Body(props) {
  console.log(props);
  return (
    <div className="body">
      <div className="controls">
        <button id="prev" className="btn">
          Prev
        </button>
        <button id="next" className="btn">
          {" "}
          Next
        </button>
      </div>
      <div className="main">
        {props.data.map((dato, i) => (
          <Card key={i} {...dato} />
        ))}
      </div>
    </div>
  );
}



function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={props.image}></img>
      </div>
      <div id="textModal" className="card-text">{props.name}</div>
      <Modal />
    </div>
  );
}

function Footer() {
  return <footer className="footer">Developed by Andrés Varelo</footer>;
}

function Main(props) {
  return (
    <>
      <Navbar></Navbar>
      <Body data={props.data}></Body>
      <Footer></Footer>
    </>
  );
}

function draw(data) {
  ReactDOM.render(<Main data={data} />, document.getElementById("root"));
}

getApi(window.page);
