import { FC, PropsWithChildren } from "react";
import { Navigation } from "../Navigation/Navigation";
import { useCurrentRoute } from "../../hooks/useCurrentRoute";

import s from "./styles.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { title, description, image } = useCurrentRoute();

  return (
    <div className={s.root}>
      <Navigation className={s.navigation} />
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
        {description !== undefined && <h3>{description}</h3>}
        {children}
        {image && (
          <img
            className={s.image}
            src={`${process.env.PUBLIC_URL}/examplesImages/${image.name}`}
            style={
              image.maxWidth ? { maxWidth: `${image.maxWidth}px` } : undefined
            }
          />
        )}
      </div>
    </div>
  );
};
