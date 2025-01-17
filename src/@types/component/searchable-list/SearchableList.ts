import { ListItemProps } from "../list-item/ListItem";

export type SectionHeader = {
    id: number;
    label: string;
    items: ListItemProps[];
}

export type SearchableListProps = {
    items: SectionHeader[];
    searchPlaceholder?: string;
    onSearch?: (item: ListItemProps, searchText: string) => boolean;
    searchCaseSensitive?: boolean;
};