export interface ConvertedSearchDataInterface {
  dateFrom?: string | undefined;
  dateTo?: string | undefined;
  location?: string;
  name?: string;
  guests?: number;
}

export interface SearchFormMainProps {
  onSearch: (data: ConvertedSearchDataInterface) => void;
}
