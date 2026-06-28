interface CardProps {
  value: string;
  pint: string;
}

export function Card(props: CardProps) {
  const { value, pint } = props;
  return (
    <div>
      {value}
      {pint}
    </div>
  );
}
export default Card;
