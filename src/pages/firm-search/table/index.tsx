// import { Table } from "@mantine/core";

// const elements = [
//   { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
//   { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
//   { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
//   { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
//   { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
// ];

// export function FirmSearchTable() {
//   const rows = elements.map((element) => (
//     <Table.Tr key={element.name}>
//       <Table.Td>{element.position}</Table.Td>
//       <Table.Td>{element.name}</Table.Td>
//       <Table.Td>{element.symbol}</Table.Td>
//       <Table.Td>{element.mass}</Table.Td>
//     </Table.Tr>
//   ));

//   return (
//     <Table.ScrollContainer minWidth={"100%"}>
//       <Table withTableBorder withColumnBorders>
//         <Table.Thead>
//           <Table.Tr>
//             <Table.Th>First Name</Table.Th>
//             <Table.Th>Location</Table.Th>
//             <Table.Th>Total AUM (Millions)</Table.Th>
//             <Table.Th>Individual AUM (Millions)</Table.Th>
//           </Table.Tr>
//         </Table.Thead>
//         <Table.Tbody>{rows}</Table.Tbody>
//       </Table>
//     </Table.ScrollContainer>
//   );
// }

import { Box } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { DataTable } from 'mantine-datatable';

export function FirmSearchTable() {
  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={[
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        // more records...
      ]}
      // define columns
      columns={[
        {
          accessor: 'id',
          // this column has a custom title
          title: 'First Name',
          // right-align column
          textAlign: 'right',
        },
        { accessor: 'Location' },
        {
          accessor: 'Total AUM (Millions)',
          // this column has custom cell data rendering
          render: ({ party }) => (
            <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
              {party.slice(0, 3).toUpperCase()}
            </Box>
          ),
        },
        { accessor: 'Individual AUM (Millions)' },
      ]}
      // execute this callback when a row is clicked
      onRowClick={({ record: { name, party, bornIn } }) =>
        showNotification({
          title: `Clicked on ${name}`,
          message: `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
          withBorder: true,
        })
      }
    />
  );
}