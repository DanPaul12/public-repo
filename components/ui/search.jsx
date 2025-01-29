"use client";
import { Filter, ListFilter, Search, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import BookSkeleton from "./bookSkel";
import SVGback from "./SVGback";
import archiveData from "@/app/archive.json";
import dataset from "@/app/dataset.json";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./avatar";

const filterTypes = [
  { label: "Posted in 2024", value: "24" },
  { label: "Posted in 2023", value: "23" },
  { label: "Posted in 2022", value: "22" },
];

const filterTags = [
  "Poetry",
  "Photo Slideshow",
  "Recorded Footage",
  "Author Reading",
  "Ukraine",
  "War Poetry",
];

// Transform the dataset to match our UI needs
const transformedDataset = dataset.map((item) => ({
  id: item["ITEM ID"],
  title: item["POEM"],
  poet: item["POET"],
  type: item["TYPE"],
  dateUploaded: item["DATE OF UPLOAD"],
  views: item["VIEWS"],
  likes: item["LIKES"],
  creator: item["CREATOR"],
  sound: item["SOUND"],
  music: item["MUSIC"],
  hashtags: item["HASHTAGS"] !== "n/a" ? item["HASHTAGS"].split("; ") : [],
  caption: item["CAPTION"],
  keyWords: item["KEY WORDS"] !== "" ? item["KEY WORDS"].split("; ") : [],
  ukrainianText: item["UKRAINIAN TEXT"],
  englishText: item["ENGLISH TEXT"],
  // Generate tags from available data
  tags: [
    ...(item["KEY WORDS"] !== "" ? item["KEY WORDS"].split("; ") : []),
    ...(item["HASHTAGS"] !== "n/a" ? item["HASHTAGS"].split("; ") : []),
    item["TYPE"],
    item["SOUND"],
    item["DATE OF UPLOAD"].split(".").pop(),
  ],
  // Extract year for filtering
  posted: item["DATE OF UPLOAD"].split(".").pop(),
}));

export default function Home() {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let formRef = useRef(null);

  const searchFilter = (array) => {
    return array.filter(
      (e) =>
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.poet.toLowerCase().includes(query.toLowerCase()) ||
        e.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
        e.posted.includes(query) ||
        e.ukrainianText.toLowerCase().includes(query.toLowerCase()) ||
        e.englishText.toLowerCase().includes(query.toLowerCase()) ||
        e.dateUploaded.includes(query) ||
        e.creator.toLowerCase().includes(query.toLowerCase()) ||
        e.music.toLowerCase().includes(query.toLowerCase()) ||
        e.sound.toLowerCase().includes(query.toLowerCase()) ||
        e.hashtags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        ) ||
        e.caption.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filtered = searchFilter(transformedDataset);

  useEffect(() => {
    formRef.current?.querySelector("input")?.focus();
  }, []);

  return (
    <div className="flex-col flex h-full w-full scroll-smooth">
      <div className="max-w-[1037px] h-full w-full mx-auto mt-5">
        <label
          htmlFor="poem"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Search across the collection of poems and poets
        </label>
        <form
          ref={formRef}
          action="/collection"
          className="mt-2 flex rounded-xl shadow-sm group"
        >
          <div className="relative flex flex-grow items-stretch focus-within:z-10 border-neutral-200 border rounded-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 " aria-hidden="true" />
            </div>
            <input
              type="text"
              name="poem"
              id="poem"
              onChange={handleChange}
              value={query}
              className="block w-full rounded-xl py-3  pl-10 text-gray-900 focus:ring-1 focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Spoken Word Poetry..."
            />
          </div>
          {/* <button type="button" className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-xl px-3 py-2 text-sm font-medium text-gray-900 group-focus:border-digital-red border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-wait">
            Search
          </button> */}
        </form>
        <div className="flex w-full flex-row justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="ring-0 focus:ring-0">
              <button className="flex flex-wrap justify-start my-3 gap-2">
                <Badge
                  className="rounded-lg px-2 shadow-sm py-1 text-sm font-[400] bg-gradient-to-b from-black/90 to-black border border-[#000] outline outline-[0.8px] hover:shadow-sm ease-linear transition-shadow outline-white/20 outline-offset-[-1.5px] text-white"
                  variant="outline"
                >
                  Filter <ListFilter className="ml-2 h-4 w-4" />
                </Badge>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="w-48 h-64 overflow-scroll"
            >
              <DropdownMenuLabel className="text-sm font-medium text-neutral-900">
                Tags
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={query} onChange={setQuery}>
                {filterTags.map((tag, index) => (
                  <DropdownMenuRadioItem
                    key={index}
                    value={tag}
                    className="text-sm font-medium text-neutral-900"
                  >
                    {tag}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-wrap justify-end my-3 gap-2">
            {filterTypes.map((filter, index) => (
              <div key={index} className="">
                <button onClick={() => setQuery(filter.value)}>
                  <Badge
                    className="rounded-lg px-2 shadow-sm py-1 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                    variant="outline"
                  >
                    {filter.label}
                  </Badge>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4 max-w-[1440px] w-full h-fit sm:mx-auto relative">
        {filtered.map((item, index) => (
          <Link key={index} href={`/collection/${item.id}`}>
            <div className="group rounded-lg border border-neutral-200 p-4 h-full">
              <div className="relative aspect-[3/4] border border-neutral-200 rounded-md bg-neutral-200">
                <Image
                  src={`/images/${item.id}.png`}
                  alt={item.title}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all ease-linear duration-100"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-neutral-900 group-hover:text-blue-600">
                  {item.title} by {item.poet}
                </p>
                <p className="text-sm text-neutral-600">
                  {item.dateUploaded} • {item.views} views
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {item.tags.slice(0, 6).map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs font-normal text-neutral-900"
                    >
                      {tag}
                    </Badge>
                  ))}

                  {item.tags.length > 6 && (
                    <Badge
                      variant="outline"
                      className="text-xs font-normal text-neutral-900"
                    >
                      +{item.tags.length - 6}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-row items-center gap-2 mt-4">
                  <Avatar>
                    <AvatarFallback>{item.creator.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm text-neutral-600">{item.creator}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="absolute flex flex-col items-center justify-center w-full h-fit">
            <SVGback className="text-neutral-400 w-full h-48 absolute z-[-1]" />
            <h1 className="text-2xl font-medium tracking-tight text-neutral-900 text-center mt-5 z-10">
              No Results Found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
