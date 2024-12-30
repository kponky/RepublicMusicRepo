export interface ITicket {
  id: number;
  meta_key: string;
  meta_value: string;
  title_name: string;
  description: string;
  entity_featured_url: string;
  meta_data: {
    ticket_cost: string;
    ticket_type: string;
    ticket_date_time: string;
    ticket_status_comments: string;
    member_phone_number: string;
    member_city_of_origin: string;
    member_state_of_origin: string;
    member_country_of_origin: string;
    member_type: string;
    artist_name: string;
    artist_email: string;
    artist_description: string;
    artist_website: string;
    management_name: string;
    management_email: string;
    management_phone_number: string;
    management_address: string;
  };
  created_at: string;
  updated_at: string;
}
