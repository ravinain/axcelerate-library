import React, { useState } from "react";

import "./SearchableList.scss";
import ListItem from "../list-item/ListItem";
import CollapsibleContainer from "../collapsible-container/CollapsibleContainer";
import { SearchableListProps } from "../../@types/component/searchable-list/SearchableList";
import { InputSearch } from "../input-search/InputSearch";
import { ListItemProps } from "../../@types/component/list-item/ListItem";

const SearchableList = (props: SearchableListProps) => {

    const { items, searchPlaceholder, searchCaseSensitive } = props;
    const [searchText, setSearchText] = useState("");

    // Default searchFilter that checks whether name contains entered character in order
    const searchFilter = (item: ListItemProps) => {
        if (props.onSearch) {
            return props.onSearch(item, searchText);
        }

        if (!searchText) {
            return true;
        }

        if (searchCaseSensitive) {
            return item.name.indexOf(searchText) !== -1;
        }

        return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    };

    const handleSearchTextChange = (value: string): void => {
        setSearchText(value);
    };

    return (
        <div className="searchable-list">

            <InputSearch searchPlaceholder={searchPlaceholder} onSearchTextChange={handleSearchTextChange} />

            {
                items.map(sectionHeader => (
                    <CollapsibleContainer key={sectionHeader.id} label={sectionHeader.label} open={true}>
                        {
                            sectionHeader.items
                                .filter(searchFilter)
                                .map(item => (
                                    <ListItem key={item.id} {...item} ></ListItem>
                                ))
                        }
                    </CollapsibleContainer>
                ))
            }
        </div>
    );

};

export default SearchableList;