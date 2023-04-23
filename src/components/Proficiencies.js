import { useRef } from "react";

export default function Proficiencies() {
  const proficienciesRef = useRef(null);

  return (
    <section
      id="proficiencies"
      ref={proficienciesRef}
      className="d-flex justify-content-center row mt-5 p-0 "
    >
      <div className="col-lg-8 m-5">
        <div>
          <div className="text-center">
            <h2>Proficiencies</h2>
          </div>
          <div className="row-reverse text-center mt-4">
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
              alt="html"
            />
            <img
              className="css"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt="CSS"
            />
            <img
              className="js"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png"
              alt="javaScript"
            />
            <img
              className="logos"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGY3y62pQo2wpjm4i_6cIapSOvVIFShRrnH1a2pukw&s"
              alt="msSQL"
            />
            <img
              className="logos"
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
              alt="mongodb"
            />
            <img
              className="logos"
              src="https://buttercms.com/static/images/tech_banners/ExpressJS.png"
              alt=" ExpressJS"
            />
            <img
              className="logos"
              src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/reactlogo_4.png?itok=LXFHZrKJ"
              alt="react"
            />
            <img
              className="logos"
              src={process.env.PUBLIC_URL + "/images/nodejs2.png"}
              alt="nodejs"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png"
              alt="jQuery"
            />
            <img
              className="logos"
              src={process.env.PUBLIC_URL + "/images/bootstrap-logo.png"}
              alt="bootstrap"
            />
            <img
              className="logos"
              src={process.env.PUBLIC_URL + "/images/vsCode.png"}
              alt="vsCode"
            />
            <img
              className="logos"
              src="https://faisalweb.com/wp-content/uploads/2017/07/git.jpg"
              alt="gitBash"
            />
            <img
              className="logos"
              src="https://seekvectorlogo.net/wp-content/uploads/2018/12/heroku-vector-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
