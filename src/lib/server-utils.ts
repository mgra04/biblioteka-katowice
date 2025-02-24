import "server-only";
import { unstable_cache } from "next/cache";
import prisma from "./db";
import { notFound, redirect } from "next/navigation";
import {
  CATALOG_ITEMS_PER_PAGE,
  EVENTS_PER_PAGE,
  NEWS_PER_PAGE,
} from "./constants";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";

export async function checkAuth() {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/login");
  }
  return session;
}

export async function getUserByEmail(email: User["email"]) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export const getFavouriteEvents = async (userId: string) => {
  const favouriteEvents = await prisma.userFavouriteEvent.findMany({
    where: { userId },
    include: {
      event: {
        select: {
          id: true,
          eventSlug: true,
          eventType: true,
          eventTargetGroup: true,
          eventTitle: true,
          eventDescription: true,
          eventMobileImageUrl: true,
          eventDesktopImageUrl: true,
          eventImageAlt: true,
          eventStartDate: true,
          eventEndDate: true,
          eventStartHour: true,
          branch: {
            select: {
              branchName: true,
              branchAddressStreet: true,
            },
          },
          eventTags: {
            select: {
              id: true,
              tagVariant: true,
              tagDescription: true,
            },
          },
        },
      },
    },
  });
  return favouriteEvents.map((fav) => fav.event);
};

export const getFavouriteNews = async (userId: string) => {
  const favouriteNews = await prisma.userFavouriteNews.findMany({
    where: { userId },
    include: {
      news: {
        select: {
          id: true,
          newsSlug: true,
          newsTitle: true,
          newsDescription: true,
          newsDate: true,
          newsMobileImageUrl: true,
          newsDesktopImageUrl: true,
          newsImageAlt: true,
        },
      },
    },
  });
  return favouriteNews.map((fav) => fav.news);
};

export const getFavouriteCatalogItems = unstable_cache(
  async (userId: string) => {
    const favouriteCatalogItems =
      await prisma.userFavouriteCatalogItem.findMany({
        where: { userId },
        include: {
          catalogItem: {
            select: {
              id: true,
              catalogItemSlug: true,
              catalogItemType: true,
              catalogItemTitle: true,
              catalogItemImageUrl: true,
              catalogItemImageAlt: true,
              catalogItemGenre: true,
              catalogItemPublishDate: true,
              catalogItemWidth: true,
              catalogItemHeight: true,
              CatalogItemAuthor: true,
              CatalogItemPublisher: true,
              branches: {
                select: {
                  id: true,
                  branchId: true,
                  catalogItemId: true,
                  catalogItemQuantity: true,
                  branch: {
                    select: {
                      branchName: true,
                      branchAddressStreet: true,
                    },
                  },
                },
              },
              catalogItemParams: {
                where: {
                  catalogItemParamType: {
                    in: ["author", "publisher", "publishYear", "numberOfPages"],
                  },
                },
                select: {
                  id: true,
                  catalogItemParamType: true,
                  catalogItemParamName: true,
                  catalogItemParamValue: true,
                },
              },
            },
          },
        },
      });
    return favouriteCatalogItems.map((fav) => fav.catalogItem);
  }
);

export const getOtherBooksByAuthor = async (
  authorId: string,
  excludeBookId: string
) => {
  const otherBooks = await prisma.catalogItem.findMany({
    where: {
      CatalogItemAuthor: {
        some: {
          authorId: authorId,
        },
      },
      id: {
        not: excludeBookId,
      },
    },
    select: {
      id: true,
      catalogItemSlug: true,
      catalogItemType: true,
      catalogItemTitle: true,
      catalogItemImageUrl: true,
      catalogItemImageAlt: true,
      catalogItemGenre: true,
      catalogItemPublishDate: true,
      catalogItemWidth: true,
      catalogItemHeight: true,
      CatalogItemAuthor: true,
      CatalogItemPublisher: true,
      branches: {
        select: {
          id: true,
          branchId: true,
          catalogItemId: true,
          catalogItemQuantity: true,
          branch: {
            select: {
              branchName: true,
              branchAddressStreet: true,
            },
          },
        },
      },
      catalogItemParams: {
        where: {
          catalogItemParamType: {
            in: ["author", "publisher", "publishYear", "numberOfPages"],
          },
        },
        select: {
          id: true,
          catalogItemParamType: true,
          catalogItemParamName: true,
          catalogItemParamValue: true,
        },
      },
    },
  });

  return otherBooks;
};

