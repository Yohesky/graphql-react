import type { JSX } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "../shared/components/Layout";
import { View as EpisodesView } from "../pages/episodes/View";
import { View as CharacterView } from "../pages/characters/View";

interface Route {
  path: string;
  element: JSX.Element;
}

const routes: Route[] = [
  {
    path: "episodes",
    element: <EpisodesView />,
  },
  {
    path: "characters",
    element: <CharacterView />,
  },
];

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};
