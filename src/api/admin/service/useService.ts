import { useQuery } from "@tanstack/react-query";
import { getService } from "./service";

const useService = () => {
    const servicesInfo = useQuery({
        queryKey: ["services"],
        queryFn: getService,
        select: (data) =>
            data.data.map((service) => ({
                description: service.description,
                name: service.name,
                price: service.price,
                id: service._id,
            })),
    });
    return servicesInfo
};

export default useService;