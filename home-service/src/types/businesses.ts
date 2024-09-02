interface Image {
  url: string;
}

export interface Business {
  imageUrls: any;
  _id: string;
  name: string;
  about?: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: Image[];
}
