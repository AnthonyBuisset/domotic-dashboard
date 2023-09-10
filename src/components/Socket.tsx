import { Card } from "./Card";
import { RiPlugFill, RiPlugLine } from "react-icons/ri";
import { useJsonMqttValues, useMqttClient } from "../hooks/useMqtt";
import { PropsWithClassName } from "../utils";
import classNames from "classnames";

type Props = {
  title: string;
  topic: string;
} & PropsWithClassName;

export default function Socket({ title, topic, className }: Props) {
  const [state, linkquality] = useJsonMqttValues({ topic, paths: ["$.state", "$.linkquality"] });

  const client = useMqttClient();

  const publishState = (checked: boolean) =>
    client?.publish(`${topic}/set`, JSON.stringify({ state: checked ? "on" : "off" }));

  return (
    <Card
      linkquality={linkquality}
      onClick={() => publishState(!state)}
      className={classNames("flex flex-col items-center gap-1 text-6xl", className)}
    >
      <h1 className="-mt-2">{title}</h1>
      {state ? <RiPlugFill /> : <RiPlugLine />}
    </Card>
  );
}
