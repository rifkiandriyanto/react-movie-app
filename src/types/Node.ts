export interface Node {
  data: {
    average_rating: NumberConstructor;
    backdrop_path: string;
    comments: Record<string, string>;
    created_by: {
      gravatar_hash: string;
      id: string;
      name: string;
      username: string;
    };
    description: string;
    id: number;
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    object_ids: Record<string, string>;
    page: number;
    poster_path: string;
    public: boolean;
    results: [
      {
        adult: boolean;
        backdrop_path: string;
        genre_ids: Array<number>;
        id: number;
        media_type: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }
    ];
    revenue: number;
    runtime: number;
    sort_by: string;
    total_pages: number;
    total_results: number;
  };
  loading: boolean;
}
