type GooglePlaceReview = {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
  };
};

const fieldMask = "reviews,rating,userRatingCount,googleMapsUri";

export const revalidate = 86400;

function emptyReviewsResponse(configured: boolean, error?: string) {
  return Response.json({
    configured,
    error,
    reviews: [],
    overallRating: null,
    totalReviews: null,
    googleMapsUrl: "https://share.google/Peau4fIsDciy15ix4",
  });
}

export async function GET() {
  const placeId =
    process.env.GOOGLE_PLACE_ID ?? process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return emptyReviewsResponse(false, "Google Places API is not configured.");
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": fieldMask,
        },
        next: {
          revalidate,
        },
      },
    );

    if (!response.ok) {
      return emptyReviewsResponse(true, "Google Places API request failed.");
    }

    const data = (await response.json()) as {
      reviews?: GooglePlaceReview[];
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
    };

    const reviews = (data.reviews ?? [])
      .filter((review) => (review.rating ?? 0) >= 4)
      .map((review) => ({
        author: review.authorAttribution?.displayName ?? "Google reviewer",
        avatar: review.authorAttribution?.photoUri ?? null,
        profileUrl: review.authorAttribution?.uri ?? null,
        rating: review.rating ?? 0,
        text: review.text?.text ?? "",
        time: review.relativePublishTimeDescription ?? "",
      }))
      .filter((review) => review.text.length > 0);

    return Response.json({
      configured: true,
      reviews,
      overallRating: data.rating ?? null,
      totalReviews: data.userRatingCount ?? null,
      googleMapsUrl: data.googleMapsUri ?? "https://share.google/Peau4fIsDciy15ix4",
    });
  } catch {
    return emptyReviewsResponse(true, "Google Places API request failed.");
  }
}
