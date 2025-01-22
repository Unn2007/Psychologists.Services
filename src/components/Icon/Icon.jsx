import Icons from "../../assets/icons/sprite.svg";

export const Icon = ({ width, height, href, className, style = {} }) => {
  return (
    <svg className={className} width={width} height={height} style={style}>
      <use href={`${Icons}#${href}`}></use>
    </svg>
  );
};
