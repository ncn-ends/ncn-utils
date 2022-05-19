export type Breakpoint = {
    begin: number,
    speed: number
}

export type BreakpointWithStartValue = Breakpoint & {
    beginValue: number,
    constantChange: number
}