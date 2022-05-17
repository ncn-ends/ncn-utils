import React, { FunctionComponent } from "react";
import { ListChildComponentProps } from "react-window";

export interface OldStateItem {
    label: string,
    isActive: boolean
}

export interface Build {
    title: string,
    author: string
}

export interface RowData {
    items: Build[]
}

export type VirtListRowProps = ListChildComponentProps<RowData> & { isItemLoaded: Function }
export type VirtListProps = RowData & {
    children: FunctionComponent,
    height: number,
    width: number
};

export interface BuildsApiResponse {
    total_pages: number,
    current_page: number,
    builds: Build[]
}