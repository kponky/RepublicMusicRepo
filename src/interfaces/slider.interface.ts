export interface ISlider {
  id: number;
  meta_key: string;
  meta_value: string;
  title_name: string;
  description: string;
  entity_featured_url: string;
  meta_data: {
    slider_button_url: string;
  };
  owned_by: string | null;
  added_by: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}
