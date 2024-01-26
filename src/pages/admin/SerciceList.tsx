import { getService } from "@/api/admin/service/service";
import useService from "@/api/admin/service/useService";
import Container from "@/components/Layouts/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SerciceList = () => {
  const { data: services, isLoading, isError } = useService();

  if (isLoading) {
    return <h3>loading.....</h3>;
  }

  if (isError) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <Container className="mt-10 md:mt-20 p-0">
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant={"destructive"}>Del</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Service</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default SerciceList;
