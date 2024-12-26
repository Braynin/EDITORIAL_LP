export class OfferOption {
  id: string;
  imgUrl: string;
  link: string;
  constructor(id: string, imgUrl: string, link: string) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.link = link;
  }
}

export const offerOptions: OfferOption[] = [
  {
    id: "1",
    imgUrl: "public/OFERTAS/OFFER_CPTR_CCTR.jpeg",
    link: "/details?id=23",
  },
  {
    id: "2",
    imgUrl: "public/OFERTAS/OFFER_DPPG.png",
    link: "/details?id=18",
  },
];

export const offerOptionsMobile: OfferOption[] = [
  {
    id: "1",
    imgUrl:
      "public/OFERTAS/OFFER_CPTR_CCTR.jpeg",
    link: "/details?id=23",
  },
  {
    id: "2",
    imgUrl: "public/OFERTAS/OFFER_DPPG.png",
    link: "/details?id=18",
  },
];
