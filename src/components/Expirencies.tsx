import Image from 'next/image'

type Props = {
  title: string
  description: string
  date: string
  resume: string
  image: string
}

export default function Expirencies({
  title,
  description,
  date,
  image,
  resume,
}: Props) {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="rounded-md"
      />

      <div className="flex flex-col gap-2">
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h6>{date}</h6>
        <p>{resume}</p>
      </div>
    </div>
  )
}
