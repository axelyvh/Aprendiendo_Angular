interface BillClient {
  documentNumber: string;
  fullName: string;
}

interface BillProduct {
  product: string;
  quantity: number;
  price: number;
}

export interface Bill {
  id: number;
  client: BillClient;
  products: BillProduct[];
}
