import type { JSX } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Layout } from "../shared/components/Layout";
import { View as EpisodesView } from "../pages/episodes/View";
import { View as CharacterView } from "../pages/characters/View";
import { View as CharacterDetailView } from "../pages/CharacterDetail/View";
import { View as EpisodeDetail } from "../pages/episodeDetail/View";

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
    path: "characters/:status",
    element: <CharacterView />,
  },
];

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="characters/all" replace />} />

        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Route>
      <Route>
        <Route
          path="characters/details/:id"
          element={<CharacterDetailView />}
        />

        <Route
          path="episodes/details/:id"
          element={<EpisodeDetail />}
        />
      </Route>
    </Routes>
  );
};
