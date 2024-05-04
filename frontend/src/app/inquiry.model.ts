export interface Inquiry {
  id: number | null;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string | null;
  created_at: string | null;
  updated_at: string | null;
  expanded?: boolean;
}
