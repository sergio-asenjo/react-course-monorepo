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
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item) => (
            <ListItem item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;