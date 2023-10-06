import "../styles/More.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import tree_anime from "../../public/tree_anime.json";
import health from "../../public/health.json";
import fire from "../../public/fire.json";
import fish from "../../public/fish.json";

export function More() {
  const [messages, setMessages] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/stuff")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);

  return (
    <div className="boxy">
      <div className="hold">
        <div className="card">
          <Lottie className="imagy" animationData={fire} />

          <div className="card__details">
            <div className="name">
              Environmental Degradation and Climate Change
            </div>
            <p>
              The degradation of natural ecosystems, climate change, and its
              associated impacts on weather patterns, sea levels, and extreme
              events have garnered significant attention. These factors
              highlight the urgent need to address environmental issues. source:
              Intergovernmental Panel on Climate Change
            </p>

            <button>Read more</button>
          </div>
        </div>
      </div>

      <div className="hold">
        <div className="card">
          <Lottie className="imagy" animationData={health} loop="false" />
          <div className="card__details">
            <div className="name">Human Health and Well-being</div>

            <p>
              Pollution, habitat destruction, and the depletion of natural
              resources directly affect human health. Awareness of the links
              between environmental conditions and public health has grown,
              motivating people to take action. World Health Organization (WHO)
            </p>

            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className="hold">
        <div className="card">
          <Lottie className="imagy" animationData={fish} />

          <div className="card__details">
            <div className="name">Biodiversity Loss</div>

            <p>
              The loss of biodiversity, including the extinction of species, has
              raised concerns about the long-term health and resilience of
              ecosystems. People are increasingly aware of the importance of
              biodiversity for a sustainable future. Source Convention of
              Biological Diversity
            </p>

            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
