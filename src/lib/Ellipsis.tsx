import React, { FC, HTMLProps, CSSProperties, createElement } from 'react';

interface IProps extends HTMLProps<HTMLElement> {
  as?: keyof React.ReactHTML;
  maxLines?: number;
  placement?: "right" | "left"; 
}

const Ellipsis: FC<IProps> = ({
  as = "div",
  maxLines = 1,
  placement = "right",
  dir = "ltr",
  children,
  style,
  ...otherProps
}) => {
  const containerStyle: CSSProperties = Object.assign<CSSProperties, CSSProperties>({
    overflow: "hidden",
    textOverflow: "ellipsis",
    direction: placement === "right" ? "ltr" : "rtl",
    ...style
  }, maxLines === 1 ? { whiteSpace: "nowrap" } : {
    display: "-webkit-box",
    "WebkitLineClamp": maxLines,
    "WebkitBoxOrient": "vertical"
  });
  // use css's direction prop to rtl in order to place ellipsis on the left can be dangerous,
  // for example: 163.net will be displayed as net.163
  // to fix this, use bdi element's dir attr to tell the browser the actual writing direction is ltr,
  // see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
  const innerNode = (
    <bdi dir={dir}>{children}</bdi>
  )
  return createElement(as, { style: containerStyle, ...otherProps }, innerNode)
};

export default Ellipsis;
