import React, { useState } from "react";
import { InputSearchProps } from "../../@types/component/input-search/InputSearch";

import "./InputSearch.scss";

export const InputSearch = (props: InputSearchProps) => {
    const searchPlaceholder = props.searchPlaceholder || "Search"
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (event: any) => {
        setSearchText(event.target.value);

        props.onSearchTextChange && props.onSearchTextChange(event.target.value);
    };

    return (
        <div className="search-container">
            <span className="search-icon"></span>
            <input type="search" placeholder={searchPlaceholder} value={searchText} onChange={handleSearchTextChange} />
        </div>
    );
};
