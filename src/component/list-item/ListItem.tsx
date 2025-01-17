import React from "react";

import "./ListItem.scss";
import { ListItemProps } from "../../@types/component/list-item/ListItem";


const ListItem = ({imgUrl, name, email}: ListItemProps) => {

    return (
        <div className="list-item">
            <div className="thumbnail">
                <img src={imgUrl} alt={imgUrl}/>
            </div>
            <div className="item-content">
                <label>{name}</label>
                <label className="email">{email}</label>
            </div>
        </div>
    );

};

export default ListItem;