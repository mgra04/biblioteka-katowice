import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const galleryItems = [
    {
      imageUrl: "/branches/gallery/gallery-placeholder1.webp",
      imageAlt: "A group of people sitting at an event held at the library",
    },
    {
      imageUrl: "/branches/gallery/gallery-placeholder2.webp",
      imageAlt:
        "A group of children sitting on the carpet during a book reading activity",
    },
    {
      imageUrl: "/branches/gallery/gallery-placeholder3.webp",
      imageAlt:
        "A man presenting a typewriter to the gathered audience during an event in the library",
    },
  ];

  const branch1 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch1.webp",
      branchImageAlt: "Photo of the first library branch in Katowice",
      branchSlug: "filia-1",
      branchNumber: "1",
      branchName: "Filia nr 1",
      branchDirector: "mgr Bożena Kopeć",
      branchPhone: "322 513 047",
      branchEmail: "filia1@mbp.katowice.pl",
      branchAddressArea: "Katowice - Śródmieście",
      branchAddressCode: "40-036",
      branchAddressStreet: "Ligonia 7",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+1/@50.253385,19.0156471,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce4f4bd0768f:0xe89c412bb04cb0c1!8m2!3d50.253385!4d19.018222!16s%2Fg%2F1v3gqnby?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.253385,
      branchLongitude: 19.0156471,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch1.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch1.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch1.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch1.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch1.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch1.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch1.id },
    ],
  });

  const offer1 = await prisma.offer.create({
    data: {
      branchId: branch1.id,
    },
  });

  const mainOfferItem1 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dorosłych i Oddział Książki Mówionej dla dzieci i dorosłych",
      offerId: offer1.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem1.id,
        offerId: offer1.id,
      },
      {
        text: "Książka Mówiona - audiobooki",
        parentId: mainOfferItem1.id,
        offerId: offer1.id,
      },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe przystosowane dla osób z dysfunkcją wzroku",
        offerId: offer1.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer1.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer1.id },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer1.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dorosłych",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer1.id,
      },
      {
        linkText: "Nie-Zwykli",
        text: " - cykl spotkań",
        linkUrl: "/ogloszenia/nie-zwykli",
        offerId: offer1.id,
      },
    ],
  });

  const branch2 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch3.webp",
      branchImageAlt: "Photo of the third library branch in Katowice",
      branchSlug: "filia-3",
      branchNumber: "3",
      branchName: "Filia nr 3",
      branchDirector: "mgr Justyna Zięba",
      branchPhone: "322-545-969",
      branchEmail: "filia3@mbp.katowice.pl",
      branchAddressArea: "Katowice - Załęże",
      branchAddressCode: "40-854",
      branchAddressStreet: "Gliwicka 93",
      branchFacebookLink: "https://www.facebook.com//MBPKatowiceFilia3",
      branchInstagramLink: "https://www.instagram.com/wyzszypoziom/?hl=pl",
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+3/@50.2644846,18.9986188,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce146277f817:0xe697c604e96c3ae1!8m2!3d50.2644846!4d19.0011937!16s%2Fg%2F1thhj7g7?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2644846,
      branchLongitude: 18.9986188,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch2.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch2.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch2.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch2.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch2.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch2.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch2.id },
    ],
  });

  const offer2 = await prisma.offer.create({
    data: {
      branchId: branch2.id,
    },
  });

  const mainOfferItem2 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer2.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem2.id,
        offerId: offer2.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem2.id, offerId: offer2.id },
      { text: "Komiksy", parentId: mainOfferItem2.id, offerId: offer2.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer2.id,
      },
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer2.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer2.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci, młodzieży i osób ze specjalnymi potrzebami",
        offerId: offer2.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dorosłych",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer2.id,
      },
      {
        text: "Klikam, surfuję, mailuję - konsultacje komputerowe dla seniorów",
        offerId: offer2.id,
      },
      {
        text: "Klub Komiksu i Książki Ilustrowanej - cykliczne spotkania dla młodzieży i studentów",
        offerId: offer2.id,
      },
    ],
  });

  const branch3 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch4.webp",
      branchImageAlt: "Photo of the fourth library branch in Katowice",
      branchSlug: "filia-4",
      branchNumber: "4",
      branchName: "Filia nr 4",
      branchDirector: "mgr Anna Goryczka",
      branchPhone: "322 511 186",
      branchEmail: "filia4@mbp.katowice.pl",
      branchAddressArea: "Katowice - Śródmieście",
      branchAddressCode: "40-055",
      branchAddressStreet: "ul. Poniatowskiego 14",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+4/@50.2518903,19.0061843,656m/data=!3m3!1e3!4b1!5s0x4716ce449318d1cb:0xe4d39c2b0bf7a4a8!4m6!3m5!1s0x4716ce44e71e6447:0x2f57484eb9dc2495!8m2!3d50.2518903!4d19.0087592!16s%2Fg%2F1vg6sgtm?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2518903,
      branchLongitude: 19.0061843,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch3.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch3.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch3.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch3.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch3.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch3.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch3.id },
    ],
  });

  const offer3 = await prisma.offer.create({
    data: {
      branchId: branch3.id,
    },
  });

  const mainOfferItem3 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i młodzieży oraz dorosłych",
      offerId: offer3.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa dla dzieci",
        parentId: mainOfferItem3.id,
        offerId: offer3.id,
      },
      {
        text: "Literatura piękna dla dorosłych",
        parentId: mainOfferItem3.id,
        offerId: offer3.id,
      },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer3.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer3.id,
      },
    ],
  });

  const branch4 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch5.webp",
      branchImageAlt: "Photo of the fifth library branch in Katowice",
      branchSlug: "filia-5",
      branchNumber: "5",
      branchName: "Filia nr 5",
      branchDirector: "mgr Diana Stenzel",
      branchPhone: "322 527 216",
      branchEmail: "filia5ml@mbp.katowice.pl",
      branchAddressArea: "Katowice - Ligota",
      branchAddressCode: "40-708",
      branchAddressStreet: "Braci Mniejszych 2",
      branchFacebookLink: null,
      branchInstagramLink:
        "https://www.instagram.com/biblioteka.katowice.filia5",
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+5/@50.2312537,18.9616221,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cff944535ec7:0xb3289c19d5f17f6!8m2!3d50.2312537!4d18.964197!16s%2Fg%2F11fkwg4jfn?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2312537,
      branchLongitude: 18.9616221,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch4.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch4.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch4.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch4.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch4.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch4.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch4.id },
    ],
  });

  const offer4 = await prisma.offer.create({
    data: {
      branchId: branch4.id,
    },
  });

  const mainOfferItem4 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer4.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem4.id,
        offerId: offer4.id,
      },
      {
        text: "Audiobooki dla dzieci",
        parentId: mainOfferItem4.id,
        offerId: offer4.id,
      },
      { text: "Komiksy", parentId: mainOfferItem4.id, offerId: offer4.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer4.id,
      },
      {
        text: "Środa z bajką - cykl spotkań dla najmłodszych",
        offerId: offer4.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer4.id },
      {
        text: "Strefa interaktywna i multimedialna dla najmłodszych",
        offerId: offer4.id,
      },
    ],
  });

  const branch5 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch6.webp",
      branchImageAlt: "Photo of the sixth library branch in Katowice",
      branchSlug: "filia-6",
      branchNumber: "6",
      branchName: "Filia nr 6",
      branchDirector: "mgr Anna Skorupa",
      branchPhone: "322 041 171",
      branchEmail: "filia6@mbp.katowice.pl",
      branchAddressArea: "Katowice Wełnowiec - Józefowiec",
      branchAddressCode: "40-149",
      branchAddressStreet: "Braci Mniejszych 2",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia6",
      branchInstagramLink: null,
      branchWebsiteLink: "https://filia6mbp-katowice.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+6/@50.2853697,19.007347,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716d1e31314e9e3:0x4891ee4f6d272430!8m2!3d50.2853697!4d19.0099219!16s%2Fg%2F1tdjvrzl?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2853697,
      branchLongitude: 19.007347,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11.30",
        closeTime: "19:00",
        branchId: branch5.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11.30",
        closeTime: "19:00",
        branchId: branch5.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11.30",
        closeTime: "19:00",
        branchId: branch5.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch5.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch5.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch5.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch5.id },
    ],
  });

  const offer5 = await prisma.offer.create({
    data: {
      branchId: branch5.id,
    },
  });

  const mainOfferItem5 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer5.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem5.id,
        offerId: offer5.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem5.id, offerId: offer5.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer5.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer5.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer5.id },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer5.id,
      },
      {
        linkText: "Dojrzały Internauta w bibliotece",
        linkUrl: "/ogloszenia/dojrzaly-internauta-w-bibliotece",
        text: "- warsztaty z obsługi komputera dla seniorów",
        offerId: offer5.id,
      },
    ],
  });

  const branch6 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch7.webp",
      branchImageAlt: "Photo of the seventh library branch in Katowice",
      branchSlug: "filia-7",
      branchNumber: "7",
      branchName: "Filia nr 7",
      branchDirector: "mgr Beata Jadach - Zygadło",
      branchPhone: "322 525 120",
      branchEmail: "filia7@mbp.katowice.pl",
      branchAddressArea: "Katowice Wełnowiec - Józefowiec",
      branchAddressCode: "40-714",
      branchAddressStreet: "Franciszkańska 25",
      branchFacebookLink: null,
      branchInstagramLink:
        "https://www.instagram.com/biblioteka.katowice.filia7",
      branchWebsiteLink: "https://www.glogi75.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+7/@50.2279477,18.9718442,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce941c2b775f:0xae1915ca5b453b9!8m2!3d50.2279477!4d18.9744191!16s%2Fg%2F1tfqdj_z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2279477,
      branchLongitude: 18.9718442,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch6.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch6.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch6.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch6.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch6.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch6.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch6.id },
    ],
  });

  const offer6 = await prisma.offer.create({
    data: {
      branchId: branch6.id,
    },
  });

  const mainOfferItem6 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dorosłych",
      offerId: offer6.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem6.id,
        offerId: offer6.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem6.id, offerId: offer6.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer6.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer6.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne w przedszkolach",
        offerId: offer6.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dorosłych",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer6.id,
      },
      {
        text: "Komputerowe abecadło - zajęcia komputerowe dla seniorów",
        offerId: offer6.id,
      },
    ],
  });

  const branch7 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch8.webp",
      branchImageAlt: "Photo of the eighth library branch in Katowice",
      branchSlug: "filia-8",
      branchNumber: "8",
      branchName: "Filia nr 8",
      branchDirector: "Danuta Fajkis",
      branchPhone: "322 521 800",
      branchEmail: "filia8@mbp.katowice.pl",
      branchAddressArea: "Katowice - Brynów",
      branchAddressCode: "40-584",
      branchAddressStreet: "Brynowska 53a",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+8/@50.2335295,18.993042,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cef178036a11:0xb9378f936bb9f466!8m2!3d50.2335295!4d18.9956169!16s%2Fg%2F1vnrpbw2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2335295,
      branchLongitude: 18.993042,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch7.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch7.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch7.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch7.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch7.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch7.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch7.id },
    ],
  });

  const offer7 = await prisma.offer.create({
    data: {
      branchId: branch7.id,
    },
  });

  const mainOfferItem7 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dorosłych",
      offerId: offer7.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem7.id,
        offerId: offer7.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem7.id, offerId: offer7.id },
      { text: "Czasopisma", parentId: mainOfferItem7.id, offerId: offer7.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer7.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer7.id,
      },
    ],
  });

  const branch8 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch9.webp",
      branchImageAlt: "Photo of the ninth library branch in Katowice",
      branchSlug: "filia-9",
      branchNumber: "9",
      branchName: "Filia nr 9",
      branchDirector: "mgr Agnieszka Krusiec",
      branchPhone: "322 028 393",
      branchEmail: "filia9@mbp.katowice.pl",
      branchAddressArea: "Katowice - Piotrowice",
      branchAddressCode: "40-684",
      branchAddressStreet: "gen. Jankego 183",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia9",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+9/@50.2082709,18.9711946,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ceca281d4317:0x41e9cf97eeb9c45f!8m2!3d50.2082709!4d18.9737695!16s%2Fg%2F1vspq7h0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2082709,
      branchLongitude: 18.9711946,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch8.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch8.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch8.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch8.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch8.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch8.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch8.id },
    ],
  });

  const offer8 = await prisma.offer.create({
    data: {
      branchId: branch8.id,
    },
  });

  const mainOfferItem8 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dorosłych",
      offerId: offer8.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem8.id,
        offerId: offer8.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem8.id, offerId: offer8.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer8.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer8.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer8.id },
    ],
  });

  const branch9 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch10.webp",
      branchImageAlt: "Photo of the tenth library branch in Katowice",
      branchSlug: "filia-10",
      branchNumber: "10",
      branchName: "Filia nr 10",
      branchDirector: "mgr Daria Szlachetka",
      branchPhone: "322 065 544",
      branchEmail: "filia10@mbp.katowice.pl",
      branchAddressArea: "Katowice - Ochojec",
      branchAddressCode: "40-645",
      branchAddressStreet: "Radockiego 70a",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia10",
      branchInstagramLink: null,
      branchWebsiteLink: "https://filia10.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+10/@50.2061585,18.9855829,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ced171d4c5dd:0xd84e5f4056338c47!8m2!3d50.2061585!4d18.9881578!16s%2Fg%2F1v44p4jg?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2061585,
      branchLongitude: 18.9855829,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch9.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch9.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch9.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch9.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch9.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch9.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch9.id },
    ],
  });

  const offer9 = await prisma.offer.create({
    data: {
      branchId: branch9.id,
    },
  });

  const mainOfferItem9 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer9.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem9.id,
        offerId: offer9.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem9.id, offerId: offer9.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer9.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer9.id,
      },
      {
        text: "Warsztaty komputerowe dla seniorów - zajęcia indywidualne",
        offerId: offer9.id,
      },
      {
        text: "Biblioteczny Klub Gier Dziesiątka - indywidualne zajęcia multimedialne dla dzieci",
        offerId: offer9.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer9.id },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer9.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer9.id,
      },
      { text: "Ksero", offerId: offer9.id },
    ],
  });

  const branch10 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch11.webp",
      branchImageAlt: "Photo of the eleventh library branch in Katowice",
      branchSlug: "filia-11",
      branchNumber: "11",
      branchName: "Filia nr 11",
      branchDirector: "mgr Katarzyna Okoń",
      branchPhone: "322 584 992",
      branchEmail: "filia11@mbp.katowice.pl",
      branchAddressArea: "Katowice - Koszutka",
      branchAddressCode: "40-126",
      branchAddressStreet: "Grażyńskiego 47",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia11",
      branchInstagramLink: "https://www.instagram.com/filia11.mbp.katowice",
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+11/@50.2681215,19.0147294,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce3c96b5f55b:0x11d03c62ab698e51!8m2!3d50.2681215!4d19.0173043!16s%2Fg%2F1tl1gmgw?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2681215,
      branchLongitude: 19.0147294,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch10.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch10.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch10.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch10.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch10.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch10.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch10.id },
    ],
  });

  const offer10 = await prisma.offer.create({
    data: {
      branchId: branch10.id,
    },
  });

  const mainOfferItem10 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer10.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem10.id,
        offerId: offer10.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem10.id, offerId: offer10.id },
      { text: "Audiobooki", parentId: mainOfferItem10.id, offerId: offer10.id },
      { text: "Komiksy", parentId: mainOfferItem10.id, offerId: offer10.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer10.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer10.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer10.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer10.id },
      {
        text: "BOOKowanie - klub czytelniczy dla dorosłych",
        offerId: offer10.id,
      },
      {
        linkText: "Zróbmy to razem",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- cykliczne zajęcia plastyczne",
        offerId: offer10.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer10.id,
      },
      {
        linkText: "Wielokulturowy Śląsk",
        linkUrl: "/ogloszenia/wielokulturowy-slask",
        text: "- cykl spotkań",
        offerId: offer10.id,
      },
    ],
  });

  const branch11 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch12.webp",
      branchImageAlt: "Photo of the twelfth library branch in Katowice",
      branchSlug: "filia-12",
      branchNumber: "12",
      branchName: "Filia nr 12",
      branchDirector: "Iwona Kiszel",
      branchPhone: "322 545 853",
      branchEmail: "filia12@mbp.katowice.pl",
      branchAddressArea: "Katowice - Witosa",
      branchAddressCode: "40-832",
      branchAddressStreet: "Witosa 18B",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia12",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+12/@50.258436,18.9684584,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cdd850e6bc07:0xdfeb41bc1dfc6418!8m2!3d50.258436!4d18.9710333!16s%2Fg%2F11clsy4twq?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.258436,
      branchLongitude: 18.9684584,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch11.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch11.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch11.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch11.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch11.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch11.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch11.id },
    ],
  });

  const offer11 = await prisma.offer.create({
    data: {
      branchId: branch11.id,
    },
  });

  const mainOfferItem11 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer11.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem11.id,
        offerId: offer11.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem11.id, offerId: offer11.id },
      { text: "Czasopisma", parentId: mainOfferItem11.id, offerId: offer11.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer11.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer11.id },
      {
        linkText: "Dyskusyjny Klub Książki dla dzieci",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer11.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer11.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer11.id,
      },
      { text: "Ksero", offerId: offer11.id },
    ],
  });

  const branch12 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch13.webp",
      branchImageAlt: "Photo of the thirteenth library branch in Katowice",
      branchSlug: "filia-13",
      branchNumber: "13",
      branchName: "Filia nr 13",
      branchDirector: "mgr Aleksandra Gałuszka",
      branchPhone: "322 539 322",
      branchEmail: "filia13@mbp.katowice.pl",
      branchAddressArea: "Katowice - Śródmieście",
      branchAddressCode: "40-098",
      branchAddressStreet: "Młyńska 5",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia13",
      branchInstagramLink:
        "https://www.instagram.com/biblioteka.katowice.filia13",
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+13/@50.2588559,19.017818,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce37f9235d19:0x11c9848b33beaa46!8m2!3d50.2588559!4d19.0203929!16s%2Fg%2F1tcv9ms6?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2588559,
      branchLongitude: 19.017818,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch12.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch12.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch12.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch12.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch12.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch12.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch12.id },
    ],
  });

  const offer12 = await prisma.offer.create({
    data: {
      branchId: branch12.id,
    },
  });

  const mainOfferItem12 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dorosłych",
      offerId: offer12.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem12.id,
        offerId: offer12.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem12.id, offerId: offer12.id },
      { text: "Komiksy", parentId: mainOfferItem12.id, offerId: offer12.id },
      { text: "Czasopisma", parentId: mainOfferItem12.id, offerId: offer12.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer12.id,
      },
      {
        text: "Pomyszkuj w Internecie - kurs komputerowy dla seniorów",
        offerId: offer12.id,
      },
      {
        text: "Porozmawiajmy o książkach - klub czytelniczy dla dorosłych",
        offerId: offer12.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer12.id,
      },
      { text: "Ksero", offerId: offer12.id },
    ],
  });

  const branch13 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch14.webp",
      branchImageAlt: "Photo of the fourteenth library branch in Katowice",
      branchSlug: "filia-14",
      branchNumber: "14",
      branchName: "Filia nr 14",
      branchDirector: "Grażyna Szcześniak-Richter",
      branchPhone: "322 542 276",
      branchEmail: "filia14@mbp.katowice.pl",
      branchAddressArea: "Katowice - os. Tysiąclecia",
      branchAddressCode: "40-868",
      branchAddressStreet: "Piastów 20",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia14",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+14/@50.2727187,18.9826574,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce08f60da553:0x96ca60e3f642bc56!8m2!3d50.2727187!4d18.9852323!16s%2Fg%2F1tp26075?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2727187,
      branchLongitude: 18.9826574,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch13.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch13.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch13.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch13.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch13.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch13.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch13.id },
    ],
  });

  const offer13 = await prisma.offer.create({
    data: {
      branchId: branch13.id,
    },
  });

  const mainOfferItem13 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer13.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem13.id,
        offerId: offer13.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem13.id, offerId: offer13.id },
      { text: "Audiobooki", parentId: mainOfferItem13.id, offerId: offer13.id },
      { text: "Komiksy", parentId: mainOfferItem13.id, offerId: offer13.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer13.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer13.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer13.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer13.id },
      {
        linkText: "Dyskusyjny Klub Książki dla dzieci",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer13.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer13.id,
      },
      {
        text: "Konwersatoria języka angielskiego dla dorosłych",
        offerId: offer13.id,
      },
      {
        text: "(Nie) książkowe pogadanki - forum czytelnicze dla dorosłych",
        offerId: offer13.id,
      },
    ],
  });

  const branch14 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch15.webp",
      branchImageAlt: "Photo of the fifteenth library branch in Katowice",
      branchSlug: "filia-15",
      branchNumber: "15",
      branchName: "Filia nr 15",
      branchDirector: "Barbara Januszewicz",
      branchPhone: "322 560 216",
      branchEmail: "filia15@mbp.katowice.pl",
      branchAddressArea: "Katowice - Giszowiec",
      branchAddressCode: "40-466",
      branchAddressStreet: "Przyjazna 7a",
      branchFacebookLink: null,
      branchInstagramLink: "https://www.instagram.com/mbpkatowicefilia15",
      branchWebsiteLink: "https://filia15katowice.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+15/@50.2236514,19.0686722,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cf7c29f649b9:0x3aef3f6876d93367!8m2!3d50.2236514!4d19.0712471!16s%2Fg%2F1tjy070k?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2236514,
      branchLongitude: 19.0686722,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch14.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch14.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch14.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch14.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch14.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch14.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch14.id },
    ],
  });

  const offer14 = await prisma.offer.create({
    data: {
      branchId: branch14.id,
    },
  });

  const mainOfferItem14 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer14.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem14.id,
        offerId: offer14.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem14.id, offerId: offer14.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer14.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer14.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer14.id },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer14.id,
      },
      {
        linkText: "Ty potrafisz!",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- warsztaty plastyczne dla dzieci",
        offerId: offer14.id,
      },
    ],
  });

  const branch15 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch16.webp",
      branchImageAlt: "Photo of the sixteenth library branch in Katowice",
      branchSlug: "filia-16",
      branchNumber: "16",
      branchName: "Filia nr 16",
      branchDirector: "mgr Joanna Misielak",
      branchPhone: "322 587 182",
      branchEmail: "filia16@mbp.katowice.pl",
      branchAddressArea: "Katowice - Bogucice",
      branchAddressCode: "40-175",
      branchAddressStreet: "Wajdy 21",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia16",
      branchInstagramLink: null,
      branchWebsiteLink: "https://filia16.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+16/@50.2712829,19.0330103,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce2ebaf7efe7:0xeb56afb7827d89c3!8m2!3d50.2712829!4d19.0355852!16s%2Fg%2F1tfm060q?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2712829,
      branchLongitude: 19.0330103,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch15.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch15.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch15.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch15.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch15.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch15.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch15.id },
    ],
  });

  const offer15 = await prisma.offer.create({
    data: {
      branchId: branch15.id,
    },
  });

  const mainOfferItem15 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer15.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem15.id,
        offerId: offer15.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem15.id, offerId: offer15.id },
      { text: "Czasopisma", parentId: mainOfferItem15.id, offerId: offer15.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer15.id,
      },
      {
        linkText: "Tęcza",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- zajęcia plastyczne dla dzieci",
        offerId: offer15.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer15.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dzieci",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer15.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer15.id,
      },
      { text: "Ksero", offerId: offer15.id },
    ],
  });

  const branch16 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch17.webp",
      branchImageAlt: "Photo of the seventeenth library branch in Katowice",
      branchSlug: "filia-17",
      branchNumber: "17",
      branchName: "Filia nr 17",
      branchDirector: "mgr Anna Nowak",
      branchPhone: "694 424 510",
      branchEmail: "filia17@mbp.katowice.pl",
      branchAddressArea: "Katowice - Dąb",
      branchAddressCode: "40-111",
      branchAddressStreet: "Krzyżowa 1",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia17",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+17/@50.2776951,19.0030735,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce19537346a5:0x661dddef5638ebf7!8m2!3d50.2776951!4d19.0056484!16s%2Fg%2F11clssr4k_?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2776951,
      branchLongitude: 19.0030735,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch16.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch16.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch16.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch16.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch16.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch16.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch16.id },
    ],
  });

  const offer16 = await prisma.offer.create({
    data: {
      branchId: branch16.id,
    },
  });

  const mainOfferItem16 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer16.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem16.id,
        offerId: offer16.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem16.id, offerId: offer16.id },
      { text: "Audiobooki", parentId: mainOfferItem16.id, offerId: offer16.id },
      { text: "Komiksy", parentId: mainOfferItem16.id, offerId: offer16.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer16.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer16.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci i osób ze specjalnymi potrzebami",
        offerId: offer16.id,
      },
      {
        linkText: "Kreatywna Biblioteka",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- warsztaty literacko-artystyczne dla dzieci",
        offerId: offer16.id,
      },
    ],
  });

  const branch17 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch18.webp",
      branchImageAlt: "Photo of the eighteenth library branch in Katowice",
      branchSlug: "filia-18",
      branchNumber: "18",
      branchName: "Filia nr 18",
      branchDirector: "mgr Agnieszka Mazur",
      branchPhone: "323 586 631",
      branchEmail: "filia18@mbp.katowice.pl",
      branchAddressArea: "Katowice - Ligota",
      branchAddressCode: "40-743",
      branchAddressStreet: "Studencka 16",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia38",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+18/@50.2158071,18.9565213,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cebaae8037f3:0x6a7fb7a23711da77!8m2!3d50.2158071!4d18.9590962!16s%2Fg%2F11c6q4z99t?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2158071,
      branchLongitude: 18.9565213,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch17.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch17.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch17.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch17.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch17.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch17.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch17.id },
    ],
  });

  const offer17 = await prisma.offer.create({
    data: {
      branchId: branch17.id,
    },
  });

  const mainOfferItem17 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer17.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem17.id,
        offerId: offer17.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem17.id, offerId: offer17.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer17.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer17.id },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer17.id,
      },
      { text: "Ksero", offerId: offer17.id },
    ],
  });

  const branch18 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch19.webp",
      branchImageAlt: "Photo of the nineteenth library branch in Katowice",
      branchSlug: "filia-19",
      branchNumber: "19",
      branchName: "Filia nr 19",
      branchDirector: "mgr Dorota Baca-Pakuła",
      branchPhone: "322 569 983",
      branchEmail: "filia19@mbp.katowice.pl",
      branchAddressArea: "Katowice Szopienice - Giszowiec",
      branchAddressCode: "40-336",
      branchAddressStreet: "Obrońców Westerplatte 10",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia19",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+19/@50.2636573,19.0923096,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cffc26a57929:0x3d59638cc56172e4!8m2!3d50.2636573!4d19.0948845!16s%2Fg%2F1vs1qm4k?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2636573,
      branchLongitude: 19.0923096,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch18.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch18.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch18.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch18.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch18.id,
      },
      { day: "Sobota", isOpen: false, branchId: branch18.id },
      { day: "Niedziela", isOpen: false, branchId: branch18.id },
    ],
  });

  const offer18 = await prisma.offer.create({
    data: {
      branchId: branch18.id,
    },
  });

  const mainOfferItem18 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer18.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem18.id,
        offerId: offer18.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem18.id, offerId: offer18.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer18.id,
      },
      {
        linkText: "Art Zone",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- warsztaty plastyczne z elementami języka angielskiego",
        offerId: offer18.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer18.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer18.id,
      },
    ],
  });

  const branch19 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch20.webp",
      branchImageAlt: "Photo of the twentieth library branch in Katowice",
      branchSlug: "filia-20",
      branchNumber: "20",
      branchName: "Filia nr 20",
      branchDirector: "mgr Małgorzata Dzierzanowska",
      branchPhone: "322 566 484",
      branchEmail: "filia20@mbp.katowice.pl",
      branchAddressArea: "Katowice - Dąbrówka Mała",
      branchAddressCode: "40-308",
      branchAddressStreet: "Strzelców Bytomskich 21B",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia20",
      branchInstagramLink: null,
      branchWebsiteLink: "https://www.filia20mbpkatowice.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+20/@50.2782898,19.0659328,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716d025b4383d61:0xf0e7e834e9009f00!8m2!3d50.2782898!4d19.0685077!16s%2Fg%2F1trtt1c6?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2782898,
      branchLongitude: 19.0659328,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch19.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch19.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch19.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch19.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch19.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch19.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch19.id },
    ],
  });

  const offer19 = await prisma.offer.create({
    data: {
      branchId: branch19.id,
    },
  });

  const mainOfferItem19 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer19.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem19.id,
        offerId: offer19.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem19.id, offerId: offer19.id },
      { text: "Czasopisma", parentId: mainOfferItem19.id, offerId: offer19.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer19.id,
      },
      {
        linkText: "Klub Gier Planszowych",
        linkUrl: "/ogloszenia/klub-gier-planszowych",
        offerId: offer19.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci i osób ze szczególnymi potrzebami",
        offerId: offer19.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer19.id,
      },
    ],
  });

  const branch20 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch21.webp",
      branchImageAlt: "Photo of the twenty-first library branch in Katowice",
      branchSlug: "filia-21",
      branchNumber: "21",
      branchName: "Filia nr 21",
      branchDirector: "mgr Dorota Gorczyńska",
      branchPhone: "322 557 292",
      branchEmail: "filia21@mbp.katowice.pl",
      branchAddressArea: "Katowice - Janów",
      branchAddressCode: "40-413",
      branchAddressStreet: "Zamkowa 45",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: "https://filia21.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+21/@50.2414534,19.0881724,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716c56188709341:0xe662cdc15130864a!8m2!3d50.2414534!4d19.0907473!16s%2Fg%2F1tm0rx78?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2414534,
      branchLongitude: 19.0881724,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch20.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch20.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch20.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch20.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch20.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch20.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch20.id },
    ],
  });

  const offer20 = await prisma.offer.create({
    data: {
      branchId: branch20.id,
    },
  });

  const mainOfferItem20 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer20.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem20.id,
        offerId: offer20.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem20.id, offerId: offer20.id },
      { text: "Czasopisma", parentId: mainOfferItem20.id, offerId: offer20.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer20.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer20.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci i osób ze szczególnymi potrzebami",
        offerId: offer20.id,
      },
    ],
  });

  const branch21 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch23.webp",
      branchImageAlt: "Photo of the twenty-third library branch in Katowice",
      branchSlug: "filia-23",
      branchNumber: "23",
      branchName: "Filia nr 23",
      branchDirector: "mgr Agnieszka Hańczyc",
      branchPhone: "322 551 838",
      branchEmail: "filia23@mbp.katowice.pl",
      branchAddressArea: "Katowice - os. Paderewskiego",
      branchAddressCode: "40-282",
      branchAddressStreet: "Paderewskiego 65",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia23",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+23/@50.2492776,19.0362629,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cfb151f5a1f1:0xdf2bf9e9537de68!8m2!3d50.2492776!4d19.0388378!16s%2Fg%2F1thhj7gn?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2492776,
      branchLongitude: 19.0362629,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch21.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch21.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch21.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch21.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch21.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch21.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch21.id },
    ],
  });

  const offer21 = await prisma.offer.create({
    data: {
      branchId: branch21.id,
    },
  });

  const mainOfferItem21 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer21.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem21.id,
        offerId: offer21.id,
      },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer21.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer21.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer21.id },
      {
        linkText: "Klub Gier Planszowych",
        linkUrl: "/ogloszenia/klub-gier-planszowych",
        offerId: offer21.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer21.id,
      },
      {
        text: "Nie tylko dzieci buszują w Sieci - warsztaty komputerowe dla seniorów",
        offerId: offer21.id,
      },
      {
        linkText: "Kredka",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- zajęcia plastyczne dla dzieci",
        offerId: offer21.id,
      },
    ],
  });

  const branch22 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch24.webp",
      branchImageAlt: "Photo of the twenty-fourth library branch in Katowice",
      branchSlug: "filia-24",
      branchNumber: "24",
      branchName: "Filia nr 24",
      branchDirector: "mgr Jolanta Tomasiak",
      branchPhone: "322 035 899",
      branchEmail: "filia24@mbp.katowice.pl",
      branchAddressArea: "Katowice - Zawodzie",
      branchAddressCode: "40-203",
      branchAddressStreet: "Al. Roździeńskiego 88A",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+24/@50.260209,19.0347682,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cfcb4d03e617:0xaaf937cb15232b8d!8m2!3d50.260209!4d19.0373431!16s%2Fg%2F1tcvgt_4?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.260209,
      branchLongitude: 19.0347682,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch22.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch22.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch22.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch22.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch22.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch22.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch22.id },
    ],
  });

  const offer22 = await prisma.offer.create({
    data: {
      branchId: branch22.id,
    },
  });

  const mainOfferItem22 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer22.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem22.id,
        offerId: offer22.id,
      },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer22.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer22.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer22.id },
    ],
  });

  const branch23 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch25.webp",
      branchImageAlt: "Photo of the twenty-fifth library branch in Katowice",
      branchSlug: "filia-25",
      branchNumber: "25",
      branchName: "Filia nr 25",
      branchDirector: "Katarzyna Napora",
      branchPhone: "322 544 206",
      branchEmail: "filia25@mbp.katowice.pl",
      branchAddressArea: "Katowice - os. Tysiąclecia",
      branchAddressCode: "40-881",
      branchAddressStreet: "Chrobrego 2",
      branchFacebookLink: null,
      branchInstagramLink:
        "https://www.instagram.com/biblioteka.katowice.filia25",
      branchWebsiteLink: "https://filia25.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+25/@50.2800201,18.9676536,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cdf0623d3f05:0x4513cbaeaac9e0f6!8m2!3d50.2800201!4d18.9702285!16s%2Fg%2F1tfcghpg?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2800201,
      branchLongitude: 18.9676536,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch23.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch23.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch23.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch23.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch23.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch23.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch23.id },
    ],
  });

  const offer23 = await prisma.offer.create({
    data: {
      branchId: branch23.id,
    },
  });

  const mainOfferItem23 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer23.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem23.id,
        offerId: offer23.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem23.id, offerId: offer23.id },
      { text: "Czasopisma", parentId: mainOfferItem23.id, offerId: offer23.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer23.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer23.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci i osób ze szczególnymi potrzebami",
        offerId: offer23.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dorosłych",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer23.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer23.id,
      },
    ],
  });

  const branch24 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch26.webp",
      branchImageAlt: "Photo of the twenty-sixth library branch in Katowice",
      branchSlug: "filia-26",
      branchNumber: "26",
      branchName: "Filia nr 26",
      branchDirector: "mgr Beata Bogdan",
      branchPhone: "322 556 260",
      branchEmail: "filia26@mbp.katowice.pl",
      branchAddressArea: "Katowice - Murcki",
      branchAddressCode: "40-749",
      branchAddressStreet: "Goetla 2",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia26",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+26/@50.202579,19.0405484,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cf4eeec867cb:0xc4d6445f639aafa8!8m2!3d50.202579!4d19.0431233!16s%2Fg%2F1vlk098r?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.202579,
      branchLongitude: 19.0405484,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch24.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch24.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch24.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch24.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch24.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch24.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch24.id },
    ],
  });

  const offer24 = await prisma.offer.create({
    data: {
      branchId: branch24.id,
    },
  });

  const mainOfferItem24 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer24.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem24.id,
        offerId: offer24.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem24.id, offerId: offer24.id },
      { text: "Czasopisma", parentId: mainOfferItem24.id, offerId: offer24.id },
      { text: "Komiksy", parentId: mainOfferItem24.id, offerId: offer24.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer24.id,
      },
      {
        text: "Pograjmy razem! - Biblioteczny Klub Gier Planszowych",
        offerId: offer24.id,
      },
      {
        text: "zGrana biblioteka - rozgrywki gier na PS4",
        offerId: offer24.id,
      },
      {
        text: "Zgrani seniorzy - rozmowy o książkach i grach planszowych",
        offerId: offer24.id,
      },
      { text: "Kameralne wieczory gier planszowych", offerId: offer24.id },
      {
        text: "Zajęcia i warsztaty literacko-edukacyjne dla dzieci i dorosłych",
        offerId: offer24.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer24.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer24.id,
      },
    ],
  });

  const branch25 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch27.webp",
      branchImageAlt: "Photo of the twenty-seventh library branch in Katowice",
      branchSlug: "filia-27",
      branchNumber: "27",
      branchName: "Filia nr 27",
      branchDirector: "mgr Anna Widuch",
      branchPhone: "322 094 429",
      branchEmail: "filia27@mbp.katowice.pl",
      branchAddressArea: "Katowice - Kostuchna",
      branchAddressCode: "40-750",
      branchAddressStreet: "Szarych Szeregów 62",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia27",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+27/@50.1927511,18.993149,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716c8d6a3ddff4f:0x1f0b6f8ea6a04515!8m2!3d50.1927511!4d18.9957239!16s%2Fg%2F1vy7f9tt?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.1927511,
      branchLongitude: 18.993149,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch25.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch25.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch25.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch25.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch25.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch25.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch25.id },
    ],
  });

  const offer25 = await prisma.offer.create({
    data: {
      branchId: branch25.id,
    },
  });

  const mainOfferItem25 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer25.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem25.id,
        offerId: offer25.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem25.id, offerId: offer25.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer25.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer25.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer25.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci i osób ze szczególnymi potrzebami",
        offerId: offer25.id,
      },
      {
        text: "Telefoniczne Kółko Komputerowe - poradnik komputerowy dla seniora",
        offerId: offer25.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer25.id,
      },
      { text: "Ksero", offerId: offer25.id },
    ],
  });

  const branch26 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch28.webp",
      branchImageAlt: "Photo of the twenty-eighth library branch in Katowice",
      branchSlug: "filia-28",
      branchNumber: "28",
      branchName: "Filia nr 28",
      branchDirector: "mgr Barbara Róg - Ryszka",
      branchPhone: "322 067 193",
      branchEmail: "filia28@mbp.katowice.pl",
      branchAddressArea: "Katowice - Kostuchna",
      branchAddressCode: "40-748",
      branchAddressStreet: "Uniczowska 36",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia28",
      branchInstagramLink: "https://www.instagram.com/filia28mbp.kato",
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+28/@50.17739,18.9637092,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716c91f7a58b2cd:0xb70eb9d2bbc2b2b5!8m2!3d50.17739!4d18.9662841!16s%2Fg%2F1tj908jg?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.17739,
      branchLongitude: 18.9637092,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch26.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch26.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch26.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch26.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch26.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch26.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch26.id },
    ],
  });

  const offer26 = await prisma.offer.create({
    data: {
      branchId: branch26.id,
    },
  });

  const mainOfferItem26 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer26.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem26.id,
        offerId: offer26.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem26.id, offerId: offer26.id },
      { text: "Czasopisma", parentId: mainOfferItem26.id, offerId: offer26.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer26.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer26.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer26.id },
    ],
  });

  const branch27 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch30.webp",
      branchImageAlt: "Photo of the thirtieth library branch in Katowice",
      branchSlug: "filia-30",
      branchNumber: "30",
      branchName: "Filia nr 30",
      branchDirector: "mgr Dominika Syrnicka-Hordejuk",
      branchPhone: "322 551 357",
      branchEmail: "filia30@mbp.katowice.pl",
      branchAddressArea: "Katowice - Śródmieście",
      branchAddressCode: "40-038",
      branchAddressStreet: "Rybnicka 11",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia30/",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+30/@50.249907,19.022414,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce4c52fea565:0x800cce8097fd20e7!8m2!3d50.249907!4d19.0249889!16s%2Fg%2F1tdk8tlz?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.249907,
      branchLongitude: 19.022414,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch27.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch27.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch27.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch27.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch27.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch27.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch27.id },
    ],
  });

  const offer27 = await prisma.offer.create({
    data: {
      branchId: branch27.id,
    },
  });

  const mainOfferItem27 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer27.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem27.id,
        offerId: offer27.id,
      },
      { text: "Czasopisma", parentId: mainOfferItem27.id, offerId: offer27.id },
      { text: "Komiksy", parentId: mainOfferItem27.id, offerId: offer27.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Wypożyczalnia gier planszowych",
        linkUrl: "/ogloszenia/regulamin-udostepniania-gier-planszowych",
        offerId: offer27.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer27.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer27.id,
      },
      {
        text: "Zajęcia literacko-edukacyjne dla dzieci i osób ze szczególnymi potrzebami",
        offerId: offer27.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dorosłych",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer27.id,
      },
      {
        linkText: "Fantazja",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- zajęcia plastyczne dla dzieci",
        offerId: offer27.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer27.id,
      },
    ],
  });

  const branch28 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch31.webp",
      branchImageAlt: "Photo of the thirty-first library branch in Katowice",
      branchSlug: "filia-31",
      branchNumber: "31",
      branchName: "Filia nr 31",
      branchDirector: "mgr Anna Górska",
      branchPhone: "322 090 508",
      branchEmail: "filia31@mbp.katowice.pl",
      branchAddressArea: "Katowice - Zawodzie",
      branchAddressCode: "40-233",
      branchAddressStreet: "Marcinkowskiego 4C",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: "https://filia31.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+31/@50.2612486,19.0568958,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cfc4e7677fdb:0xa46ce6a0011156b0!8m2!3d50.2612486!4d19.0594707!16s%2Fg%2F1tmz5p9p?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2612486,
      branchLongitude: 19.0568958,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch28.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch28.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch28.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch28.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch28.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch28.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch28.id },
    ],
  });

  const offer28 = await prisma.offer.create({
    data: {
      branchId: branch28.id,
    },
  });

  const mainOfferItem28 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer28.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem28.id,
        offerId: offer28.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem28.id, offerId: offer28.id },
      { text: "Czasopisma", parentId: mainOfferItem28.id, offerId: offer28.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer28.id,
      },
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer28.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer28.id },
    ],
  });

  const branch29 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch32.webp",
      branchImageAlt: "Photo of the thirty-second library branch in Katowice",
      branchSlug: "filia-32",
      branchNumber: "32",
      branchName: "Filia nr 32",
      branchDirector: "mgr Anna Madej",
      branchPhone: "322 521 789",
      branchEmail: "filia32@mbp.katowice.pl",
      branchAddressArea: "Katowice - Ligota",
      branchAddressCode: "40-560",
      branchAddressStreet: "Grzyśki 19a",
      branchFacebookLink: "https://www.facebook.com//MBPKatowiceFilia32",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+32/@50.23076,18.9775191,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce93b342c34b:0xdce9620a01c2fc34!8m2!3d50.23076!4d18.980094!16s%2Fg%2F1tdnjw0q?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.23076,
      branchLongitude: 18.9775191,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch29.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch29.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch29.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch29.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch29.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch29.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch29.id },
    ],
  });

  const offer29 = await prisma.offer.create({
    data: {
      branchId: branch29.id,
    },
  });

  const mainOfferItem29 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer29.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem29.id,
        offerId: offer29.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem29.id, offerId: offer29.id },
      { text: "Czasopisma", parentId: mainOfferItem29.id, offerId: offer29.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer29.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer29.id,
      },
      {
        text: "3B Bajtel. Bajka. Biblioteka - zajęcia promujące czytelnictwo wśród najmłodszych dzieci",
        offerId: offer29.id,
      },
      {
        text: "Dla Seniorów i nie tylko - Kółko Komputerowe",
        offerId: offer29.id,
      },
      {
        linkText: "Plastuś",
        linkUrl: "/ogloszenia/laboratorium-sztuki",
        text: "- zajęcia plastyczne dla dzieci",
        offerId: offer29.id,
      },
      {
        linkText: "Senior w szachu",
        linkUrl: "/ogloszenia/biblioteczny-klub-seniora",
        text: "- nauka gry w szachy od podstaw",
        offerId: offer29.id,
      },
      { text: "Kiermasz książki antykwarycznej", offerId: offer29.id },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer29.id,
      },
    ],
  });

  const branch30 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch33.webp",
      branchImageAlt: "Photo of the thirty-third library branch in Katowice",
      branchSlug: "filia-33",
      branchNumber: "33",
      branchName: "Filia nr 33",
      branchDirector: "mgr Monika Auguścik",
      branchPhone: "322 588 712",
      branchEmail: "filia33@mbp.katowice.pl",
      branchAddressArea: "Katowice - Bogucice",
      branchAddressCode: "40-213",
      branchAddressStreet: "Markiefki 44A",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia33",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+33/@50.2643226,19.038825,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce38854c9747:0x8d9a6c66e8e7d1c3!8m2!3d50.2643226!4d19.0413999!16s%2Fg%2F1thsdnsk?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2643226,
      branchLongitude: 19.038825,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch30.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch30.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch30.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch30.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "19:00",
        branchId: branch30.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch30.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch30.id },
    ],
  });

  const offer30 = await prisma.offer.create({
    data: {
      branchId: branch30.id,
    },
  });

  const mainOfferItem30 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer30.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem30.id,
        offerId: offer30.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem30.id, offerId: offer30.id },
      { text: "Czasopisma", parentId: mainOfferItem30.id, offerId: offer30.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer30.id,
      },
      {
        linkText: "Czytanie na dywanie",
        linkUrl: "/ogloszenia/czytanie-na-dywanie",
        text: "- cykl spotkań dla najmłodszych",
        offerId: offer30.id,
      },
      { text: "Zajęcia literacko-edukacyjne dla dzieci", offerId: offer30.id },
      { text: "Zajęcia plastyczne", offerId: offer30.id },
      {
        linkText: "Klub Gier Planszowych",
        linkUrl: "/ogloszenia/klub-gier-planszowych",
        offerId: offer30.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer30.id,
      },
    ],
  });

  const branch31 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch34.webp",
      branchImageAlt: "Photo of the thirty-fourth library branch in Katowice",
      branchSlug: "filia-34",
      branchNumber: "34",
      branchName: "Filia nr 34",
      branchDirector: "mgr Agnieszka Mazur",
      branchPhone: "327 894 069",
      branchEmail: "filia18@mbp.katowice.pl",
      branchAddressArea: "Katowice - Ligota",
      branchAddressCode: "40-752",
      branchAddressStreet: "Medyków 14",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia38",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+34/@50.2238761,18.9518937,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cea0dda45767:0x8379a07a7f8e34f5!8m2!3d50.2238761!4d18.9544686!16s%2Fg%2F1tf7486n?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2238761,
      branchLongitude: 18.9518937,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "12:00",
        closeTime: "14:00",
        branchId: branch31.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "12:00",
        closeTime: "14:00",
        branchId: branch31.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "12:00",
        closeTime: "14:00",
        branchId: branch31.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "12:00",
        closeTime: "14:00",
        branchId: branch31.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "12:00",
        closeTime: "14:00",
        branchId: branch31.id,
      },
      { day: "Sobota", isOpen: false, branchId: branch31.id },
      { day: "Niedziela", isOpen: false, branchId: branch31.id },
    ],
  });

  const offer31 = await prisma.offer.create({
    data: {
      branchId: branch31.id,
    },
  });

  const mainOfferItem31 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dorosłych pacjentów i pracowników Uniwersyteckiego Centrum Klinicznego",
      offerId: offer31.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem31.id,
        offerId: offer31.id,
      },
    ],
  });

  const branch32 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch35.webp",
      branchImageAlt: "Photo of the thirty-fifth library branch in Katowice",
      branchSlug: "filia-35",
      branchNumber: "35",
      branchName: "Filia nr 35",
      branchDirector: "mgr Giszter Jolanta",
      branchPhone: "322 538 414",
      branchEmail: "filia35@mbp.katowice.pl",
      branchAddressArea: "Katowice - Śródmieście",
      branchAddressCode: "40-093",
      branchAddressStreet: "Słowackiego 20",
      branchFacebookLink: null,
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+35+Obcojęzyczna/@50.2312597,18.9883078,10501m/data=!3m1!1e3!4m10!1m2!2m1!1sMiejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+35!3m6!1s0x4716ce38853522cd:0xb6657fd9019b6756!8m2!3d50.259955!4d19.015891!15sCjZNaWVqc2thIEJpYmxpb3Rla2EgUHVibGljem5hIHcgS2F0b3dpY2FjaC4gRmlsaWEgbnIgMzVaNyI1bWllanNrYSBiaWJsaW90ZWthIHB1YmxpY3puYSB3IGthdG93aWNhY2ggZmlsaWEgbnIgMzWSAQdsaWJyYXJ5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJsTTBsNlZuaDNSUkFC4AEA-gEFCK0BEBg!16s%2Fg%2F11c6lbz0wb?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2312597,
      branchLongitude: 18.9883078,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch32.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch32.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch32.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch32.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch32.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch32.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch32.id },
    ],
  });

  const offer32 = await prisma.offer.create({
    data: {
      branchId: branch32.id,
    },
  });

  const mainOfferItem32 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer32.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa m.in. w językach: angielskim, niemieckim, hiszpańskim, francuskim, rosyjskim, ukraińskim i włoskim",
        parentId: mainOfferItem32.id,
        offerId: offer32.id,
      },
      {
        text: "Audiobooki - w językach oryginału",
        parentId: mainOfferItem32.id,
        offerId: offer32.id,
      },
      {
        text: "Czasopisma obcojęzyczne",
        parentId: mainOfferItem32.id,
        offerId: offer32.id,
      },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer32.id,
      },
      {
        text: "Kiermasz książek na Antresoli - książki antykwaryczne",
        offerId: offer32.id,
      },
    ],
  });

  const branch33 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch36.webp",
      branchImageAlt: "Photo of the thirty-sixth library branch in Katowice",
      branchSlug: "filia-36",
      branchNumber: "36",
      branchName: "Filia nr 36",
      branchDirector: "mgr Agnieszka Falkus",
      branchPhone: "322 099 191",
      branchEmail: "filia36@mbp.katowice.pl",
      branchAddressArea: "Katowice Szopienice - Giszowiec",
      branchAddressCode: "40-321",
      branchAddressStreet: "gen. Hallera 28",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia36",
      branchInstagramLink: null,
      branchWebsiteLink: "https://filia36.blogspot.com",
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+36/@50.2702576,19.0748684,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716d01fe1cb07f9:0xf4982c4b2bf2f177!8m2!3d50.2702576!4d19.0774433!16s%2Fg%2F1thd0k8c?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: false,
      branchLatitude: 50.2702576,
      branchLongitude: 19.0748684,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch33.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch33.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "11:30",
        closeTime: "19:00",
        branchId: branch33.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch33.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "8:00",
        closeTime: "15:00",
        branchId: branch33.id,
      },
      {
        day: "Sobota",
        isOpen: true,
        openTime: "9:00",
        closeTime: "15:00",
        branchId: branch33.id,
      },
      { day: "Niedziela", isOpen: false, branchId: branch33.id },
    ],
  });

  const offer33 = await prisma.offer.create({
    data: {
      branchId: branch33.id,
    },
  });

  const mainOfferItem33 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia dla dzieci i dorosłych",
      offerId: offer33.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa",
        parentId: mainOfferItem33.id,
        offerId: offer33.id,
      },
      { text: "Audiobooki", parentId: mainOfferItem33.id, offerId: offer33.id },
      { text: "Czasopisma", parentId: mainOfferItem33.id, offerId: offer33.id },
    ],
  });

  await prisma.offerItem.createMany({
    data: [
      {
        linkText: "Srebrna Książka dla Seniora",
        linkUrl: "/ogloszenia/srebrna-ksiazka",
        offerId: offer33.id,
      },
      {
        linkText: "Dyskusyjny Klub Książki dla dzieci",
        linkUrl: "/ogloszenia/dyskusyjne-kluby-ksiazki",
        offerId: offer33.id,
      },
      {
        text: "Stanowisko komputerowe z dostępem do Internetu",
        offerId: offer33.id,
      },
    ],
  });

  const branch34 = await prisma.branch.create({
    data: {
      branchImageUrl: "/branches/branch38.webp",
      branchImageAlt: "Photo of the thirty-eighth library branch in Katowice",
      branchSlug: "filia-38",
      branchNumber: "38",
      branchName: "Filia nr 38",
      branchDirector: "mgr Agnieszka Mazur",
      branchPhone: "322 071 683",
      branchEmail: "filia18@mbp.katowice.pl",
      branchAddressArea: "Katowice - Ligota",
      branchAddressCode: "40-752",
      branchAddressStreet: "Medyków 16",
      branchFacebookLink: "https://www.facebook.com/MBPKatowiceFilia38",
      branchInstagramLink: null,
      branchWebsiteLink: null,
      branchGoogleMapLink:
        "https://www.google.com/maps/place/Miejska+Biblioteka+Publiczna+w+Katowicach.+Filia+nr+38/@50.2239288,18.9484194,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cea0e593a6c9:0xe7f262d6a869525a!8m2!3d50.2239288!4d18.9509943!16s%2Fg%2F11g6hv9v39?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
      branchAdaptedToDisabilities: true,
      branchLatitude: 50.2239288,
      branchLongitude: 18.9484194,
      branchGallery: {
        create: galleryItems,
      },
    },
  });

  await prisma.openingHours.createMany({
    data: [
      {
        day: "Poniedziałek",
        isOpen: true,
        openTime: "14:00",
        closeTime: "15:00",
        branchId: branch34.id,
      },
      {
        day: "Wtorek",
        isOpen: true,
        openTime: "14:00",
        closeTime: "15:00",
        branchId: branch34.id,
      },
      {
        day: "Środa",
        isOpen: true,
        openTime: "14:00",
        closeTime: "15:00",
        branchId: branch34.id,
      },
      {
        day: "Czwartek",
        isOpen: true,
        openTime: "14:00",
        closeTime: "15:00",
        branchId: branch34.id,
      },
      {
        day: "Piątek",
        isOpen: true,
        openTime: "14:00",
        closeTime: "15:00",
        branchId: branch34.id,
      },
      { day: "Sobota", isOpen: false, branchId: branch34.id },
      { day: "Niedziela", isOpen: false, branchId: branch34.id },
    ],
  });

  const offer34 = await prisma.offer.create({
    data: {
      branchId: branch34.id,
    },
  });

  const mainOfferItem34 = await prisma.offerItem.create({
    data: {
      text: "Wypożyczalnia przyszpitalna dla dzieci - pacjentów Górnośląskiego Centrum Zdrowia Dziecka",
      offerId: offer34.id,
    },
  });

  await prisma.offerItem.createMany({
    data: [
      {
        text: "Literatura piękna i popularnonaukowa dla dzieci",
        parentId: mainOfferItem34.id,
        offerId: offer34.id,
      },
    ],
  });

  await prisma.offerItem.createMany({
    data: [{ text: "Strefa multimedialna dla dzieci", offerId: offer34.id }],
  });

  const event1 = await prisma.event.create({
    data: {
      eventSlug: "piekno-gor-kaukazu",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Piękno Gór Kaukazu",
      eventDescription: "Wystawa fotografii",
      eventMobileImageUrl: "/events/piekno-gor-kaukazu-mobile.webp",
      eventDesktopImageUrl: "/events/piekno-gor-kaukazu-desktop.webp",
      eventImageAlt:
        "A poster advertising an exhibition of photographs of the Caucasus Mountains",
      eventStartDate: new Date("2025-01-01T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch24.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event1.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event1.id,
      },
    ],
  });

  const event2 = await prisma.event.create({
    data: {
      eventSlug: "flora-macanensis",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Flora Macanensis",
      eventDescription:
        "Wystawa duetu artystycznego Marty Stanisławy Sali i Cheong Kin Man",
      eventMobileImageUrl: "/events/flora-macanensis-mobile.webp",
      eventDesktopImageUrl: "/events/flora-macanensis-desktop.webp",
      eventImageAlt:
        "A poster advertising an exhibition of the artistic duo Marta Stanisława Sala and Cheong Kin Man",
      eventStartDate: new Date("2025-01-07T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch15.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event2.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event2.id,
      },
    ],
  });

  const event3 = await prisma.event.create({
    data: {
      eventSlug: "kobiecy-punkt-widzenia",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Kobiecy punkt widzenia",
      eventDescription:
        "Wystawa ze zbiorów Miejskiej Biblioteki Publicznej w Katowicach",
      eventMobileImageUrl: "/events/kobiecy-punkt-widzenia-mobile.webp",
      eventDesktopImageUrl: "/events/kobiecy-punkt-widzenia-desktop.webp",
      eventImageAlt:
        "A poster advertising an exhibition from the collections of the Municipal Public Library in Katowice",
      eventStartDate: new Date("2025-01-07T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch27.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event3.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event3.id,
      },
    ],
  });

  const event4 = await prisma.event.create({
    data: {
      eventSlug: "zaczarowac-szopienice",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Zaczarować Szopienice",
      eventDescription:
        "Wystawa obrazów Agnieszki Niczke-Kamińskiej z Grupy Janowskiej",
      eventMobileImageUrl: "/events/zaczarowac-szopienice-mobile.webp",
      eventDesktopImageUrl: "/events/zaczarowac-szopienice-desktop.webp",
      eventImageAlt:
        "A poster advertising an exhibition of paintings by Agnieszka Niczke-Kamińska from the Janowska Group",
      eventStartDate: new Date("2025-01-21T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch18.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event4.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event4.id,
      },
    ],
  });

  const event5 = await prisma.event.create({
    data: {
      eventSlug: "magiczne-peru",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Magiczne Peru",
      eventDescription: "Wystawa zdjęć Katarzyny Juszczyk",
      eventMobileImageUrl: "/events/magiczne-peru-mobile.webp",
      eventDesktopImageUrl: "/events/magiczne-peru-desktop.webp",
      eventImageAlt:
        "A poster advertising an exhibition of photos by Katarzyna Juszczyk",
      eventStartDate: new Date("2025-02-03T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch10.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event5.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event5.id,
      },
    ],
  });

  const event6 = await prisma.event.create({
    data: {
      eventSlug: "storczyki",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Storczyki",
      eventDescription: "Wystawa fotografii Justyny Soski",
      eventMobileImageUrl: "/events/storczyki-mobile.webp",
      eventDesktopImageUrl: "/events/storczyki-desktop.webp",
      eventImageAlt:
        "A poster advertising Justyna Soska's photography exhibition",
      eventStartDate: new Date("2025-02-03T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch29.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event6.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event6.id,
      },
    ],
  });

  const event7 = await prisma.event.create({
    data: {
      eventSlug: "architektura-okiem-seniora",
      eventType: "wystawa",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Architektura okiem seniora",
      eventDescription: "Wystawa prac",
      eventMobileImageUrl: "/events/architektura-okiem-seniora-mobile.webp",
      eventDesktopImageUrl: "/events/architektura-okiem-seniora-desktop.webp",
      eventImageAlt:
        "A poster advertising an architecture exhibition from the perspective of a senior",
      eventStartDate: new Date("2025-02-10T00:00:00.000Z"),
      eventEndDate: new Date("2025-02-28T23:59:59.999Z"),
      branchId: branch2.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event7.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Wystawa",
        eventId: event7.id,
      },
    ],
  });

  const event8 = await prisma.event.create({
    data: {
      eventSlug: "zajecia-plastyczne-fantazja",
      eventType: "warsztaty",
      eventTargetGroup: "dla dzieci",
      eventTitle: "Zajęcia Plastyczne Fantazja",
      eventDescription: "Zajęcia plastyczne dla cieci od 5 do 7 lat",
      eventMobileImageUrl: "/events/zajecia-plastyczne-fantazja-mobile.webp",
      eventDesktopImageUrl: "/events/zajecia-plastyczne-fantazja-desktop.webp",
      eventImageAlt: "A poster advertising an art classes for children",
      eventStartDate: new Date("2025-02-25T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch27.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla dzieci",
        eventId: event8.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Warsztaty",
        eventId: event8.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Cykliczne",
        eventId: event8.id,
      },
    ],
  });

  const event9 = await prisma.event.create({
    data: {
      eventSlug: "afryka-mniej-turystyczna",
      eventType: "spotkanie",
      eventTargetGroup: "dla wszystkich",
      eventTitle: "Afryka mniej turystyczna: Gwinea, Liberia, Sierra Leone",
      eventDescription: "Spotkanie z podróżnikiem Tomaszem Zocłońskim",
      eventMobileImageUrl: "/events/afryka-mniej-turystyczna-mobile.webp",
      eventDesktopImageUrl: "/events/afryka-mniej-turystyczna-desktop.webp",
      eventImageAlt: "A poster advertising meeting with a traveler",
      eventStartDate: new Date("2025-02-26T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch2.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla wszystkich",
        eventId: event9.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Spotkanie",
        eventId: event9.id,
      },
    ],
  });

  const event10 = await prisma.event.create({
    data: {
      eventSlug: "dyskusujny-klub-ksiazki-w-siodemce",
      eventType: "spotkanie",
      eventTargetGroup: "dla dorosłych",
      eventTitle: "Dyskusyjny Klub Książki w Siódemce",
      eventDescription:
        "Spotkanie w ramach Dyskusyjnego Klubu Książki Sally Rooney Normalni ludzie",
      eventMobileImageUrl: "/events/7-mobile.webp",
      eventDesktopImageUrl: "/events/7-desktop.webp",
      eventImageAlt: "A poster advertising a book club meeting",
      eventStartDate: new Date("2025-02-26T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch6.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla dorosłych",
        eventId: event10.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Spotkanie",
        eventId: event10.id,
      },
    ],
  });

  const event11 = await prisma.event.create({
    data: {
      eventSlug: "zabawa-ze-sztuka",
      eventType: "warsztaty",
      eventTargetGroup: "dla dzieci",
      eventTitle: "Zabawa ze sztuką",
      eventDescription: "Zajęcia plastyczne dla dzieci",
      eventMobileImageUrl: "/events/zabawa-ze-sztuka-mobile.webp",
      eventDesktopImageUrl: "/events/zabawa-ze-sztuka-desktop.webp",
      eventImageAlt: "A poster advertising art classes for children",
      eventStartDate: new Date("2025-02-26T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch4.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla dzieci",
        eventId: event11.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Warsztaty",
        eventId: event11.id,
      },
    ],
  });

  const event12 = await prisma.event.create({
    data: {
      eventSlug: "zajecia-plastyczne-tecza",
      eventType: "warsztaty",
      eventTargetGroup: "dla dzieci",
      eventTitle: "Zajęcia Plastyczne Tęcza",
      eventDescription: "Zajęcia plastyczne połączone z literaturą i zabawą",
      eventMobileImageUrl: "/events/zajecia-plastyczne-tecza-mobile.webp",
      eventDesktopImageUrl: "/events/zajecia-plastyczne-tecza-desktop.webp",
      eventImageAlt: "A poster advertising art classes for children",
      eventStartDate: new Date("2025-02-26T00:00:00.000Z"),
      eventStartHour: "16:00",
      branchId: branch15.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla dzieci",
        eventId: event12.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Warsztaty",
        eventId: event12.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Cykliczne",
        eventId: event12.id,
      },
    ],
  });

  const event13 = await prisma.event.create({
    data: {
      eventSlug: "dni-kultury-zydowskiej",
      eventType: "spotkanie",
      eventTargetGroup: "dla dorosłych",
      eventTitle:
        "Domy boże i bramy do nieba. Zachowane synagogi na terenie woj. śląskiego",
      eventDescription:
        "Spotkanie z Dariuszem Walerjańskim, historykiem, muzealnikiem, badaczem i dokumentalistą dziejów Żydów na Górnym Śląsku, społecznym opiekunem zabytków żydowskich w woj. śląskim. Spotkanie odbywa się dzięki dofinansowaniu Stowarzyszenia Żydowski Instytut Historyczny.",
      eventMobileImageUrl: "/events/dni-kultury-zydowskiej-mobile.webp",
      eventDesktopImageUrl: "/events/dni-kultury-zydowskiej-desktop.webp",
      eventImageAlt: "A poster advertising a meeting with a historian",
      eventStartDate: new Date("2025-02-27T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch27.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla dorosłych",
        eventId: event13.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Spotkanie",
        eventId: event13.id,
      },
    ],
  });

  const event14 = await prisma.event.create({
    data: {
      eventSlug: "i-ty-potrafisz",
      eventType: "warsztaty",
      eventTargetGroup: "dla dzieci",
      eventTitle: "I Ty potrafisz",
      eventDescription: "Zajęcia plastyczne dla dzieci",
      eventMobileImageUrl: "/events/i-ty-potrafisz-mobile.webp",
      eventDesktopImageUrl: "/events/i-ty-potrafisz-desktop.webp",
      eventImageAlt: "A poster advertising art classes for children",
      eventStartDate: new Date("2025-02-27T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch14.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla dzieci",
        eventId: event14.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Warsztaty",
        eventId: event14.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Cykliczne",
        eventId: event14.id,
      },
    ],
  });

  const event15 = await prisma.event.create({
    data: {
      eventSlug: "rowerem-przez-smaki-tajwanu",
      eventType: "spotkanie",
      eventTargetGroup: "dla każdego",
      eventTitle: "Rowerem przez smaki Tajwanu",
      eventDescription: "Spotkanie podróżnicze z Waldemarem Maliną",
      eventMobileImageUrl: "/events/rowerem-przez-smaki-tajwanu-mobile.webp",
      eventDesktopImageUrl: "/events/rowerem-przez-smaki-tajwanu-desktop.webp",
      eventImageAlt: "A poster advertising a travel meeting",
      eventStartDate: new Date("2025-02-28T00:00:00.000Z"),
      eventStartHour: "17:00",
      branchId: branch11.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla każdego",
        eventId: event15.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Spotkanie",
        eventId: event15.id,
      },
    ],
  });

  const event16 = await prisma.event.create({
    data: {
      eventSlug: "lotny-antykwariat",
      eventType: "spotkanie",
      eventTargetGroup: "dla każdego",
      eventTitle: "Lotny Antykwariat",
      eventDescription:
        "Kiermasz książek przeczytanych, którym warto dac drugie życie. Każda książka za 3 zł, przyjmujemy płatności gotówką. W sprzedaży m.in. ksiązki dla dzieci, młodzieży i dorosłych, poezja, albumy.",
      eventMobileImageUrl: "/events/lotny-antykwariat-mobile.webp",
      eventDesktopImageUrl: "/events/lotny-antykwariat-desktop.webp",
      eventImageAlt: "A poster advertising a book fair",
      eventStartDate: new Date("2025-03-01T00:00:00.000Z"),
      eventStartHour: "9:00",
      branchId: branch11.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.tag.createMany({
    data: [
      {
        tagVariant: "default",
        tagDescription: "Dla każdego",
        eventId: event16.id,
      },
      {
        tagVariant: "default",
        tagDescription: "Kiermasz",
        eventId: event16.id,
      },
    ],
  });

  const news1 = await prisma.news.create({
    data: {
      newsSlug: "dni-kultury-zydowskiej",
      newsTitle: "Dni Kultury Żydowskiej (2025)",
      newsDate: new Date("2025-02-18"),
      newsMobileImageUrl: "/news/dni-kultury-zydowskiej-mobile.webp",
      newsDesktopImageUrl: "/news/dni-kultury-zydowskiej-desktop.webp",
      newsImageAlt: "Jewish Culture Days event poster",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news1.id,
        title:
          "Dni Kultury Żydowskiej w Miejskiej Bibliotece Publicznej w Katowicach",
        text: "Miejska Biblioteka Publiczna w Katowicach po raz kolejny organizuje Dni Kultury Żydowskiej. Ten niezwykły festiwal przybliżający kulturę i historię żydowską, obfitujący w spotkania, prelekcje, spacery edukacyjne i historyczne, odbywa się dzięki dofinansowaniu Stowarzyszenia Żydowski Instytut Historyczny. W tym roku naszym partnerem po raz kolejny jest Stowarzyszenie im. Maxa Kopfsteina w Chorzowie.",
      },
      {
        newsId: news1.id,
        text: "Zapraszamy do udziału we wszystkich wydarzeniach, udział jest bezpłatny. Ze względu na limit miejsc, na spacery obowiązują zapisy.",
      },
    ],
  });

  const news2 = await prisma.news.create({
    data: {
      newsSlug: "biblioteka-od-kuchni",
      newsTitle: "Biblioteka od kuchni. Ferie z Książką 2025",
      newsDate: new Date("2025-02-17"),
      newsMobileImageUrl: "/news/biblioteka-od-kuchni-mobile.webp",
      newsDesktopImageUrl: "/news/biblioteka-od-kuchni-desktop.webp",
      newsImageAlt:
        "Library from the kitchen. Winter holidays with a book 2025",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news2.id,
        text: "Dzieci i młodzież z woj. śląskiego mają w tym roku ferie wyjątkowo późno - od 17 lutego do 2 marca. Ale późno, nie znaczy, że gorzej! Miejska Biblioteka Publiczna w Katowicach kolejny już raz przygotowuje z okazji zimowej przerwy szkolnej akcję Ferie z Książką, teraz pod hasłem Biblioteka od kuchni. Damy się ponieść fantazji i zorganizujemy najsmakowitszą ucztę kulturalno-kulinarną w Katowicach!",
      },
      {
        newsId: news2.id,
        text: "Nasza akcja kierowana jest do wszystkich dzieci w wieku 7-12 lat, spędzających ferie w mieście, a udział w niej jest bezpłatny.",
      },
      {
        newsId: news2.id,
        text: "Odbędziemy w czasie Ferii z Książką niezliczone kulinarne podróże, m.in. po to, by dowiedzieć się czym zajadają się ludzie w różnych regionach Polski, ale i na drugim końcu świata; poznamy zasady dobrego zachowania przy stole, nauczymy się przyrządzać rarytasy z naszych ulubionych bajek. Podpatrzymy, jak różne mogą być nasiona i jakie z nich wyrastają rośliny, polepimy w glinie, dowiemy się co jeść, by zdrowo żyć. Ale jak Biblioteka od kuchni, to i niekulinarnie podejdziemy do tematu – w tym roku nasza instytucja obchodzi 80-lecie, więc to idealna okazja, by poznać tajniki pracy bibliotekarzy i innych osób zatrudnionych w bibliotece… Pora zburzyć stereotypy i pokazać, na co nas stać! ;-) Wejdziemy do Biblioteki od kuchni, i będzie to wejście z przytupem ;-)",
      },
    ],
  });

  const news2Description1 = await prisma.newsDescription.create({
    data: {
      newsId: news2.id,
      title: "Filie organizujące akcję:",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news2.id,
        text: "Filia nr 3, ul. Gliwicka 93, Katowice-Załęże",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 6, ul. Bytomska 8 A, Katowice-Wełnowiec-Józefowiec",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 11, Grażyńskiego 47, Katowice-Koszutka",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 12, ul. Witosa 18 B, Katowice-Os. Witosa",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 14, ul. Piastów 20, Katowice-Os. Tysiąclecia",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 16, ul. Wajdy 21, Katowice-Bogucice",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 17, ul. Krzyżowa 1, Katowice-Dąb",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 23, ul. Paderewskiego 65, Katowice-Os. Paderewskiego",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 25, ul. B. Chrobrego 2, Katowice-Os. Tysiąclecia",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 26, ul. Goetla 2, Katowice-Murcki",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 27, ul. Szarych Szeregów 62, Katowice-Kostuchna",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 28, ul. Uniczowska 36, Katowice-Podlesie",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 32, ul. Grzyśki 19 A, Katowice-Ligota",
        parentId: news2Description1.id,
      },
      {
        newsId: news2.id,
        text: "Filia nr 38 (szpitalna), ul. Medyków 16, Katowice-Ligota",
        parentId: news2Description1.id,
      },
    ],
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news2.id,
        text: "Do udziału w akcji wymagana jest pisemna zgoda rodziców lub opiekunów (do pobrania w filiach lub na stronie biblioteki). Przed wypisaniem zgody na udział należy zapoznać się z regulaminem akcji dostępnym na stronie internetowej. Udział w Feriach z Książką jest bezpłatny.  Organizator nie zapewnia biletów komunikacji miejskiej oraz ew. biletów wstępu do zwiedzanych obiektów. Dokładny harmonogram spotkań dostępny jest na stronie mbp.katowice.pl. Filie zastrzegają sobie prawo do wprowadzania w nim zmian; zmiany te nie zawsze będą ujęte w rozpisce na stronie internetowej.",
      },
      {
        newsId: news2.id,
        text: "W tym roku uczestnicy Ferii z Książką otrzymają specjalne książeczki na naklejki, które należy przynosić na każde spotkanie. Za udział w spotkaniu dziecko otrzyma jedną naklejkę. Obecność w min. 50% spotkań (udpotwierdzonych naklejką) upoważnia do otrzymania nagrody na zakończenie akcji.",
      },
    ],
  });

  const news3 = await prisma.news.create({
    data: {
      newsSlug: "luty-w-bibliotece",
      newsTitle: "Luty w Bibliotece (2025)",
      newsDate: new Date("2025-02-16"),
      newsMobileImageUrl: "/news/luty-w-bibliotece-mobile.webp",
      newsDesktopImageUrl: "/news/luty-w-bibliotece-desktop.webp",
      newsImageAlt: "February in the library event poster",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news3.id,
        text: "Najkrótszy miesiąc roku zapowiada się w naszej Bibliotece całkiem intensywnie. Już 3 lutego odbędzie się wernisaż wystawy malarstwa Pauliny Troncik Kolory duszy. Udział w uroczystym otwarciu weźmie artystka wraz z towarzyszącymi jej gośćmi: Jarosławem Englerem, który zaprezentuje swoją poezję, oraz muzykami - Eugeniuszem Szwarcerem (gitara akustyczna), Markiem Świtałą (gitara elektryczna) i Staszkiem Walczewskim (harmonijka ustna).",
      },
      {
        newsId: news3.id,
        text: "Kilka dni później spotkanie dla ceniących prelekcje historyczne - gościć będziemy dr. Dariusza Węgrzyna, autora książki Internirung. Deportacja mieszkańców Górnego Śląska do ZSRS na tle wywózek niemieckiej ludności cywilnej z Europy Środkowo - Wschodniej do sowieckich łagrów pod koniec II wojny światowej. Spotkanie poświęcone będzie Tragedii Górnośląskiej, o której traktuje wspomniane wydawnictwo.",
      },
      {
        newsId: news3.id,
        text: "Inne spotkania autorskie? Gościć będziemy w lutym dwie pisarki-debiutantki: Paulinę Klimańską-Nowak, promującą powieść Kądziel oraz Hanię Hoffman, autorkę książki Szkody. Opowieść o świecie minionym. Oba tytuły zostały bardzo dobrze przyjęte przez Czytelników i krytyków, warto zatem pojawić się na spotkaniach i poznać autorki osobiście :-)",
      },
      {
        newsId: news3.id,
        text: "Kontynuujemy cykl Nie-zwykli. W lutym odwiedzi nas Sonia Wesolik - była stewardessa, która od kilku lat porusza się na wózku. Ograniczenia, jakie wiążą się z byciem wózkowiczem, nie zniechęciły jej jednak do kontynuowania pasji i nadal aktywnie poznaje świat. Podczas spotkania opowie o tym, jak teraz wyglądają jej podróże.",
      },
      {
        newsId: news3.id,
        text: "A propos podróży - w tym miesiącu „odwiedzimy” daleką Alaskę z Sebastianem R. Bielakiem, autorem książki Po bezdrożach Alaski; spotkamy się z Bartoszem Kowalskim, certyfikowanym przewodnikiem turystyki rowerowej po Polsce i Europie; dzięki Tomaszowi Zocłońskiemu poznamy mniej turystyczne oblicze Afryki - Liberię, Sierra Leone, Gwineę i Wybrzeże Kości Słoniowej; a wraz z Waldemarem Maliną odkryjemy „rowerowy” Kaukaz - Inguszetię, Czeczenię i Dagestan.",
      },
      {
        newsId: news3.id,
        text: "Koniec miesiąca oznacza dla uczniów w naszym województwie ferie. Kto spędza je w mieście, a chciałby porobić coś fajnego, niech zerknie na naszą ofertę Ferii z Książką. W tym roku bawimy się pod hasłem Biblioteka od kuchni, czyż nie brzmi to smakowicie?",
      },
      {
        newsId: news3.id,
        text: "Jak zawsze zachęcamy do zapisania się do bibliotecznego Newslettera. Kto jeszcze tego nie zrobił, niech sprawę przemyśli - warto być na bieżąco z najciekawszymi informacjami z Biblioteki ;-)",
      },
    ],
  });

  const news4 = await prisma.news.create({
    data: {
      newsSlug: "80-lecie-biblioteki",
      newsTitle: "Biblioteka. Łączymy pokolenia od 80 lat!",
      newsDate: new Date("2025-02-15"),
      newsMobileImageUrl: "/news/80-lecie-biblioteki-mobile.webp",
      newsDesktopImageUrl: "/news/80-lecie-biblioteki-desktop.webp",
      newsImageAlt: "A poster advertising the 80th anniversary of the library",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news4.id,
        text: "Z nieskrywaną radością informujemy, iż Miejska Biblioteka Publiczna w Katowicach obchodzi w tym roku 80-lecie. Świętujmy razem ten piękny jubileusz!",
      },
      {
        newsId: news4.id,
        text: "Z okazji urodzin Biblioteki zapraszamy wszystkich Państwa na Wielki Piknik Rodzinny Biblioteka. Łączymy pokolenia, który odbędzie się 17 maja 2025 r. (sobota) w Ogrodzie S(ł)ów przy Filii nr 14, ul. Piastów 20, Katowice-Os. Tysiąclecia.",
      },
      {
        newsId: news4.id,
        text: "Pozwólcie, że szczegóły programu zachowamy jeszcze w tajemnicy, ale wiedzcie, że będzie się działo...",
      },
    ],
  });

  const news4Description1 = await prisma.newsDescription.create({
    data: {
      newsId: news4.id,
      title: "Będzie coś:",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news4.id,
        text: "dla dzieci i młodzieży",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla dorosłych",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla miłośników rękodzieła i artystów-amatorów",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla zafascynowanych magią",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla powiększających biblioteczkę domową",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla chcących nieść dobro",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla pragnących relaksu z książką",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla planszówkowiczów",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla potrzebujących ruchu na świeżym powietrzu",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla miłośników pięknych ozdób",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla ciekawych natury",
        parentId: news4Description1.id,
      },
      {
        newsId: news4.id,
        text: "dla tych, którzy lubią spotkania autorskie",
        parentId: news4Description1.id,
      },
    ],
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news4.id,
        text: "No i jeszcze trochę więcej tego i owego, ale na razie wystarczy tych wyliczanek.",
      },
      {
        newsId: news4.id,
        text: "Kto ma konto na Facebooku, niech śledzi nasze wydarzenie.",
      },
      {
        newsId: news4.id,
        text: "Wypatrujcie w filiach plakatów, a w tej notce aktualizacji, które z czasem będą się pojawiać.",
      },
      {
        newsId: news4.id,
        text: "I koniecznie bądźcie tego dnia, 17 maja, z nami, ponieważ to święto nas wszystkich - pracowników Biblioteki, jej Czytelników i Przyjaciół.",
      },
      {
        newsId: news4.id,
        text: "Szykuje się wspaniałe świętowanie!",
      },
    ],
  });

  const news5 = await prisma.news.create({
    data: {
      newsSlug: "mlodziezowy-klub-ksiazki",
      newsTitle: "Młodzieżowy Klub Książki",
      newsDate: new Date("2025-02-14"),
      newsMobileImageUrl: "/news/mlodziezowy-klub-ksiazki-mobile.webp",
      newsDesktopImageUrl: "/news/mlodziezowy-klub-ksiazki-desktop.webp",
      newsImageAlt: "A poster advertising a youth book club",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news5.id,
        text: "Młodzieżowy Klub Książki w Katowicach to projekt koła naukowego „Włącznik” Uniwersytetu Śląskiego oraz Stref młodzieżowych KATO4U adresowany do lokalnej młodzieży w wieku 15-20 lat.",
      },
      {
        newsId: news5.id,
        text: "Celem i misją MKK jest nie tylko promowanie czytelnictwa wśród młodzieży, ale także wspieranie ich rozwoju intelektualnego, społecznego i emocjonalnego poprzez stworzenie przestrzeni spotkań dla nastolatków – zarówno tych, którzy uwielbiają czytać, jak i tych, którzy chcą spróbować czegoś nowego.",
      },
    ],
  });

  const news5Description1 = await prisma.newsDescription.create({
    data: {
      newsId: news5.id,
      text: "W ramach MKK pragniemy również podejmować działania wspierające młodzież w osiąganiu celów zawartych w podstawie programowej:",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news5.id,
        text: "doskonalenie umiejętności myślowo-językowych",
        parentId: news5Description1.id,
      },
      {
        newsId: news5.id,
        text: "zdobywanie umiejętności formułowania samodzielnych i przemyślanych sądów",
        parentId: news5Description1.id,
      },
      {
        newsId: news5.id,
        text: "rozwijanie wrażliwości społecznej, moralnej i estetycznej",
        parentId: news5Description1.id,
      },
      {
        newsId: news5.id,
        text: "rozwijanie osobistych zainteresowań uczniów oraz integrowanie wiedzy z różnych dyscyplin",
        parentId: news5Description1.id,
      },
      {
        newsId: news5.id,
        text: "umiejętność współpracy w grupie i podejmowania działań indywidualnych",
        parentId: news5Description1.id,
      },
    ],
  });

  await prisma.newsDescription.create({
    data: {
      newsId: news5.id,
      text: "Spotkania Młodzieżowego Klubu Książki odbywają się w co drugi piątek miesiąca w KATO4U (ul. Sokolska 23 w Katowicach) o godzinie 17:00.",
    },
  });

  const news6 = await prisma.news.create({
    data: {
      newsSlug: "wypozyczalnia-odtwawrzaczy-cyfrowej-ksiazki-mowionej",
      newsTitle: "Wypożyczalnia odtwarzaczy cyfrowej książki mówionej",
      newsDate: new Date("2025-02-13"),
      newsMobileImageUrl:
        "/news/wypozyczalnia-odtwawrzaczy-cyfrowej-ksiazki-mowionej-mobile.webp",
      newsDesktopImageUrl:
        "/news/wypozyczalnia-odtwawrzaczy-cyfrowej-ksiazki-mowionej-desktop.webp",
      newsImageAlt: "A poster advertising a digital audiobook player rental",
    },
  });

  await prisma.newsDescription.createMany({
    data: [
      {
        newsId: news6.id,
        text: "Miło jest nam poinformować, że Miejska Biblioteka Publiczna w Katowicach przystąpiła do projektu „Wypożyczalnia odtwarzaczy cyfrowej książki mówionej dla osób z dysfunkcją wzroku - Edycja 2024” realizowanego przez Stowarzyszenie Pomocy Osobom Niepełnosprawnym „Larix” im. Henryka Ruszczyca. Projekt jest dofinansowany przez Ministra Kultury i Dziedzictwa Narodowego ze środków pochodzących z Funduszu Promocji Kultury.",
      },
      {
        newsId: news6.id,
        text: " W ramach projektu nasza Biblioteka otrzymała nieodpłatnie jeden egzemplarz odtwarzacza cyfrowych książek mówionych - Czytak 4. Urządzenie jest przystosowane do obsługi przez osoby niewidome i słabowidzące, jest także przyjazne dla Seniorów. Charakteryzuje się bardzo prostą obsługą i dobrą jakością dźwięku. W łatwy sposób pozwoli czytelnikom skorzystać z dobrodziejstw książki mówionej.",
      },
      {
        newsId: news6.id,
        text: "Wypożyczenie urządzenia możliwe jest w Oddziale Książki Mówionej, który znajduje się w Filii nr 1 na ulicy Ligonia 7.  Placówka wypożycza urządzenia osobom z dysfunkcją wzroku oraz osobom niepełnosprawnym, które ze względu na swoją niepełnosprawność nie mogą czytać normalnego druku.",
      },
      {
        newsId: news6.id,
        text: " Stowarzyszenie „Larix” od 2007 r. zajmuje się nagrywaniem i udostępnianiem bibliotekom cyfrowych książek mówionych przeznaczonych dla osób niewidomych i słabowidzących. Udostępniony nam przez Stowarzyszenie „Larix” księgozbiór liczy 3865 książek i będzie wciąż powiększany o nowe ciekawe pozycje książkowe.",
      },
    ],
  });

  const book1 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "bezkarny",
      catalogItemType: "book",
      catalogItemTitle: "Bezkarny",
      catalogItemImageUrl: "/catalogItems/bezkarny.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Czarujący uwodziciel, bezwzględny manipulator i profesjonalny oszust. Bierze na celownik kobiety znajdujące się w trudnej sytuacji życiowej, samotne, potrzebujące wsparcia. Daje im wszystko, o czym marzyły, a nawet więcej. Jest wyśnionym partnerem, przyjacielem, kochankiem - mami swoje ofiary wizjami wspólnej przyszłości i bezgranicznego szczęścia. Robi to jednak wyłącznie po to, by je wykorzystać i pozbawić wszystkich oszczędności. A kiedy zaczynają walczyć, zaczyna zagrażać ich życiu. Pozostaje bezkarny. Zmienia tożsamości, unika policji, dba o każdy szczegół swoich manipulacji. Trafia jednak w końcu na kogoś, kto zrobi wszystko, by doprowadzić go przed oblicze sprawiedliwości. Walka między dobrem a złem jeszcze nigdy nie była tak osobista.",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2025-01-29"),
      catalogItemWidth: "135",
      catalogItemHeight: "200",
    },
  });

  const param1book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1559032",
      paramsId: param1book1.id,
    },
  });

  const param2book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Bezkarny",
      paramsId: param2book1.id,
    },
  });

  const param3book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Mróz Remigiusz",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book1.id,
    },
  });

  const param4book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnicto Filia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book1.id,
    },
  });

  const param5book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book1.id,
    },
  });

  const param6book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2025-01-29",
      paramsId: param6book1.id,
    },
  });

  const param7book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2025",
      paramsId: param7book1.id,
    },
  });

  const param8book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "135 x 200",
      paramsId: param8book1.id,
    },
  });

  const param9book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book1.id,
    },
  });

  const param10book1 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book1.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "140",
      paramsId: param10book1.id,
    },
  });

  const book2 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "berdo-komisarz-frost-tom-9",
      catalogItemType: "book",
      catalogItemTitle: "Berdo. Komisarz Forst. Tom 9",
      catalogItemImageUrl: "/catalogItems/berdo.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Bieszczady miały być dla Wiktora Forsta azylem. Zaszył się w niewielkiej wsi, znalazł wikt i opierunek u starej kobiety, w zamian zajął się jej gospodarstwem i podupadającą chatą. Zostawił wszystko i wszystkich za sobą, nie umiejąc poradzić sobie z tym, co bezpowrotnie utracił. Zgnębiony żalem, chciał przestać istnieć, a odludne tereny Bieszczadów wydawały się do tego idealne. Do czasu. W okolicy bowiem zaczęto odkrywać niemożliwe do identyfikacji ciała, wszystkie z wypalonym między oczami, nieznanym symbolem. Miejscowa policja nie radzi sobie ze sprawą, śledztwo stoi w miejscu, w górach zaś pojawiają się kolejne ofiary. Apele przez oficjalne kanały nie działają, komenda główna z jakiegoś powodu odmawia pomocy. Jedynym, kto może jej udzielić, jest pewien komisarz na wygnaniu…",
      catalogItemGenre: "drama",
      catalogItemPublishDate: new Date("2024-05-15"),
      catalogItemWidth: "130",
      catalogItemHeight: "190",
    },
  });

  const param1book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1467000499",
      paramsId: param1book2.id,
    },
  });

  const param2book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Berdo. Komisarz Forst. Tom 9",
      paramsId: param2book2.id,
    },
  });

  const param3book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Mróz Remigiusz",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book2.id,
    },
  });

  const param4book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo Filia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book2.id,
    },
  });

  const param5book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book2.id,
    },
  });

  const param6book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024-05-15",
      paramsId: param6book2.id,
    },
  });

  const param7book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024",
      paramsId: param7book2.id,
    },
  });

  const param8book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "130 x 195",
      paramsId: param8book2.id,
    },
  });

  const param9book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book2.id,
    },
  });

  const param10book2 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book2.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "240",
      paramsId: param10book2.id,
    },
  });

  const book3 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "obrona-joanna-chylka-tom-18",
      catalogItemType: "book",
      catalogItemTitle: "Obrona. Joanna Chyłka. Tom 18",
      catalogItemImageUrl: "/catalogItems/obrona.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Joanna Chyłka jest w połowie ósmego miesiąca ciąży, kiedy zgłasza się do niej znana milionerka, przedstawiając intratną propozycję obrony pewnego człowieka. Nie jest z nim w żaden sposób powiązana, twierdzi jednak, że pokryje wszystkie koszty w ramach dobroczynnego projektu mającego wyciągać niewinnych ludzi z więzień. Skazany trafił za kratki dwadzieścia lat temu za zabójstwo - sądy pierwszej i drugiej instancji nie miały wątpliwości co do jego winy, dowody były bowiem jednoznaczne i przytłaczające. Kasację oddalono. Biznesmenka nie przedstawia żadnych nowych ustaleń w sprawie, nie tłumaczy, dlaczego akurat teraz postanowiła pomóc temu człowiekowi ani dlaczego uznaje go za niewinnego. Chyłka nie widzi podstaw do wznowienia postępowania, mimo to zaczyna przeglądać akta. Odnajduje w nich coś, co sprawia, że pomimo protestów Kordiana oraz prowadzącego jej ciążę ginekologa podejmuje się obrony człowieka, którego wina wydaje się niezaprzeczalna.",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2024-09-11"),
      catalogItemWidth: "130",
      catalogItemHeight: "210",
    },
  });

  const param1book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1508418360",
      paramsId: param1book3.id,
    },
  });

  const param2book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Obrona. Joanna Chyłka. Tom 18",
      paramsId: param2book3.id,
    },
  });

  const param3book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Mróz Remigiusz",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book3.id,
    },
  });

  const param4book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo Filia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book3.id,
    },
  });

  const param5book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book3.id,
    },
  });

  const param6book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024-09-11",
      paramsId: param6book3.id,
    },
  });

  const param7book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024",
      paramsId: param7book3.id,
    },
  });

  const param8book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "130 x 200",
      paramsId: param8book3.id,
    },
  });

  const param9book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book3.id,
    },
  });

  const param10book3 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book3.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "240",
      paramsId: param10book3.id,
    },
  });

  const book4 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "ekspozycja-komisarz-forst-tom-1",
      catalogItemType: "book",
      catalogItemTitle: "Ekspozycja. Komisarz Forst. Tom 1",
      catalogItemImageUrl: "/catalogItems/ekspozycja.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Termin ekspozycja ma przynajmniej pięć znaczeń. Podobnie wieloznaczny jest każdy krok mordercy. Pewnego ranka turyści odkrywają na Giewoncie makabryczny widok - na ramionach krzyża powieszono nagiego mężczyznę. Wszystko wskazuje na to, że zabójca nie zostawił żadnych śladów. Sprawę prowadzi niecieszący się dobrą opinią komisarz Wiktor Forst. Zanim tamtego ranka stanął na Giewoncie, wydawało mu się, że widział w życiu wszystko. Tropy, jakie odkryje wraz z dziennikarką Olgą Szrebską, doprowadzą go do dawno zapomnianych tajemnic… Winy z przeszłości nie dadzą o sobie zapomnieć. Okrutne zbrodnie muszą zostać odkupione.",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2015-08-12"),
      catalogItemWidth: "137",
      catalogItemHeight: "211",
    },
  });

  const param1book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1109890688",
      paramsId: param1book4.id,
    },
  });

  const param2book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Ekspozycja. Komisarz Forst. Tom 1",
      paramsId: param2book4.id,
    },
  });

  const param3book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Mróz Remigiusz",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book4.id,
    },
  });

  const param4book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo Filia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book4.id,
    },
  });

  const param5book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book4.id,
    },
  });

  const param6book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2015-08-12",
      paramsId: param6book4.id,
    },
  });

  const param7book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2023",
      paramsId: param7book4.id,
    },
  });

  const param8book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "137 x 211",
      paramsId: param8book4.id,
    },
  });

  const param9book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book4.id,
    },
  });

  const param10book4 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book4.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "480",
      paramsId: param10book4.id,
    },
  });

  const book5 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "kadry-niedogaszonych-wspomien",
      catalogItemType: "book",
      catalogItemTitle: "Kadry niedogaszonych wspomnień",
      catalogItemImageUrl: "/catalogItems/kadry-niedogaszonych-wspomnien.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Pół roku po tym, jak Grayson Joyce znikł z jej życia, Aspen wciąż nie potrafi o nim zapomnieć. Odnaleziony przez nią polaroid jest namacalnym dowodem na to, że łączyła ich wspólna przeszłość - przeszłość, którą Grayson przed nią ukrywał. Dlaczego to zrobił? Co takiego sprawiło, że nigdy nie wyjawił prawdy? I jak blisko siebie byli? Aspen Wakefield nie zamierza dłużej żyć bez odpowiedzi. Korzystając z zimowej przerwy międzysemestralnej na Trinity College, wraca do Prescott w Arizonie, odszukuje miejsce, gdzie zrobiono zdjęcie, a potem zaczyna podążać tropami, które wiodą do jedynej osoby, która może udzielić jej odpowiedzi - swojej najlepszej przyjaciółki z poprzedniego życia. Problem w tym, że dziewczyna zaginęła w tajemniczych okolicznościach ponad rok temu. A Grayson Joyce najwyraźniej miał z tym coś wspólnego.",
      catalogItemGenre: "drama",
      catalogItemPublishDate: new Date("2024-07-03"),
      catalogItemWidth: "140",
      catalogItemHeight: "210",
    },
  });

  const param1book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1473014907",
      paramsId: param1book5.id,
    },
  });

  const param2book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Kadry niedogaszonych wspomnień",
      paramsId: param2book5.id,
    },
  });

  const param3book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Mróz Remigiusz",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book5.id,
    },
  });

  const param4book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo Filia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book5.id,
    },
  });

  const param5book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book5.id,
    },
  });

  const param6book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024-07-03",
      paramsId: param6book5.id,
    },
  });

  const param7book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024",
      paramsId: param7book5.id,
    },
  });

  const param8book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "140 x 210",
      paramsId: param8book5.id,
    },
  });

  const param9book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book5.id,
    },
  });

  const param10book5 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book5.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "320",
      paramsId: param10book5.id,
    },
  });

  const book6 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "biel-kolory-zla-tom-3",
      catalogItemType: "book",
      catalogItemTitle: "Biel. Kolory zła. Tom 3",
      catalogItemImageUrl: "/catalogItems/biel.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Pewnego zimowego poranka z okna sopockiej kamienicy skacze studentka prawa. Ślady na jej ciele wskazują, że przed śmiercią młoda kobieta była krępowana i duszona. Na miejsce zdarzenia przybywa prokurator Leopold Bilski, który po sprawie w Kartuzach wrócił do Trójmiasta. Tropy wiodą do środowiska nocnych klubów, które kryją mroczne pragnienia i tajemnice głęboko osadzone w przeszłości.",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2021-05-19"),
      catalogItemWidth: "139",
      catalogItemHeight: "203",
    },
  });

  const param1book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1265300197",
      paramsId: param1book6.id,
    },
  });

  const param2book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Biel. Kolory zła. Tom 3",
      paramsId: param2book6.id,
    },
  });

  const param3book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Sobczak Małgorzata Oliwia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book6.id,
    },
  });

  const param4book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo W.A.B.",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book6.id,
    },
  });

  const param5book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book6.id,
    },
  });

  const param6book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2021-05-19",
      paramsId: param6book6.id,
    },
  });

  const param7book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2021",
      paramsId: param7book6.id,
    },
  });

  const param8book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "139 x 203",
      paramsId: param8book6.id,
    },
  });

  const param9book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book6.id,
    },
  });

  const param10book6 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book6.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "400",
      paramsId: param10book6.id,
    },
  });

  const book7 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "czern-kolory-zla-tom-2",
      catalogItemType: "book",
      catalogItemTitle: "Czerń. Kolory zła. Tom 2",
      catalogItemImageUrl: "/catalogItems/czern.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Zło rodzi się w ciemności. „Czerwień” uznana została za jeden z najważniejszych debiutów kryminalnych ostatnich lat, a autorka okrzykniętą nową gwiazdą gatunku. „Czerń” to druga część bestsellerowej serii „Kolory zła”. Opowieść o powrocie do miasta dzieciństwa, gdzie w otoczeniu gęstych kaszubskich lasów, w całkowitej ciemności, przed laty narodziło się zło. Przerażająca historia o piekle, które jest tutaj. Prokurator Leopold Bilski po sprawie Skalpela zostaje zesłany z Sopotu do prokuratury w Kartuzach. Nie najlepiej znosi tę degradację. Tymczasem Ania Górska błyskotliwie zdaje egzaminy i rozpoczyna pracę jako asesor prokuratorski. Pierwszą poważną sprawą, którą musi się zająć, jest zaginięcie trzynastoletniej dziewczynki. Jeden z tropów prowadzi do Kartuz, gdzie… znika kolejne dziecko. Czy można zacząć od nowa? Jakie upiory kryją się w przeszłości I przede wszystkim: kim jest Potwór z Kartuz? Okazuje się, że malownicze kaszubskie miasteczko skrywa niejedną wstrząsającą tajemnicę. „Czerń potwierdza to, co zapowiadała pierwsza część Kolorów zła. Małgorzata Oliwia Sobczak to potężny talent, prawdopodobnie największy, jaki pojawił się w ostatnich latach w polskim kryminale.”",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2020-05-06"),
      catalogItemWidth: "139",
      catalogItemHeight: "202",
    },
  });

  const param1book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1240067341",
      paramsId: param1book7.id,
    },
  });

  const param2book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Czerń. Kolory zła. Tom 2",
      paramsId: param2book7.id,
    },
  });

  const param3book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Sobczak Małgorzata Oliwia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book7.id,
    },
  });

  const param4book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo W.A.B.",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book7.id,
    },
  });

  const param5book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book7.id,
    },
  });

  const param6book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2020-05-06",
      paramsId: param6book7.id,
    },
  });

  const param7book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2020",
      paramsId: param7book7.id,
    },
  });

  const param8book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "139 x 202",
      paramsId: param8book7.id,
    },
  });

  const param9book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book7.id,
    },
  });

  const param10book7 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book7.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "416",
      paramsId: param10book7.id,
    },
  });

  const book8 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "zolc-kolory-zla-tom-4",
      catalogItemType: "book",
      catalogItemTitle: "Żółć. Kolory zła. Tom 4",
      catalogItemImageUrl: "/catalogItems/zolc.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Sopot. W wynajmowanym mieszkaniu odnalezione zostają zwłoki mężczyzny z podciętymi żyłami. Ślady kryminalistyczne wskazują, że nie było to samobójstwo, a nad wyraz okrutna zbrodnia, której ofiara - prowadzący szkołę uwodzenia Błażej Konarski - do końca zachowała świadomość. Prokurator Leopold Bilski wraz z policjantami Pająkiem i Kitą próbują dotrzeć do prawdy. W toku śledztwa wychodzą na jaw liczne sekrety o denacie oraz dręczonych przez niego kobietach - rzeźbiarce z darem synestezji oraz pewnej popularnej instatrenerce. Tropy śledcze się mnożą, prowadząc do gangu samochodowego, nielegalnych substancji, klubów nocnych i przemocowych związków. A także tajemniczych włosków odnalezionych na ciele denata…",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2024-05-15"),
      catalogItemWidth: "130",
      catalogItemHeight: "200",
    },
  });

  const param1book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1471286069",
      paramsId: param1book8.id,
    },
  });

  const param2book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Żółć. Kolory zła. Tom 4",
      paramsId: param2book8.id,
    },
  });

  const param3book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Sobczak Małgorzata Oliwia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book8.id,
    },
  });

  const param4book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo W.A.B.",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book8.id,
    },
  });

  const param5book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book8.id,
    },
  });

  const param6book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024-05-15",
      paramsId: param6book8.id,
    },
  });

  const param7book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2024",
      paramsId: param7book8.id,
    },
  });

  const param8book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "130 x 200",
      paramsId: param8book8.id,
    },
  });

  const param9book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book8.id,
    },
  });

  const param10book8 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book8.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "320",
      paramsId: param10book8.id,
    },
  });

  const book9 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "szelest",
      catalogItemType: "book",
      catalogItemTitle: "Szelest",
      catalogItemImageUrl: "/catalogItems/szelest.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Nowy thriller kryminalny Małgorzaty Oliwii Sobczak, autorki bestsellerowej serii „Kolory zła” („Czerwień”, „Czerń”, „Biel”), dzięki której została okrzyknięta gwiazdą polskiego kryminału. Dziennikarka Alicja Grabska dostaje zlecenie przetestowania mobilnej aplikacji „Place to Rest”, prowadzącej do zagadkowych miejsc na mapie Trójmiasta. W czasie jednego z wypadów natyka się na ciało zamordowanej kobiety. Śledztwo prowadzone przez detektywa Oskara Kordę wiedzie do mrocznego, pełnego tajemnic świata, w którym przeszłość nigdy nie daje o sobie zapomnieć.",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2021-11-10"),
      catalogItemWidth: "135",
      catalogItemHeight: "205",
    },
  });

  const param1book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1279990182",
      paramsId: param1book9.id,
    },
  });

  const param2book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Szelest",
      paramsId: param2book9.id,
    },
  });

  const param3book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Sobczak Małgorzata Oliwia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book9.id,
    },
  });

  const param4book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo W.A.B.",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book9.id,
    },
  });

  const param5book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book9.id,
    },
  });

  const param6book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2021-11-10",
      paramsId: param6book9.id,
    },
  });

  const param7book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2021",
      paramsId: param7book9.id,
    },
  });

  const param8book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "135 x 205",
      paramsId: param8book9.id,
    },
  });

  const param9book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book9.id,
    },
  });

  const param10book9 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book9.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "352",
      paramsId: param10book9.id,
    },
  });

  const book10 = await prisma.catalogItem.create({
    data: {
      catalogItemSlug: "szrama",
      catalogItemType: "book",
      catalogItemTitle: "Szrama",
      catalogItemImageUrl: "/catalogItems/szrama.webp",
      catalogItemImageAlt: "A book cover",
      catalogItemDescription:
        "Trzeci tom bestsellerowej serii granice ryzyka. Drgnij, a zginiesz. Sopot. Noc. W jednym z domów dochodzi do zagadkowego morderstwa. Życie traci młoda, piękna, pełna życia kobieta. Po paru miesiącach ma miejsce podobna zbrodnia. Sprawę prowadzi charyzmatyczny detektyw Oskar Korda wraz z ekolożką sądową Janiną Hinc i dziennikarką Alicją Grabską. Stopniowo wychodzi na jaw sekretna przeszłość ofiar, a pomiędzy trójką osób prowadzących dochodzenie pojawia się dziwne napięcie. Kryminalistyczne tropy się mnożą, w Trójmieście wybucha panika. Czy śledczy zdążą odkryć, kim jest zbrodniarz nazwany Młotkarzem z Sopotu, nim ten znów zaatakuje?",
      catalogItemGenre: "thriller",
      catalogItemPublishDate: new Date("2023-06-14"),
      catalogItemWidth: "137",
      catalogItemHeight: "198",
    },
  });

  const param1book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "identifier",
      catalogItemParamName: "Identyfikator produktu",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "1379307370",
      paramsId: param1book10.id,
    },
  });

  const param2book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "title",
      catalogItemParamName: "Tytuł",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Szrama",
      paramsId: param2book10.id,
    },
  });

  const param3book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "author",
      catalogItemParamName: "Autor",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Sobczak Małgorzata Oliwia",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param3book10.id,
    },
  });

  const param4book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "publisher",
      catalogItemParamName: "Wydawnictwo",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Wydawnictwo W.A.B.",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param4book10.id,
    },
  });

  const param5book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "language",
      catalogItemParamName: "Język wydania",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "polski",
      paramsId: param5book10.id,
    },
  });

  const param6book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishDate",
      catalogItemParamName: "Data premiery",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2023-06-14",
      paramsId: param6book10.id,
    },
  });

  const param7book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "publishYear",
      catalogItemParamName: "Rok wydania",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "2023",
      paramsId: param7book10.id,
    },
  });

  const param8book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "dimensions",
      catalogItemParamName: "Wymiary produktu [mm]",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "137 x 198",
      paramsId: param8book10.id,
    },
  });

  const param9book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "relatedTopics",
      catalogItemParamName: "Powiązane tematy",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "Nowości",
      catalogItemParamLink: "/katalog-glowny",
      paramsId: param9book10.id,
    },
  });

  const param10book10 = await prisma.params.create({
    data: {
      catalogItemParamType: "numberOfPages",
      catalogItemParamName: "Liczba stron",
      catalogItemId: book10.id,
    },
  });

  await prisma.paramsValue.create({
    data: {
      catalogItemParamValue: "352",
      paramsId: param10book10.id,
    },
  });

  await prisma.author.create({
    data: {
      authorName: "Mróz Remigiusz",
      authorAbout:
        "Remigiusz Mróz jest autorem kilkudziesięciu książek z wielu gatunków literackich - od thrillerów po science fiction. Do jego najpopularniejszych powieści można zaliczyć kryminały, takie jak np. „Kasacja”, „Zaginięcie” oraz inne książki z serii z Joanną Chyłką w roli bohaterki. Opublikował również kilka książek pod pseudonimem Ove Løgmansbø. Z wykształcenia jest prawnikiem.",
      catalogItems: {
        create: [
          { catalogItemId: book1.id },
          { catalogItemId: book2.id },
          { catalogItemId: book3.id },
          { catalogItemId: book4.id },
          { catalogItemId: book5.id },
        ],
      },
    },
  });

  await prisma.publisher.create({
    data: {
      publisherName: "Wydawnictwo Filia",
      publisherLink: "/katalog-glowny",
      publisherText:
        "„Filia” to wydawnictwo, które powstało w 2013 roku. Od początku swojej działalności stawia na literaturę piękną, zarówno tę współczesną, jak i klasyczną. W ofercie wydawnictwa znajdują się zarówno powieści obyczajowe, jak i kryminały, thrillery, romanse, fantastyka, literatura faktu, a także książki dla dzieci i młodzieży. Wydawnictwo Filia to miejsce, w którym każdy czytelnik znajdzie coś dla siebie.",
      catalogItems: {
        create: [
          { catalogItemId: book1.id },
          { catalogItemId: book2.id },
          { catalogItemId: book3.id },
          { catalogItemId: book4.id },
          { catalogItemId: book5.id },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      authorName: "Sobczak Małgorzata Oliwia",
      authorAbout:
        "Małgorzata Oliwia Sobczak jest autorką kilkunastu książek z różnych gatunków literackich - od powieści obyczajowych po romanse. Do jej najpopularniejszych książek można zaliczyć „Zaklęcie miłości”, „Zakazane uczucie” oraz inne powieści z serii z Joanną Chyłką w roli bohaterki. Z wykształcenia jest prawnikiem.",
      catalogItems: {
        create: [
          { catalogItemId: book6.id },
          { catalogItemId: book7.id },
          { catalogItemId: book8.id },
          { catalogItemId: book9.id },
          { catalogItemId: book10.id },
        ],
      },
    },
  });

  await prisma.publisher.create({
    data: {
      publisherName: "Wydawnictwo W.A.B.",
      publisherLink: "/katalog-glowny",
      publisherText:
        "Wydawnictwo W.A.B. powstało w 1991 roku. Od początku swojej działalności stawia na literaturę piękną, zarówno tę współczesną, jak i klasyczną. W ofercie wydawnictwa znajdują się zarówno powieści obyczajowe, jak i kryminały, thrillery, romanse, fantastyka, literatura faktu, a także książki dla dzieci i młodzieży. Wydawnictwo W.A.B. to miejsce, w którym każdy czytelnik znajdzie coś dla siebie.",
      catalogItems: {
        create: [
          { catalogItemId: book6.id },
          { catalogItemId: book7.id },
          { catalogItemId: book8.id },
          { catalogItemId: book9.id },
          { catalogItemId: book10.id },
        ],
      },
    },
  });

  const branchCatalogItems1 = [
    { branchId: branch1.id, catalogItemId: book1.id, catalogItemQuantity: 5 },
    { branchId: branch2.id, catalogItemId: book1.id, catalogItemQuantity: 3 },
    { branchId: branch3.id, catalogItemId: book1.id, catalogItemQuantity: 7 },
    { branchId: branch4.id, catalogItemId: book1.id, catalogItemQuantity: 2 },
    { branchId: branch5.id, catalogItemId: book1.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems1,
  });

  const branchCatalogItems2 = [
    { branchId: branch24.id, catalogItemId: book2.id, catalogItemQuantity: 5 },
    { branchId: branch30.id, catalogItemId: book2.id, catalogItemQuantity: 3 },
    { branchId: branch7.id, catalogItemId: book2.id, catalogItemQuantity: 7 },
    { branchId: branch18.id, catalogItemId: book2.id, catalogItemQuantity: 2 },
    { branchId: branch12.id, catalogItemId: book2.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems2,
  });

  const branchCatalogItems3 = [
    { branchId: branch17.id, catalogItemId: book3.id, catalogItemQuantity: 5 },
    { branchId: branch34.id, catalogItemId: book3.id, catalogItemQuantity: 3 },
    { branchId: branch23.id, catalogItemId: book3.id, catalogItemQuantity: 7 },
    { branchId: branch14.id, catalogItemId: book3.id, catalogItemQuantity: 2 },
    { branchId: branch5.id, catalogItemId: book3.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems3,
  });

  const branchCatalogItems4 = [
    { branchId: branch11.id, catalogItemId: book4.id, catalogItemQuantity: 5 },
    { branchId: branch19.id, catalogItemId: book4.id, catalogItemQuantity: 3 },
    { branchId: branch21.id, catalogItemId: book4.id, catalogItemQuantity: 7 },
    { branchId: branch25.id, catalogItemId: book4.id, catalogItemQuantity: 2 },
    { branchId: branch32.id, catalogItemId: book4.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems4,
  });

  const branchCatalogItems5 = [
    { branchId: branch7.id, catalogItemId: book5.id, catalogItemQuantity: 5 },
    { branchId: branch9.id, catalogItemId: book5.id, catalogItemQuantity: 3 },
    { branchId: branch13.id, catalogItemId: book5.id, catalogItemQuantity: 7 },
    { branchId: branch17.id, catalogItemId: book5.id, catalogItemQuantity: 2 },
    { branchId: branch23.id, catalogItemId: book5.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems5,
  });

  const branchCatalogItems6 = [
    { branchId: branch6.id, catalogItemId: book6.id, catalogItemQuantity: 5 },
    { branchId: branch17.id, catalogItemId: book6.id, catalogItemQuantity: 3 },
    { branchId: branch26.id, catalogItemId: book6.id, catalogItemQuantity: 7 },
    { branchId: branch27.id, catalogItemId: book6.id, catalogItemQuantity: 2 },
    { branchId: branch30.id, catalogItemId: book6.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems6,
  });

  const branchCatalogItems7 = [
    { branchId: branch20.id, catalogItemId: book7.id, catalogItemQuantity: 5 },
    { branchId: branch14.id, catalogItemId: book7.id, catalogItemQuantity: 3 },
    { branchId: branch22.id, catalogItemId: book7.id, catalogItemQuantity: 7 },
    { branchId: branch33.id, catalogItemId: book7.id, catalogItemQuantity: 2 },
    { branchId: branch8.id, catalogItemId: book7.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems7,
  });

  const branchCatalogItems8 = [
    { branchId: branch8.id, catalogItemId: book8.id, catalogItemQuantity: 5 },
    { branchId: branch21.id, catalogItemId: book8.id, catalogItemQuantity: 3 },
    { branchId: branch32.id, catalogItemId: book8.id, catalogItemQuantity: 7 },
    { branchId: branch14.id, catalogItemId: book8.id, catalogItemQuantity: 2 },
    { branchId: branch17.id, catalogItemId: book8.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems8,
  });

  const branchCatalogItems9 = [
    { branchId: branch16.id, catalogItemId: book9.id, catalogItemQuantity: 5 },
    { branchId: branch22.id, catalogItemId: book9.id, catalogItemQuantity: 3 },
    { branchId: branch13.id, catalogItemId: book9.id, catalogItemQuantity: 7 },
    { branchId: branch7.id, catalogItemId: book9.id, catalogItemQuantity: 2 },
    { branchId: branch15.id, catalogItemId: book9.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems9,
  });

  const branchCatalogItems10 = [
    { branchId: branch11.id, catalogItemId: book10.id, catalogItemQuantity: 5 },
    { branchId: branch22.id, catalogItemId: book10.id, catalogItemQuantity: 3 },
    { branchId: branch33.id, catalogItemId: book10.id, catalogItemQuantity: 7 },
    { branchId: branch16.id, catalogItemId: book10.id, catalogItemQuantity: 2 },
    { branchId: branch23.id, catalogItemId: book10.id, catalogItemQuantity: 6 },
  ];

  await prisma.branchCatalogItem.createMany({
    data: branchCatalogItems10,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
