import { siteConfig } from "@/content/site";

const SITE_URL = siteConfig.websiteHref;
const IST = "+05:30";

export interface CommunityEvent {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string[];
  eventUrl: string;
  registrationUrl: string;
  validFrom: string;
  location: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  organizer: {
    name: string;
    url: string;
  };
  isFree: boolean;
  priceCurrency: string;
}

/**
 * Next occurrence of the Nth weekday in a month (0 = Sunday … 6 = Saturday).
 * Used for "every 3rd Saturday" Hyderabad Founders Network cadence.
 */
function nthWeekdayOfMonth(
  year: number,
  month: number,
  weekday: number,
  n: number
): Date {
  const first = new Date(year, month, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, month, 1 + offset + (n - 1) * 7);
}

function formatIstDateTime(date: Date, hours: number, minutes: number): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const h = String(hours).padStart(2, "0");
  const min = String(minutes).padStart(2, "0");
  return `${y}-${m}-${d}T${h}:${min}:00${IST}`;
}

/** Upcoming 3rd Saturday (or following month if today is after that date). */
export function getNextThirdSaturday(from: Date = new Date()): Date {
  const year = from.getFullYear();
  const month = from.getMonth();
  let candidate = nthWeekdayOfMonth(year, month, 6, 3);
  // Compare calendar days in local time
  const startOfToday = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  if (candidate < startOfToday) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    candidate = nthWeekdayOfMonth(nextYear, nextMonth, 6, 3);
  }
  return candidate;
}

/**
 * Builds Event structured data for the next Hyderabad Founders Network meetup.
 * Includes recommended GSC fields: endDate, image, organizer.url, offers.validFrom.
 * Omits performer (community networking, no fixed featured speaker).
 */
export function getNextCommunityEvent(from: Date = new Date()): CommunityEvent {
  const day = getNextThirdSaturday(from);
  const startDate = formatIstDateTime(day, 10, 0);
  const endDate = formatIstDateTime(day, 13, 0);
  // Registration considered open from the 1st of that month
  const validFrom = formatIstDateTime(new Date(day.getFullYear(), day.getMonth(), 1), 9, 0);
  const eventUrl = `${SITE_URL}/products/trizen-community`;
  const registrationUrl = "https://community.trizenventures.com/";

  return {
    name: "Hyderabad Founders Network - Open House",
    description:
      "Monthly community-led meetup for founders, operators, and aspiring entrepreneurs. Free, offline roundtable at DraperU India, Gachibowli (~40 seats). Real conversations beyond the pitch deck.",
    startDate,
    endDate,
    image: [`${SITE_URL}/products/trizen-community.jpg`],
    eventUrl,
    registrationUrl,
    validFrom,
    location: {
      name: "DraperU India",
      streetAddress: "Gachibowli",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
    organizer: {
      name: "Trizen Community",
      url: SITE_URL,
    },
    isFree: true,
    priceCurrency: "INR",
  };
}

/** schema.org Event JSON-LD object (ready for script tag) */
export function buildCommunityEventJsonLd(event: CommunityEvent = getNextCommunityEvent()) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: event.image,
    url: event.eventUrl,
    location: {
      "@type": "Place",
      name: event.location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.location.streetAddress,
        addressLocality: event.location.addressLocality,
        addressRegion: event.location.addressRegion,
        postalCode: event.location.postalCode,
        addressCountry: event.location.addressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.organizer.name,
      url: event.organizer.url,
    },
    offers: {
      "@type": "Offer",
      url: event.registrationUrl,
      price: "0",
      priceCurrency: event.priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: event.validFrom,
    },
  };
}
