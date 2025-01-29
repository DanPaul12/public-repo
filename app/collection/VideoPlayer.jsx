"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  useMediaRemote,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

export default function VideoPlayer({ src, title, poster }) {
  const remote = useMediaRemote();

  return (
    <MediaPlayer
      src={src}
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin
      playsInline
      title={title}
      poster={poster}
      className="aspect-[9/16]"
    >
      <MediaProvider>
        <Poster className="vds-poster" />
      </MediaProvider>
      <DefaultVideoLayout
        thumbnails={poster}
        icons={defaultLayoutIcons}
        className="font-inter aspect-[9/16]"
        slots={{
          googleCastButton: null,
          pipButton: null,
          fullscreenButton: null,
          settingsMenu: null,
        }}
      />
    </MediaPlayer>
  );
}
