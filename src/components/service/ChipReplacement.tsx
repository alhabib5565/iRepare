import useGrow from "@/hooks/useGrow";
import { motion } from "framer-motion";
import image from "../../assets/images/chip.jpg";
const ChipReplacement = () => {
  const { componentRef, style } = useGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="h-[400px] rounded-md p-4 col-span-12 md:col-span-6 lg:col-span-5 relative overflow-hidden"
    >
      <img className="absolute inset-0 w-full h-full " src={image} alt="" />
      <div className="absolute inset-0 bg-light-grey/70 p-4 space-y-20">
        <h5>Chip Replacement </h5>
        <h3>
          There is no need to replace the motherboard for a tiny little dead
          chipset.{" "}
        </h3>
      </div>
    </motion.div>
  );
};

export default ChipReplacement;
