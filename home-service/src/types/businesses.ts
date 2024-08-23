interface Image {
    url: string;
  }
  
  export interface Business {
    _id: string;
    name: string;
    about?: string;
    address: string;
    category: string;
    contactPerson: string;
    email: string;
    images: Image[];
  }