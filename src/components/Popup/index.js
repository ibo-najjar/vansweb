import React from "react";
import { PopupContainer, PopupWrapper, TextWrapper } from "./PopupElements";
import "../Button/GlowButton.css";
import "../Button/SocialBtn.css";
import { motion } from "framer-motion";

function Popup(props) {
  return props.trigger ? (
    <>
      <PopupContainer
        as={motion.div}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/ibo-najjar">
                Github <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ibrahim-najjar-6a9a91218">
                Linkedin <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <PopupWrapper>
          <TextWrapper>
            hey this is just a concept design for a vans online store feel free
            to contact me for feedback
          </TextWrapper>
          <button className="glowBtn" onClick={() => props.setTrigger(false)}>
            Explore the design
          </button>
          {props.children}
        </PopupWrapper>
      </PopupContainer>
    </>
  ) : (
    ""
  );
}

export default Popup;
