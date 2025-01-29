import Header from "@/components/ui/1 - header";
import { Source_Sans_3 } from "next/font/google";
import SearchComp from "@/components/ui/search";
import dataset from "@/app/dataset.json";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ChevronLeft,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";
import Link from "next/link";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Page({ params }) {
  // Find the poem data from the dataset
  const poem = dataset.find((item) => item["ITEM ID"] === params.id);

  if (!poem) {
    return <div>Poem not found</div>;
  }

  return (
    <div className="flex-col flex h-fit w-screen scroll-smooth overflow-hidden min-h-screen justify-between">
      <div>
        <div className="bg-cover bg-center h-full w-full">
          <div className="relative h-full w-full bg-[url('/rockTool.png')] bg-opacity-5">
            <div className="mx-auto h-full w-full p-4 md:px-6 pt-6 lg:pt-10 lg:px-8 relative">
              <Header />

              <div className="max-w-[1040px] mx-auto mt-4">
                <Link
                  href="/collection"
                  className="inline-flex items-center gap-2 text-neutral-600 bg-white pr-4 border border-neutral-200 p-2 rounded-full hover:text-neutral-900 mb-6 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Collection</span>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Video Player Section */}
                  <div className="relative bg-white border border-neutral-200 p-3 h-fit rounded-xl overflow-hidden">
                    <VideoPlayer
                      src={`/videos/${poem["ITEM ID"]}.MP4`}
                      title={"Post by " + poem["CREATOR"]}
                      poster={`/images/${poem["ITEM ID"]}.png`}
                    />
                  </div>

                  {/* Poem Information Section */}
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="text-2xl font-semibold mb-2">
                          {poem["POEM"]}
                        </h1>
                        <h2 className="text-xl text-neutral-600 mb-4">
                          {poem["POET"]}
                        </h2>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="font-normal">
                          {poem["TYPE"]}
                        </Badge>
                      </div>
                    </div>

                    <div className="h-px bg-neutral-200 my-2"></div>

                    {/* Creator Info */}
                    <div className="flex items-center gap-3 my-2">
                      <Avatar>
                        <AvatarFallback>
                          {poem["CREATOR"].slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{poem["CREATOR"]}</p>
                        <p className="text-sm text-neutral-600">
                          {poem["DATE OF UPLOAD"]} • {poem["VIEWS"]} views
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-neutral-200 my-2"></div>

                    {/* Additional Info */}
                    <div className="mt-4">
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Sound:</span>{" "}
                          {poem["SOUND"]}
                        </p>
                        <p>
                          <span className="font-medium">Music:</span>{" "}
                          {poem["MUSIC"]}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 my-4">
                        {poem["HASHTAGS"] !== "n/a" &&
                          poem["HASHTAGS"].split("; ").map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>

                      <div className="h-px bg-neutral-200 my-2"></div>

                      {/* Poem Text */}
                      <div className="my-4 space-y-6">
                        <div>
                          <h3 className="font-medium mb-2">Ukrainian Text</h3>
                          <p className="whitespace-pre-line text-neutral-600">
                            {poem["UKRAINIAN TEXT"]}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">English Text</h3>
                          <p className="whitespace-pre-line text-neutral-600">
                            {poem["ENGLISH TEXT"]}
                          </p>
                        </div>
                      </div>

                      <div className="h-px bg-neutral-200 my-2"></div>

                      {/* Engagement Stats */}
                      <div className="flex gap-6 my-4">
                        <p className="font-medium">Engagement:</p>
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          <span>{poem["LIKES"]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>{poem["COMMENTS"]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bookmark className="w-5 h-5" />
                          <span>{poem["SAVES"]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Share2 className="w-5 h-5" />
                          <span>{poem["SHARES"]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
