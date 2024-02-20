import React from 'react';

// import OverBuying from "../assets/Problems.jpeg";
import Wastemoney from "../assets/wasted-money.jpg";
import Envimpact from "../assets/environment-impact.jpg";
import Hunger from "../assets/hunger.jpg";
import Resources from "../assets/resources.jpg";
import Community from "../assets/community.jpg";
import Sustainable from "../assets/sustainable.jpg";
import underline1 from "../assets/underline-heading.png";
import Arrow1 from "../assets/arrow1.png";
import Sun from "../assets/Highlight_05.png";

const Problems = () => {
  return (
    <div id="problems">
      <div class="the-problems">
        <div class="problems-section1">
          <div class="heading-highlights">
            <img id="highlight-heading" aria-hidden src={Sun} alt="Sun Photo" />
            <h1 id="heading-problems">
              Why Was DonationDashers{' '}
              <span className="created">
                {' '}
                Created ?{' '}
                <img id="underline1" src={underline1} alt="underline" />
              </span>
            </h1>
            <img id="arrow1" src={Arrow1} alt="arrow" />
          </div>
          <div class="cards">
            <div class="card1">
              <img
                aria-hidden
                id="WasteMoney"
                src={Wastemoney}
                alt="Waste of Money photo"
              />
              {/* Change the pictures and description  Aish - Done */}
              <h1>Wasted Money</h1>
              <p>
                Throwing away edible food represents a major financial drain globally.
                It is estimated{' '}
                <span id="para-highlights">
                  approximately 92,000 crore rupees worth of food is wasted worldwide
                  every year. {' '}
                </span>
                Cutting down on food waste could generate significant cost savings
                and provide financial benefits to food businesses and suppliers.
              </p>
            </div>
            <div class="card2">
              <img
                aria-hidden
                id="Envtimpact"
                src={Envimpact}
                alt="Environment Impact photo"
              />
              <h1>Environmental Impact</h1>
              <p>
              Food waste has a substantial negative impact on the environment.
              Studies suggest that around
              <span id="para-highlights">
                6% of worldwide CO2 emissions {' '}
              </span>
              annually can be attributed to discarded or unused food. Reducing food waste
              where possible could significantly decrease carbon emissions and help
              lessen the food system's environmental footprint overall.
              </p>
            </div>
            <div class="card3">
              <img
                id="hunger"
                aria-hidden
                src={Hunger}
                alt="Poor hungry children photo"
              />
              <h1>Fighting Hunger</h1>
              <p>
              At the same time that large amounts of food are being wasted, there are many people
              in our local community and around the world who struggle with hunger and lack reliable
              access to nutritious food. Cutting down on food waste where we can could help make
              more food available to feed hungry people and contribute to building a more food-secure 
              society where everyone's nutritional needs are met.
              </p>
            </div>
            <div class="card4">
              <img
                id="resources"
                aria-hidden
                src={Resources}
                alt="Farming photo"
              />
              <h1>Efficient Resource Use</h1>
              <p>
              When food goes to waste, it also wastes the precious resources like water, energy
              and land that went into producing it. By carefully considering our food purchases
              and consumption habits, and reducing waste where we can, we can make the best use
              of these limited resources and promote sustainability in our community.
              </p>
            </div>
            <div class="card5">
              <img
                id="community"
                aria-hidden
                src={Community}
                alt="Community photo"
              />
              <h1>Community Responsibility</h1>
              <p>
              As a close-knit community, we have a duty to care for each other and our shared
              resources. Reducing food waste demonstrates that care, shows we value our
              neighborhood and planet, and sets a positive, sustainable example.
              </p>
            </div>
            <div class="card6">
              <img
                id="sustainable"
                src={Sustainable}
                alt="Climate Protesters"
              />
              <h1>Building a Sustainable Future</h1>
              <p>
                {' '}
                The amount of wasted food indicates there are problems with how our food
                system functions. By working to reduce food waste, we can help create a
                more robust and effective food supply chain that is good for our entire
                neighborhood. If we join together to tackle this issue, we can build a
                more sustainable future for our community.
              </p>
            </div>
          </div>
        </div>
        {/* <div class="collage">
            <img id="background-image" src={OverBuying} alt="Background Image"/>
        </div> */}
      </div>
    </div>
  )
};

export default Problems;