import { FC } from "react";

import './list-item.styles.scss';

export interface ListItemProps {
  item: {
    name: string;
    price: number;
  }
};

export const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <tr>
      <th>Fake name</th>
      <td className="price">Fake price $</td>
    </tr>
  )
}

export default ListItem;