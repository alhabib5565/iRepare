import Container from "@/components/Layouts/Container";
import { Button } from "@/components/ui/button";
import heroImg from "../../assets/images/macbook-exposed.png";
import { motion } from "framer-motion";
const Hero = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 1,
        type: "spring",
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0 },
  };

  const laptop = {
    initial: {
      y: 0,
      rotate: "0deg",
      scale: 4,
    },
    animate: {
      y: 30,
      rotate: "-30deg",
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <Container className="min-h-screen h-full grid grid-cols-1 md:grid-cols-2 place-items-center pt-5">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="mt-10 md:mt-0"
        >
          <motion.h1
            variants={child}
            className="text-4xl md:text-8xl font-bold whitespace-nowrap"
          >
            <span className="text-grey">Don't worry.</span>
            <br />
            <span className="text-dark-grey">We'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={child}
            className="text-grey text-[20px] pt-4 md:pt-10 mb-2"
          >
            Welcome to <span className="text-dark-grey">iRepair</span>, your
            one-stop place for all kinds of
            <span className="text-dark-grey">Macbook repairs</span> and
            diagnostics.
          </motion.p>
          <motion.div variants={child}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className=" w-full"
        >
          <img
            className="object-contain w-full md:w-[95%] mx-auto"
            src={heroImg}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
