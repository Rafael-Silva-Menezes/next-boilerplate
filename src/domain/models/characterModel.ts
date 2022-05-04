type LocationModel = {
  name: string;
  url: string;
};

export type CharacterModel = {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: LocationModel;
  location: LocationModel;
  image: string;
  url: string;
};
