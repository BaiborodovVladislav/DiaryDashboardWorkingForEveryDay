import { CheckIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface ButtonProps {
	text: string;
	className: string;
    }

interface CardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttons: ButtonProps[] | null;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  features,
  buttons,
}) => (
  <CardContainer className="inter-var">
    <CardBody className="gb-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:hover-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {title}
        <h2 className="text-6xl">{price}</h2>
      </CardItem>
      <CardItem
        translateZ="60"
        className="text-sm max-w-sm mt-2 dark:text-neutral-300 text-neutral-500"
      >
        {description}
        <ul className="my-4 flex flex-col gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      </CardItem>
      <div className="flex justify-between items-center mt-8">
        {Array.isArray(buttons)
          ? buttons.map((button, index) => (
              <CardItem
                key={index}
                translateZ={20}
                as="button"
                className={button.className}
              >
                {button.text}
              </CardItem>
            ))
          : null}
      </div>
    </CardBody>
  </CardContainer>
);

export default Card;
