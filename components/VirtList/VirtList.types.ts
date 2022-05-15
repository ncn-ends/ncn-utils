import { RowData } from "./VirtList.stories";
import { FunctionComponent, ReactNode } from "react";

export type VirtListProps = RowData & {
    children: FunctionComponent,
    height: number,
    width: number
};