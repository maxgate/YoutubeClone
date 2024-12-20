export interface InitialState {
  videos: HomePageVideos[];
  currentPlaying: CureentPlaying | null;
  searchTerm: string;
  searchReasults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface CureentPlaying {}
export interface RecommendedVideos {}
