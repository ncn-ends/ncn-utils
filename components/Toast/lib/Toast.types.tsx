import { ReactNode } from "react";

export type ToastStateItem = {
    type: "info" | "error" | "confirmation" | "warning"
    content: string
} | {
    type: "custom"
    content: string
    color: string,
    icon: ReactNode
}