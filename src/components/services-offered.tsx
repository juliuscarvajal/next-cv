import { servicesOffered } from "@/constants/servicesOffered";
import { Card } from "./ui/card";

export const ServicesOffered = () => {
  return (
    <>
      {servicesOffered.map((service) => {
        return (
          <Card
            key={service}
            className="px-3 py-1 rounded-full text-black bg-gradient-to-r from-stone-200 to-stone-50 dark:from-stone-400 dark:to-stone-50"
          >
            {service}
          </Card>
        );
      })}
    </>
  );
};
