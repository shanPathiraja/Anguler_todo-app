export class User {
  id: number;
  name: string;
  username: boolean;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lang: string;
    };
  };
}
