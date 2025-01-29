import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


export default function BookSkeleton() {
  return (
    <div>
      <div className="group rounded-lg border border-neutral-200 p-4 h-full">
        <div className="relative h-0 pb-[100%] border border-neutral-200 rounded-md bg-neutral-200">
          <Skeleton className="absolute inset-0" />
        </div>
        <div className="mt-2">
          <div className="text-sm font-medium text-neutral-900 group-hover:text-digital-red"><Skeleton className="w-1/2 h-4" /></div>
          <div className="text-sm text-neutral-600"><Skeleton className="w-1/3 mt-2 h-4" /></div>
          <div className="flex flex-wrap gap-1 mt-2">
            <Skeleton className="w-1/6 h-4" />
            <Skeleton className="w-1/4 h-4" />
            <Skeleton className="w-1/5 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
