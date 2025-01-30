export interface IVideo {
  id: number;
  meta_key: string;
  meta_value: string;
  title_name: string;
  description: string;
  entity_featured_url: string;
  meta_data: {
    image_placeholder_url: string;
  };
  created_at: string;
  updated_at: string;
}