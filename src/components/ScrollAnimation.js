import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );
  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          // backgroundColor: "purple",
          background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "5px",
          borderRadius: "5px",
          boxShadow: "2px 2px white",
        }}
      />
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          iaculis ultrices justo et commodo. Nunc aliquam vulputate est quis
          facilisis. Phasellus quam nisl, rutrum sed pharetra eget, accumsan
          quis orci. Suspendisse id mi id sem blandit vehicula. Duis luctus,
          metus id molestie maximus, nisi ex pharetra urna, non finibus purus
          metus ut ligula. Aliquam nec tempor sapien. Maecenas vulputate diam
          porta, scelerisque purus at, tincidunt enim. Maecenas bibendum orci eu
          dui euismod volutpat. Proin rhoncus massa turpis, et convallis arcu
          congue eu.
        </p>
        <p>
          Mauris eu justo interdum, luctus ex vitae, placerat nisl. Donec risus
          dui, hendrerit at risus vitae, interdum vestibulum metus. Etiam
          dapibus tincidunt mauris, quis lacinia ex consectetur ut. Quisque vel
          porta nisi. Nullam tristique, massa vel imperdiet ornare, ligula erat
          maximus nibh, at eleifend sapien lorem nec erat. Donec id lacus semper
          orci varius ultricies. Etiam ut velit non odio venenatis porttitor a
          eget nisi. In eget sem imperdiet, volutpat ligula id, lobortis nulla.
          Vivamus luctus est id dolor euismod consequat. Morbi malesuada
          vestibulum tincidunt. Mauris fringilla diam non est aliquet, eu
          rhoncus lectus auctor. Sed faucibus ut eros at eleifend. Fusce dictum
          odio a turpis blandit, ac cursus nisi finibus. Phasellus ullamcorper
          tortor eu odio lobortis pretium. Nunc maximus, ante dictum pulvinar
          finibus, metus velit viverra massa, sit amet congue turpis erat sit
          amet ante.
        </p>
        <p>
          Morbi bibendum lacinia vestibulum. Nullam consectetur dignissim odio,
          in egestas ex dignissim ut. Donec volutpat viverra quam, in facilisis
          erat pulvinar eget. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Ut id nibh lobortis,
          sollicitudin urna id, tempus sapien. Nulla placerat laoreet mi ut
          feugiat. Vivamus blandit nunc et erat euismod, et condimentum arcu
          sodales. Vivamus sollicitudin in leo ut ultrices. Mauris sit amet
          vulputate magna, nec egestas augue. Nulla arcu sapien, accumsan id
          suscipit sit amet, porta nec velit. Donec efficitur fermentum mauris,
          a ullamcorper arcu placerat eget. Mauris finibus auctor velit, et
          vestibulum est placerat ac. Nulla faucibus scelerisque scelerisque.
          Nulla lacinia arcu felis, id mollis purus vulputate eu. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Aenean volutpat posuere erat quis ullamcorper.
        </p>
        <p>
          Aenean varius eget eros et tristique. Integer vehicula erat a nisi
          pulvinar, at hendrerit felis vulputate. Donec accumsan magna lobortis,
          faucibus lectus eu, commodo turpis. Nulla facilisi. Integer vestibulum
          dignissim leo sit amet mattis. Nullam sed vestibulum arcu. Integer
          convallis ligula sem, ut ultrices lectus tempor quis. Morbi risus
          libero, accumsan varius metus eget, euismod fermentum orci. Praesent
          imperdiet tortor velit, at tempus dui vulputate eget. Proin porta
          augue sed lacus efficitur, non tempor sapien cursus. Donec laoreet
          pulvinar vestibulum. Nulla sit amet lectus a lorem rutrum euismod eget
          sit amet erat. Nullam et neque sit amet tortor molestie commodo nec
          nec mi. Nam dignissim metus quis feugiat varius. Aenean laoreet
          consectetur libero vel suscipit. Praesent leo orci, bibendum a
          bibendum vehicula, auctor at enim.
        </p>
        <p>
          Integer quis dolor sollicitudin, lacinia dui a, auctor magna.
          Vestibulum auctor placerat dolor, eget volutpat libero rhoncus nec.
          Nulla non vestibulum ipsum, vel finibus urna. Maecenas scelerisque
          dolor risus, sit amet molestie purus interdum eu. Pellentesque aliquet
          eu massa eget congue. Quisque vitae leo iaculis, egestas est dictum,
          viverra risus. Morbi purus nulla, rhoncus at ultrices quis,
          scelerisque eget felis. Mauris tortor lorem, interdum non mauris eu,
          tempus malesuada diam. Proin justo orci, volutpat ac sem gravida,
          convallis tincidunt dui. Suspendisse potenti. Nullam lorem enim,
          ullamcorper imperdiet sodales vel, lobortis sed felis.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
