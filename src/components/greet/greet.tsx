import { GreetProps } from "./greet.types";

export default function Greet({ name }: GreetProps) {
  return <div>Hello {name ? name : "Guest"}</div>;
}