export const getCatalogItem = unstable_cache(async (slug: string) => {
  const catalogItem = await prisma.catalogItem.findUnique({
    where: {
      catalogItemSlug: slug,
    },
    select: {
      id: true,
      catalogItemSlug: true,
      catalogItemType: true,
      catalogItemTitle: true,
      catalogItemImageUrl: true,
      catalogItemImageAlt: true,
      catalogItemDescription: true,
      catalogItemWidth: true,
      catalogItemHeight: true,
      catalogItemParams: {
        select: {
          id: true,
          catalogItemParamType: true,
          catalogItemParamName: true,
          catalogItemParamValue: {
            select: {
              id: true,
              catalogItemParamValue: true,
              catalogItemParamLink: true,
            },
          },
        },
      },
      branches: {
        select: {
          id: true,
          branchId: true,
          catalogItemId: true,
          catalogItemQuantity: true,
          branch: {
            select: {
              branchName: true,
              branchAddressStreet: true,
            },
          },
        },
      },
      CatalogItemAuthor: {
        select: {
          author: {
            select: {
              id: true,
              authorName: true,
              authorAbout: true,
            },
          },
        },
      },
    },
  });

  if (!catalogItem) {
    notFound();
  }

  return catalogItem;
});

export const getCatalogItems = unstable_cache(async (page = 1) => {
  const validPage = Number.isInteger(page) && page > 0 ? page : 1;

  const catalogItems = await prisma.catalogItem.findMany({
    select: {
      id: true,
      catalogItemSlug: true,
      catalogItemType: true,
      catalogItemTitle: true,
      catalogItemImageUrl: true,
      catalogItemImageAlt: true,
      catalogItemGenre: true,
      catalogItemPublishDate: true,
      catalogItemWidth: true,
      catalogItemHeight: true,
      CatalogItemAuthor: true,
      CatalogItemPublisher: true,
      branches: {
        select: {
          id: true,
          branchId: true,
          catalogItemId: true,
          catalogItemQuantity: true,
          branch: {
            select: {
              branchName: true,
              branchAddressStreet: true,
            },
          },
        },
      },
      catalogItemParams: {
        where: {
          catalogItemParamType: {
            in: ["author", "publisher", "publishYear", "numberOfPages"],
          },
        },
        select: {
          id: true,
          catalogItemParamType: true,
          catalogItemParamName: true,
          catalogItemParamValue: true,
        },
      },
    },
    take: CATALOG_ITEMS_PER_PAGE,
    skip: (validPage - 1) * CATALOG_ITEMS_PER_PAGE,
  });

  const totalCount = await prisma.catalogItem.count();

  return { catalogItems, totalCount };
});

export const getNews = unstable_cache(async (page = 1, amount?) => {
  const validPage = Number.isInteger(page) && page > 0 ? page : 1;

  const news = await prisma.news.findMany({
    select: {
      id: true,
      newsSlug: true,
      newsTitle: true,
      newsDescription: true,
      newsDate: true,
      newsMobileImageUrl: true,
      newsDesktopImageUrl: true,
      newsImageAlt: true,
    },
    take: amount ?? NEWS_PER_PAGE,
    skip: amount ? 0 : (validPage - 1) * NEWS_PER_PAGE,
  });

  const totalCount = await prisma.news.count();

  return { news, totalCount };
});

export const getNewsItem = unstable_cache(async (slug: string) => {
  const newsItem = await prisma.news.findUnique({
    where: {
      newsSlug: slug,
    },
    select: {
      id: true,
      newsSlug: true,
      newsTitle: true,
      newsDescription: {
        where: { parentId: null },
        include: {
          subItems: true,
        },
      },
      newsDate: true,
      newsMobileImageUrl: true,
      newsDesktopImageUrl: true,
      newsImageAlt: true,
    },
  });

  if (!newsItem) notFound();

  return newsItem;
});

export const getBranchesForMap = unstable_cache(async () => {
  const branches = await prisma.branch.findMany({
    select: {
      id: true,
      branchName: true,
      branchLatitude: true,
      branchLongitude: true,
      branchNumber: true,
    },
  });

  return branches;
});

export const getBranchForMap = unstable_cache(async (id: string) => {
  const branch = await prisma.branch.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      branchSlug: true,
      branchImageUrl: true,
      branchImageAlt: true,
      branchNumber: true,
      branchName: true,
      branchAddressStreet: true,
      branchGoogleMapLink: true,
      branchAdaptedToDisabilities: true,
      branchFacebookLink: true,
      branchInstagramLink: true,
      branchWebsiteLink: true,
      branchOpeningHours: {
        select: {
          day: true,
          isOpen: true,
          openTime: true,
          closeTime: true,
        },
      },
    },
  });
  return branch;
});

