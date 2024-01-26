import useGrow from "@/hooks/useGrow";
import { motion } from "framer-motion";
const DataRecovary = () => {
  const { componentRef, style } = useGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="h-[400px]  rounded-md col-span-12 md:col-span-6 lg:col-span-7 overflow-hidden"
    >
      <div className="h-full w-full bg-light-grey/70 p-4 space-y-20">
        <h5>Chip Replacement </h5>
        <h3>
          There is no need to replace the motherboard for a tiny little dead
          chipset.{" "}
        </h3>
      </div>
    </motion.div>
  );
};

export default DataRecovary;
