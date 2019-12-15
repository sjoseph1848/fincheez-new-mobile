// export interface Stock {
//     symbol: string;
//     profile: Profile;
//   }
// export interface Profile {
//     price: number;
//     beta: string;
//     volAvg: string;
//     mktCap: string;
//     lastDiv: string;
//     range: string;
//     changes: number;
//     changesPercentage: string;
//     companyName: string;
//     exchange: string;
//     industry: string;
//     website: string;
//     description: string;
//     ceo: string;
//     sector: string;
//     image: string;
//   }


  export interface Stock {
      symbolsList: SymbolsList[];
    }

  export interface SymbolsList {
    symbol: string;
    name: string;
    price: number;
    }