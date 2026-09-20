import {
  FiArrowDown,
  FiArrowUpRight,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiScissors,
  FiKey,
} from "react-icons/fi";
import { GiSewingNeedle, GiRunningShoe } from "react-icons/gi";
import { PiKnife } from "react-icons/pi";

const icons = {
  arrow: FiArrowUpRight,
  down: FiArrowDown,
  pin: FiMapPin,
  message: FiMessageCircle,
  phone: FiPhone,
  plus: FiPlus,
  scissors: FiScissors,
  key: FiKey,
  knife: PiKnife,
  spool: GiSewingNeedle,
  shoe: GiRunningShoe,
};
export type IconName = keyof typeof icons;

export function Icon({ name }: { name: IconName }) {
  const Component = icons[name];
  return <Component aria-hidden="true" focusable="false" className="icon" />;
}
