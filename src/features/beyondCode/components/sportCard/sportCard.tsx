interface ISportCard {
  title: string;
  description: string;
  image: string;
  invert: boolean;
}

function SportCard({ title, description, image, invert }: ISportCard) {
  return (
    <div className='flex flex-row justify-evenly'>
      <img src={image} alt='' />
      <div className='flex flex-col items-start justify-start'>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default SportCard;
