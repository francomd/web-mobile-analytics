export enum GTMEvents {
    screen = 'screen',
}

export interface GTMDataLayer {
    event: GTMEvents | string // TODO add default GTM events
    screen_title: string
}
