import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import {
  Fire,
  Home,
  UsersIcon,
  StoreIcon,
  CurrencyIcon,
  NewsIcon,
  PuzzleIcon,
  TagIcon,
  FileIcon
} from "./icons";

function Button(props) {
  const { icon: Icon } = props;
  return (
    <li>
      <Link
        to={props.to}
        onClick={props.onSelected}
        className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
      >
        <Icon
          className={cx(
            "h-6 w-6 transition-all ease-out transition-medium",
            props.selected ? "text-indigo-400" : "text-gray-500"
          )}
        />
        <span
          className={cx(
            "ml-2 text-sm font-medium transition-all ease-out transition-medium",
            props.selected ? "text-indigo-600" : "text-gray-700"
          )}
        >
          {props.text}
        </span>
      </Link>
    </li>
  );
}

export function Aside(props) {
  const { selected, setSelected } = props;
  return (
    <nav id="nav" className={props.className}>
      <span
        className="absolute h-10 w-full bg-white rounded shadow ease-out transition-transform transition-medium"
        style={{ transform: `translateY(calc(100% * ${selected}))` }}
      />
      <ul className="relative">
        <Button
          icon={Home}
          to="/home"
          selected={selected === 0}
          onSelected={() => setSelected(0)}
          text="Home"
        />
        <Button
          icon={UsersIcon}
          to="/users"
          selected={selected === 1}
          onSelected={() => setSelected(1)}
          text="Users"
        />
        <Button
          icon={StoreIcon}
          to="/partners"
          selected={selected === 2}
          onSelected={() => setSelected(2)}
          text="Partners"
        />
        <Button
          icon={FileIcon}
          to="/documents"
          selected={selected === 3}
          onSelected={() => setSelected(3)}
          text="Documents"
        />
        <Button
          icon={TagIcon}
          to="/pim"
          selected={selected === 4}
          onSelected={() => setSelected(4)}
          text="Pim"
        />
        <Button
          icon={PuzzleIcon}
          to="/white-label"
          selected={selected === 5}
          onSelected={() => setSelected(5)}
          text="Product&nbsp;Configuration"
        />
        <Button
          icon={NewsIcon}
          to="/terms"
          selected={selected === 6}
          onSelected={() => setSelected(6)}
          text="Terms"
        />
        <Button
          icon={CurrencyIcon}
          selected={selected === 7}
          onSelected={() => setSelected(7)}
          to="/payment"
          text="Payment"
        />
        <Button
          icon={Fire}
          to="/sauron"
          selected={selected === 8}
          onSelected={() => setSelected(8)}
          text="Sauron"
        />
      </ul>
    </nav>
  );
}
