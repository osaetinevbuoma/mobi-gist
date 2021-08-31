import { useBadgeContext } from "../context/BadgeContext";
import { extractFileTypes } from "../services/GistService";

interface IGistBadge {
  files: any;
}

const GistBadge = (props: IGistBadge): JSX.Element => {
  const badgeContext: any = useBadgeContext();

  const setBackgroundColor = (fileType: string): string => {
    if (badgeContext) {
      if (badgeContext.colors[fileType]) return badgeContext.colors[fileType];
      else {
        const newColor = badgeContext.createColor(fileType);
        return newColor;
      }
    }

    return '';
  }

  return (
    <>
      {props.files && extractFileTypes(props.files).map((type: string, index: number) => (
        <span
          key={index}
          className="badge rounded-pill"
          style={{backgroundColor: setBackgroundColor(type)}}
        >
          {type}
        </span>
      ))}
    </>
  );
}

export default GistBadge;
