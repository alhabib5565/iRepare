import useGrow from "@/hooks/useGrow";
import { motion } from "framer-motion";
import image from "../../assets/images/harddrivecable.png";
const StorageReplacement = () => {
  const { componentRef, style } = useGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="h-[415px] bg-light-grey rounded-md col-span-12 flex "
    >
      <div className="w-[62%] pt-4 pl-4">
        <h5>Battery Replacement</h5>
        <h3 className="mt-20">
          Get back to 100% battery health. With 6 month replacement warranty.{" "}
        </h3>
      </div>
      <div className=" hidden md:block">
        <img className="object-cover w-full h-full " src={image} alt="" />
      </div>
    </motion.div>
  );
};

export default StorageReplacement;
