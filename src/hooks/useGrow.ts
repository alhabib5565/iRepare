import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useGrow = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const style = { scaleX: scale }

    return { componentRef, style }
};

export default useGrow;