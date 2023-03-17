import { FC } from "react";

import ListItem from "../list-item/list-item.component";

import "./list.styles.scss";

export interface ListProps {
  items: {
    name: string;
    price: number;
  }[];
};

export const List: FC<ListProps> = ({ items }) => {
  return (
    <div className="flex col">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default List;