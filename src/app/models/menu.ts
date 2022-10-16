export interface Menu {
    title?: string;
    url?: string;
    icon?: string;
    spacing?: boolean;
    submenu?: boolean;
    submenuItems?: Menu[];
}