export const getEvents = unstable_cache(
  async (page = 1, amount?: number, branchId?: string, eventId?: string) => {
    const validPage = Number.isInteger(page) && page > 0 ? page : 1;

    const selectFields = {
      id: true,
      eventSlug: true,
      eventType: true,
      eventTargetGroup: true,
      eventTitle: true,
      eventDescription: true,
      eventMobileImageUrl: true,
      eventDesktopImageUrl: true,
      eventImageAlt: true,
      eventStartDate: true,
      eventEndDate: true,
      eventStartHour: true,
      branch: {
        select: {
          branchName: true,
          branchAddressStreet: true,
        },
      },
      eventTags: {
        select: {
          id: true,
          tagVariant: true,
          tagDescription: true,
        },
      },
    };

    const whereCondition: { branchId?: string; id?: { not: string } } = {};
    if (branchId) {
      whereCondition.branchId = branchId;
    }
    if (eventId) {
      whereCondition.id = { not: eventId };
    }

    const baseQuery = {
      where: whereCondition,
      select: selectFields,
    };

    if (branchId) {
      const events = await prisma.event.findMany(baseQuery);
      const totalCount = events.length;
      return { events, totalCount };
    }

    const events = await prisma.event.findMany({
      ...baseQuery,
      take: amount ?? EVENTS_PER_PAGE,
      skip: amount ? 0 : (validPage - 1) * EVENTS_PER_PAGE,
    });

    const totalCount = await prisma.event.count();

    return { events, totalCount };
  }
);

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: {
      eventSlug: slug,
    },
    select: {
      id: true,
      eventSlug: true,
      eventType: true,
      eventTargetGroup: true,
      eventTitle: true,
      eventDescription: true,
      eventImageAlt: true,
      eventDesktopImageUrl: true,
      eventStartDate: true,
      eventEndDate: true,
      eventStartHour: true,
      branch: {
        select: {
          id: true,
          branchNumber: true,
          branchName: true,
          branchAddressStreet: true,
          branchGoogleMapLink: true,
        },
      },
      eventTags: {
        select: {
          id: true,
          tagVariant: true,
          tagDescription: true,
        },
      },
    },
  });

  if (!event) notFound();

  return event;
});

export const getBranches = unstable_cache(async (page = 1) => {
  const validPage = Number.isInteger(page) && page > 0 ? page : 1;

  const branches = await prisma.branch.findMany({
    select: {
      id: true,
      branchSlug: true,
      branchImageUrl: true,
      branchImageAlt: true,
      branchNumber: true,
      branchName: true,
      branchAddressStreet: true,
      branchGoogleMapLink: true,
      branchAdaptedToDisabilities: true,
      branchFacebookLink: true,
      branchInstagramLink: true,
      branchWebsiteLink: true,
      branchOpeningHours: {
        select: {
          day: true,
          isOpen: true,
          openTime: true,
          closeTime: true,
        },
      },
    },
    take: 9,
    skip: (validPage - 1) * 9,
  });

  const totalCount = await prisma.branch.count();

  return { branches, totalCount };
});

export const getBranch = unstable_cache(async (slug: string) => {
  const branch = await prisma.branch.findUnique({
    where: {
      branchSlug: slug,
    },
    include: {
      branchOpeningHours: {
        select: {
          day: true,
          isOpen: true,
          openTime: true,
          closeTime: true,
        },
      },
      branchOffer: {
        select: {
          items: {
            select: {
              id: true,
              text: true,
              linkText: true,
              linkUrl: true,
              subItems: {
                select: {
                  id: true,
                  text: true,
                  linkText: true,
                  linkUrl: true,
                },
              },
            },
          },
        },
      },
      branchEvents: {
        select: {
          id: true,
          eventSlug: true,
          eventType: true,
          eventTargetGroup: true,
          eventTitle: true,
          eventDescription: true,
          eventMobileImageUrl: true,
          eventDesktopImageUrl: true,
          eventImageAlt: true,
          eventStartDate: true,
          eventEndDate: true,
          eventStartHour: true,
          branch: {
            select: {
              branchName: true,
              branchAddressStreet: true,
            },
          },
          eventTags: {
            select: {
              id: true,
              tagVariant: true,
              tagDescription: true,
            },
          },
        },
      },
    },
  });

  if (!branch) notFound();

  return branch;
});
