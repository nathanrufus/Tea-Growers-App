import React from "react";
import "./Quality.css";
import image1 from "../Assets/green2.jpeg";
import image2 from "../Assets/imageblack.jpeg";
import image3 from "../Assets/white2.jpeg";


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
            <h1>Green Tea</h1>
            <p>
            Made with steamed tea leaves, it has a high concentration of EGCG
             and has been widely studied. Green tea’s antioxidants may interfere
              with the growth of bladder, breast, lung, stomach, pancreatic, and colorectal cancers
            </p>
          </div>
          <div className="cards1">
            <img src={image2} alt="" />
            <h1>Black Tea</h1>
            <p>
            Made with fermented tea leaves, black tea has the highest caffeine content and 
            forms the basis for flavored teas like chai, along with some instant teas.
            </p>
          </div>
          <div className="cards1">
            <img src={image3} alt="" />
            <h1>White Tea</h1>
            <p>
            Uncured and unfermented. One study showed that white tea has the most 
            potent anticancer properties compared to more processed teas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quality;
