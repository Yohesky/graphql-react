interface Track {
  path: string;
  data: {
    [x: string]: unknown;
  };
}

export class TrackBuilder {
  private mainData: Track;
  constructor(path: string) {
    this.mainData = {
      path,
      data: {},
    };
  }

  setPath(path: string) {
    this.mainData.path = path;
    return this;
  }

  setView(
    view: "characters" | "character-detail" | "episodes" | "episode-detail"
  ) {
    this.mainData.data.view = view;
    return this;
  }

  setTime(time: number) {
    this.mainData.data.time = time;
    return this;
  }

  setLocation(location: string) {
    this.mainData.data.location = location;
    return this;
  }

  setAdditional(key: string, value: string) {
    this.mainData.data[key] = value;
    return this;
  }

  clone() {
    const mainDataClone = structuredClone(this.mainData);

    const cloned = new TrackBuilder(this.mainData.path);
    cloned.mainData = mainDataClone;
    return cloned;
  }

  build() {
    return this.mainData;
  }
}
