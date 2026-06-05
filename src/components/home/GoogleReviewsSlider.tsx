"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";

type Review = {
  author: string;
  avatar: string | null;
  profileUrl: string | null;
  rating: number;
  text: string;
  time: string;
};

type ReviewsData = {
  configured: boolean;
  reviews: Review[];
  overallRating: number | null;
  totalReviews: number | null;
  googleMapsUrl: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={`size-4 ${
            star <= Math.round(rating)
              ? "fill-[#f9b233] text-[#f9b233]"
              : "fill-white/15 text-white/25"
          }`}
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function GoogleReviewsSlider() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let mounted = true;

    fetch("/api/reviews")
      .then((response) => response.json() as Promise<ReviewsData>)
      .then((reviewsData) => {
        if (mounted) {
          setData(reviewsData);
        }
      })
      .catch(() => {
        if (mounted) {
          setData(null);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const reviews = useMemo(() => data?.reviews ?? [], [data]);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (reviews.length <= 1 || isHovered) {
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((previous) => (previous + 1) % reviews.length);
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, reviews.length]);

  if (!data?.configured || reviews.length === 0) {
    return null;
  }

  const activeReview = reviews[current] ?? reviews[0];
  const overallRating = data.overallRating ?? activeReview.rating;
  const totalReviews = data.totalReviews;

  return (
    <section className="bg-[#0b2a45] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
            Customer Reviews
          </p>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">
            What Local Customers Say on Google
          </h2>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-md border border-white/10 bg-white/[0.08] px-5 py-3 text-sm font-bold text-white/80">
            <span className="font-black text-white">{overallRating.toFixed(1)}</span>
            <StarRating rating={overallRating} />
            {typeof totalReviews === "number" ? (
              <span>{totalReviews} Google reviews</span>
            ) : (
              <span>Google reviews</span>
            )}
          </div>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-4xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <article className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:p-8">
            <Quote
              aria-hidden="true"
              className="absolute right-6 top-6 size-16 text-white/[0.08]"
            />
            <div key={`${activeReview.author}-${current}`} className="animate-[fadeInReview_0.35s_ease]">
              <div className="flex items-start gap-4">
                <div
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f58220] text-sm font-black text-white"
                  style={
                    activeReview.avatar
                      ? {
                          backgroundImage: `url(${activeReview.avatar})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }
                      : undefined
                  }
                  aria-hidden="true"
                >
                  {activeReview.avatar ? null : initials(activeReview.author)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-black leading-6 text-white">
                    {activeReview.author}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs font-bold text-white/55">
                    <StarRating rating={activeReview.rating} />
                    {activeReview.time ? <span>{activeReview.time}</span> : null}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base font-medium leading-[1.75] text-white/78">
                &ldquo;{activeReview.text}&rdquo;
              </p>
            </div>
          </article>

          {reviews.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrent((previous) =>
                    previous === 0 ? reviews.length - 1 : previous - 1,
                  )
                }
                className="absolute -left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[#f58220] text-white shadow-lg shadow-black/20 transition hover:bg-[#dc6d0c] sm:-left-6"
                aria-label="Previous Google review"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrent((previous) => (previous + 1) % reviews.length)
                }
                className="absolute -right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[#f58220] text-white shadow-lg shadow-black/20 transition hover:bg-[#dc6d0c] sm:-right-6"
                aria-label="Next Google review"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
              <div className="mt-6 flex justify-center gap-2">
                {reviews.map((review, index) => (
                  <button
                    key={`${review.author}-${index}`}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition ${
                      index === current ? "w-8 bg-[#f58220]" : "w-2 bg-white/30"
                    }`}
                    aria-label={`Show Google review ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : null}

          <div className="mt-8 text-center">
            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-black text-[#f58220] transition hover:text-white"
            >
              View all reviews on Google
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
