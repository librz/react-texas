import React, { FC, HTMLProps, CSSProperties, createElement } from 'react';

interface IProps extends HTMLProps<HTMLElement> {
  as?: keyof React.ReactHTML;
  maxLines?: number;
  placement?: "auto" | "right" | "left";
}

const Ellipsis: FC<IProps> = ({
  as = "div",
  maxLines = 1,
  placement = "auto", // follow text direction
  dir = "auto",
  children,
  style,
  ...otherProps
}) => {
  const containerStyle: CSSProperties = Object.assign<CSSProperties, CSSProperties>({
    overflow: "hidden",
    textOverflow: "ellipsis",
    ...style
  }, maxLines === 1 ? { whiteSpace: "nowrap" } : {
    display: "-webkit-box",
    "WebkitLineClamp": maxLines,
    "WebkitBoxOrient": "vertical"
  });
  if (placement === "auto") {
    return createElement(as, { style: containerStyle, ...otherProps }, children)
  } else {
    const direction: "ltr" | "rtl" = placement === "left" ? "rtl" : "ltr"
    Object.assign<CSSProperties, CSSProperties>(containerStyle, { direction })
    if (direction === dir) {
      return createElement(as, { style: containerStyle, ...otherProps }, children)
    } else {
      // when css's direction & text's writing direction are different, error may occur.
      // for example: <div style="direction: ltr;">163.net<div> will be displayed as net.163
      // to fix this, use bdi element's dir attr to tell the browser the actual writing direction
      // see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
      const innerNode = (
        <bdi dir={dir}>{children}</bdi>
      )
      return createElement(as, { style: containerStyle, ...otherProps }, innerNode)
    }
  }
};

export default Ellipsis;
