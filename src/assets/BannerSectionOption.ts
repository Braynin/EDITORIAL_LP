class BannerSection {
  img: string;
  section: string;

  constructor(img: string, section: string) {
    this.img = img;
    this.section = section;
  }
}

/* Objects */
const bannerSection1 = new BannerSection(
  "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_ADMINISTRATIVO.jpg",
  "Administrativo"
);
const bannerSection2 = new BannerSection(
  "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_CIVIL.jpg",
  "Civil"
);
const bannerSection3 = new BannerSection(
  "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_PENAL.jpg",
  "Penal"
);
const bannerSection4 = new BannerSection(
  "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_FAMILIA.jpg",
  "Familia"
);
const bannerSection5 = new BannerSection(
  "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_CONSTITUCIONAL.jpg",
  "Constitucional"
);
const bannerSection6 = new BannerSection(
  "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_OFERTAS.jpg",
  "Ofertas"
);

export const arrayBannerSections: BannerSection[] = [
  bannerSection1,
  bannerSection2,
  bannerSection3,
  bannerSection4,
  bannerSection5,
  bannerSection6,
];


