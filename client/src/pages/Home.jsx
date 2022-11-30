import { useAppContext } from "../utils/AppContext"


import image from "../assets/placeholder.png";
const Home = () => {
  const { appState, setAppState } = useAppContext()
  console.log(appState)
  return (
    <div>
      <h1 className="title-main">Quizzes</h1>
      <button className="category" variant="primary" type="submit">
        Latest
      </button>
      <button className="category" variant="primary" type="submit">
        Movies
      </button>
      <button className="category" variant="primary" type="submit">
        Trivia
      </button>
      <button className="category" variant="primary" type="submit">
        Books
      </button>
      <button className="category" variant="primary" type="submit">
        Music
      </button>
      <button className="category" variant="primary" type="submit">
        Games
      </button>
      <button className="category" variant="primary" type="submit">
        Personality
      </button>
      <button className="category" variant="primary" type="submit">
        Zodiac
      </button>
      <button className="category" variant="primary" type="submit">
        Animals
      </button>

      {/* Cards on Top */}
      <section id="gallery">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img src={image} class="img-top" alt="placeholder" />
                <div class="card-body">
                  <h5 class="card-title">Title</h5>
                  <p class="card-text">Info</p>
                  <a href="/" class="btn btn-outline-warning btn-sm">
                    Read More
                  </a>
                  <a href="/" class="btn btn-outline-danger btn-sm">
                    <i class="far fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img src={image} class="img-top" alt="placeholder" />
            <div class="card-body">
              <h5 class="card-title">Title</h5>
              <p class="card-text">Info</p>
              <a href="/" class="btn btn-outline-warning btn-sm">
                Read More
              </a>
              <a href="/" class="btn btn-outline-danger btn-sm">
                <i class="far fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img src={image} class="img-top" alt="placeholder" />
            <div class="card-body">
              <h5 class="card-title">Title</h5>
              <p class="card-text">Info</p>
              <a href="/" class="btn btn-outline-warning btn-sm">
                Read More
              </a>
              <a href="/" class="btn btn-outline-danger btn-sm">
                <i class="far fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
      
      {/* <div class="row">
  <div class="column">
    <div class="card-top">
    <img className="image" src={image} alt="placeholder" />
    </div>
  </div>
  <div class="column">
    <div class="card-top">
    <img className="image" src={image} alt="placeholder" />
    </div>
  </div>
  <div class="column">
    <div class="card-top">
    <img className="image" src={image} alt="placeholder" />
    </div>
  </div>
</div> */}
      <div class="py-5">
        <div class="container">
          <div class="row hidden-md-up">
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="quiz-img" />
                  <img className="image" src={image} alt="placeholder" />
                  <h4 class="card-title">Card title</h4>
                  <h6 class="card-subtitle text-muted">Subtitle</h6>
                  <p class="card-text p-y-1">Text here</p>
                  <a href="#" class="card-link">
                    link
                  </a>
                  <a href="#" class="card-link">
                    Second link
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="quiz-img" />
                  <img className="image" src={image} alt="placeholder" />
                  <h4 class="card-title">Card title</h4>
                  <h6 class="card-subtitle text-muted">Subtitle</h6>
                  <p class="card-text p-y-1">Text Here</p>
                  <a href="#" class="card-link">
                    link
                  </a>
                  <a href="#" class="card-link">
                    Second link
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="quiz-img" />
                  <img className="image" src={image} alt="placeholder" />
                  <h4 class="card-title">Card title</h4>
                  <h6 class="card-subtitle text-muted">Subtitle</h6>
                  <p class="card-text p-y-1">Text Here</p>
                  <a href="#" class="card-link">
                    link
                  </a>
                  <a href="#" class="card-link">
                    Second link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="quiz-img" />
                  <img className="image" src={image} alt="placeholder" />
                  <h4 class="card-title">Card title</h4>
                  <h6 class="card-subtitle text-muted">Subtitle</h6>
                  <p class="card-text p-y-1">Text Here</p>
                  <a href="#" class="card-link">
                    link
                  </a>
                  <a href="#" class="card-link">
                    Second link
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="quiz-img" />
                  <img className="image" src={image} alt="placeholder" />
                  <h4 class="card-title">Card title</h4>
                  <h6 class="card-subtitle text-muted">Subtitle</h6>
                  <p class="card-text p-y-1">Text Here</p>
                  <a href="#" class="card-link">
                    link
                  </a>
                  <a href="#" class="card-link">
                    Second link
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="quiz-img" />
                  <img className="image" src={image} alt="placeholder" />
                  <h4 class="card-title">Card title</h4>
                  <h6 class="card-subtitle text-muted">Subtitle</h6>
                  <p class="card-text p-y-1">Text Here</p>
                  <a href="#" class="card-link">
                    link
                  </a>
                  <a href="#" class="card-link">
                    Second link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {appState.user !== null && <p>We have a logged in user: {appState.user.email}</p>} */}
    </div>
  );
};

export default Home;
