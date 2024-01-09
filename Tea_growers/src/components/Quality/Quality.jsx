import React from "react";
import "./Quality.css";
import image1 from "../Assets/im1.jpeg";

function Quality() {
  return (
    <div>
      <section className="quality">
        <h1>Various Qualities</h1>
        <div className="qualitytxt">
          <p>
            The value of a great cup of tea depends mainly on the quality of
            leaves used. If the tea you use has low quality leaves you are left
            with a bad tasting cup of tea, which is bound to ruin the whole
            experience of having a delicious cup of tea. Tea auctioneers have
            different ways of defining the quality of tea, they use a complex
            system of grading leaves that are sold in auctions. But for everyday
            buying you needn’t follow this complex system as it will surely
            leave you confused. There are three main ways to determine the
            quality of tea for everyday buying, all you have to do is look,
            smell, taste.
          </p>
        </div>
        <div className="cards">
          <div className="cards1">
            <img src={image1} alt="" />
            <h1>className</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              minima natus reiciendis nesciunt qui harum aspernatur tenetur,
              sequi, voluptate placeat modi tempore eveniet! Adipisci officia,
              minus temporibus voluptatum blanditiis exercitationem!
            </p>
          </div>
          <div className="cards1">
            <img src={image1} alt="" />
            <h1>className</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              minima natus reiciendis nesciunt qui harum aspernatur tenetur,
              sequi, voluptate placeat modi tempore eveniet! Adipisci officia,
              minus temporibus voluptatum blanditiis exercitationem!
            </p>
          </div>
          <div className="cards1">
            <img src={image1} alt="" />
            <h1>className</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              minima natus reiciendis nesciunt qui harum aspernatur tenetur,
              sequi, voluptate placeat modi tempore eveniet! Adipisci officia,
              minus temporibus voluptatum blanditiis exercitationem!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quality;
