export interface ISiteInfo {
  id: number;
  meta_key: string;
  meta_value: string;
  title_name: string;
  description: string;
  entity_featured_url: string;
  meta_data: IMetaData;
}

export interface IMetaData {
  privacy_policy_url: string;
  terms_and_conditions_url: string;
  do_not_sell_my_personal_information_url: string;
  instagram_url: string;
  tiktok_url: string;
  x_url: string;
  facebook_url: string;
  tumbr_url: string;
  spotify_url: string;
  youtube_url: string;
  contact_form_message: string;
}
