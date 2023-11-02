"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Article } from "@/components/article";

export const Articles = () => {
  const articles = useQuery(api.articles.get);

  return (
    <section className="py-10 lg:py-20">
      <div className="container flex flex-col gap-10 lg:gap-12">
        <div className="flex items-end justify-between">
          <h2 className="text-[40px] font-medium font-poppins leading-none">Articles</h2>
          <Button variant="link">
            More Articles
            <ArrowRight width={20} height={20} />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles ? (
            articles?.map((article) => {
              return (
                <Article
                  key={article._id}
                  title={article.title}
                  img={article.img}
                />
              );
            })
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
