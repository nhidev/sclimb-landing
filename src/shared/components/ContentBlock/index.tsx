import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import UpContentBlock from "./UpContentBlock";

import { IContentBlockProps } from "./types";

const ContentBlock = (props: IContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "up") return <UpContentBlock {...props} />;
  return null;
};

export default ContentBlock;