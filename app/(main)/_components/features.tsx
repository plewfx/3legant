import { features } from "@/constants";

export const Features = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex-auto px-4 py-8 lg:px-8 lg:py-12 bg-neutural-02"
          >
            <div className="flex flex-col items-center">
              {<feature.icon width={48} height={48} />}
              <h3 className="mt-4 text-xl font-semibold leading-tight text-center text-primary-500">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-center text-primary-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
