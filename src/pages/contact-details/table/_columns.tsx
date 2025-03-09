import { DataTableColumn } from "mantine-datatable";
import { TableRecordsType } from "./_data";

export const columns: DataTableColumn<TableRecordsType>[] = [
    {
        accessor: "name",
        title: "First Name",
        resizable: true,
        sortable: true,
        draggable: true,
        width: 200,
    },
    {
        accessor: "location",
        title: "Location",
        ellipsis: true,
        resizable: true,
        sortable: true,
        draggable: true,
        width: 200
    },
    {
        accessor: "totalAum",
        title: "Total AUM (Millions)",
        resizable: true,
        sortable: true,
        draggable: true,
        width: 200
    },
    {
        accessor: "individualAum",
        title: "Individual AUM (Millions)",
        resizable: true,
        sortable: true,
        draggable: true,
        width: 200
    },
]