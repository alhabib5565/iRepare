import Container from "@/components/Layouts/Container";
import BatteryReplacement from "@/components/service/BatteryReplacement";
import ChipReplacement from "@/components/service/ChipReplacement";
import DataRecovary from "@/components/service/DataRecovary";
import StorageReplacement from "@/components/service/StorageReplacement";
import useGrow from "@/hooks/useGrow";
import { motion } from "framer-motion";
const Services = () => {
  const { componentRef, style } = useGrow();
  return (
    <Container className="mt-[100px]">
      <div className="text-center">
        <h2>
          <span className="text-primary">Services</span> that we provide.
        </h2>
        <p className="mt-5 text-[18px]">
          We provide various computer repair services and solutions for our new
          and regular customers. <br /> Feel free to find out more below.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-10">
        <BatteryReplacement />
        <ChipReplacement />
        <DataRecovary />
        <StorageReplacement />
        <motion.div
          ref={componentRef}
          style={style}
          className="h-[400px] bg-light-grey rounded-md p-4 col-span-12 md:col-span-6 lg:col-span-4"
        >
          <h1 className="text-[80px] font-semibold">
            Same Day <span className="text-primary">Delivery</span>
          </h1>
        </motion.div>
        <motion.div
          ref={componentRef}
          style={style}
          className="h-[400px] bg-light-grey rounded-md p-4 col-span-12 md:col-span-6 lg:col-span-4"
        >
          <h1 className="text-[80px] font-semibold text-wrap">
            <span className="text-primary">Free</span>
            <br />
            Diagno <br /> stics
          </h1>
        </motion.div>
        <motion.div
          ref={componentRef}
          style={style}
          className="h-[400px] bg-light-grey rounded-md p-4 col-span-12 lg:col-span-4"
        >
          <h1 className="text-[80px] font-semibold">
            Remote <span className="text-primary">Support</span> <br />
            Service
          </h1>
        </motion.div>
      </div>
    </Container>
  );
};

export default Services;
